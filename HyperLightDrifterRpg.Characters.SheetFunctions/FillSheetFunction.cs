using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using iText.Kernel.Pdf;
using iText.Forms;
using System.Linq;

namespace HyperLightDrifterRpg.Characters
{
    public static class FillSheetFunction
    {
        public class CharacterSheet
        {
            public string Style { get; set; } = "HLD";
            public string Version { get; set; } = "v5";
            public bool ReadOnly { get; set; } = false;
            public Dictionary<string, JObject> Fields { get; } = new Dictionary<string, JObject>();
        }

        [FunctionName("FillSheet")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var data = JsonConvert.DeserializeObject<CharacterSheet>(requestBody);

            switch (FillSheet(data))
            {
                case (_, string errorMessage):
                    return new BadRequestObjectResult(errorMessage);
                case (null, _):
                    return new BadRequestResult();
                case (byte[] pdfBytes, _):
                    return new FileContentResult(pdfBytes, "application/pdf") { FileDownloadName = $"character-{data.Style}-{DateTime.Now:yyyy-MM-dd}.pdf" };
            }
        }

        public enum FieldType
        {
            String,
            Boolean
        }

        public static Dictionary<string, FieldType> GetFields(CharacterSheet sheet)
        {
            using var reader = GetReader($"HyperLightDrifterRpg.Characters.{sheet.Style}_CharacterSheet_{sheet.Version}.pdf");
            using var document = new PdfDocument(reader);
            var fields = PdfAcroForm.GetAcroForm(document, false).GetFormFields();

            return fields.ToDictionary(field => field.Key, field => field.Value switch {
                iText.Forms.Fields.PdfButtonFormField _ => FieldType.Boolean,
                _ => FieldType.String
            });
        }

        public static (byte[]? result, string? errorMessage) FillSheet(CharacterSheet sheet)
        {
            using var reader = GetReader($"HyperLightDrifterRpg.Characters.{sheet.Style}_CharacterSheet_{sheet.Version}.pdf");
            using var memoryStream = new MemoryStream();
            using var writer = new PdfWriter(memoryStream);
            using var document = new PdfDocument(reader, writer);
            var form = PdfAcroForm.GetAcroForm(document, false);
            var fields = form.GetFormFields();
            
            foreach (var field in sheet.Fields.Keys)
            {
                if (!fields.ContainsKey(field))
                    return (null, $"Unknown field '{field}'. Valid fields are: {{{string.Join(", ", GetFields(sheet).Select(f => $"'{f.Key}: {f.Value.ToString("g")}'"))}}}");

                var fieldChange = sheet.Fields[field];
                
                if (fieldChange["value"] != null)
                {
                    var fieldValue = fieldChange["value"] switch
                    {
                        JValue value when value.Type == JTokenType.Boolean =>
                            (fields[field].GetAppearanceStates(), value.ToObject<bool>()) switch
                            {
                                (var list, true) when list.Length > 1 => list[1],
                                (var list, false) when list.Length > 0 => list[0],
                                (_, true) => "Yes",
                                (_, false) => "Off"
                            },
                        var other => other.ToObject<string>(),
                    };
                    var generateAppearance = (fields[field], fieldChange) switch
                    {
                        (_, JObject obj) when obj["generateAppearance"] != null => obj["generateAppearance"].ToObject<bool>(),
                        (iText.Forms.Fields.PdfTextFormField t, _) when t.IsMultiline() => true,
                        _ => false,
                    };

                    fields[field].SetValue(fieldValue, generateAppearance);
                }
                if (fieldChange["visible"] != null)
                {
                    switch (fieldChange["visible"])
                    {
                        case var v when v.Type == JTokenType.Boolean:
                            fields[field].SetVisibility(
                                v.ToObject<bool>(),
                                null
                            );
                            break;
                        case var v when v.Type == JTokenType.Integer:
                            fields[field].SetVisibility(v.ToObject<int>());
                            break;
                    }
                }
            }

            if (sheet.ReadOnly)
                form.FlattenFields();

            document.Close();
            return (memoryStream.ToArray(), null);
        }

        public static PdfReader GetReader(string resourceName)
        {
            using var stream = typeof(FillSheetFunction).Assembly.GetManifestResourceStream(resourceName);
            return new PdfReader(stream);
        }
    }
}
