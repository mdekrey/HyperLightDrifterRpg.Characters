using iText.Forms;
using iText.Kernel.Pdf;
using Newtonsoft.Json.Linq;
using System;
using System.IO;
using System.Linq;
using Xunit;

namespace HyperLightDrifterRpg.Characters
{
    public class SheetGenerationShould
    {
        [Fact]
        public void DetectDifferentFieldTypes()
        {
            var fields = FillSheetFunction.GetFields(new FillSheetFunction.CharacterSheet { Style = "HLD", Version = "v5" });
            
            Assert.Equal(FillSheetFunction.FieldType.String, fields["Name"]);
            Assert.Equal(FillSheetFunction.FieldType.Boolean, fields["xp-1"]);
        }

        [Fact(Skip = "Generates a PDF for all files - is slow and doesn't really test it")]
        public void GenerateAllFields()
        {
            var fields = FillSheetFunction.GetFields(new FillSheetFunction.CharacterSheet { Style = "HLD", Version = "v5" });
            foreach (var field in fields)
            {
                var (result, errorMessage) = FillSheetFunction.FillSheet(new FillSheetFunction.CharacterSheet
                { 
                    Style = "HLD", 
                    Version = "v5", 
                    Fields = {
                        { field.Key, new JObject() {
                            {
                                "value",
                                field.Value switch
                                {
                                    FillSheetFunction.FieldType.Boolean => new JValue(true),
                                    FillSheetFunction.FieldType.String => new JValue("foo"),
                                    _ => throw new NotImplementedException()
                                }
                            }
                        } }
                    },
                });
                Assert.NotNull(result);
                Assert.Null(errorMessage);
                System.IO.File.WriteAllBytes($"HLD-v5-{field.Key}.pdf", result);
            }
        }

        [Fact]
        public void GenerateTypingInformation()
        {
            var sheet = new FillSheetFunction.CharacterSheet { Style = "HLD", Version = "v5" };
            var fields = FillSheetFunction.GetFields(sheet);
            var typeScriptType = $@"
            export type Sheet{sheet.Style}{sheet.Version} = {{
                {string.Join(@"
                ", fields.Select(f => $"'{f.Key}': PdfField<{f.Value.ToString("g").ToLower()}>;"))}
            }};

            export type PdfField<T> = {{
                value?: T;
                generateAppearance?: boolean;
                visible?: boolean | number;
            }}";
            Assert.StartsWith("export type Sheet", typeScriptType.Trim());
            Assert.Contains("'Name': PdfField<string>;", typeScriptType);
            Assert.Contains("'xp-1': PdfField<boolean>;", typeScriptType);
        }

        [Fact]
        public void FillFields()
        {
            var (bytes, _) = FillSheetFunction.FillSheet(new FillSheetFunction.CharacterSheet
            {
                Style = "HLD",
                Version = "v5",
                Fields = {
                    {"DashUpgrade-4-show", new JObject() { { "value", "Yes" } } },
                    {"DashUpgrade-4-show 2", new JObject() { { "value", "Yes" } } },
                    {"Corruption-1", new JObject() { { "value", "Yes" } } },
                    {"Name", new JObject() { { "value", "Tester" } } },
                    {"Class", new JObject() { { "value", "Drifter" } } },
                    {"Dash-1-fill", new JObject() { { "value", "Yes" } } },
                    {"DashUpgrade-4-hide", new JObject() { { "value", "Yes" } } },
                    {"xp-1", new JObject() { { "value", "Yes" } } },
                    {"Pronouns", new JObject() { { "value", "he/him" } } },
                    {"xp-10", new JObject() { { "value", "Yes" } } },
                    {"DashUpgrade-4-hide 2", new JObject() { { "value", "Yes" } } },
                },
            });
            Assert.NotNull(bytes);

            using var memoryStream = new MemoryStream(bytes);
            using var reader = new PdfReader(memoryStream);
            using var original = new PdfDocument(reader);
            var originalFields = PdfAcroForm.GetAcroForm(original, false).GetFormFields();

            using var reader2 = GetReader("HyperLightDrifterRpg.Characters.filled.pdf");
            using var filled = new PdfDocument(reader2);
            var filledFields = PdfAcroForm.GetAcroForm(filled, false).GetFormFields();

            foreach (var field in originalFields.Keys)
            {
                Assert.Equal(filledFields[field].GetValueAsString(), originalFields[field].GetValueAsString());
                Assert.Equal(filledFields[field].GetAppearanceStates(), originalFields[field].GetAppearanceStates());
                // TODO - find a way to determine difference between "generateAppearance" programatically
            }
        }

        [Fact]
        public void FillFieldsReadOnly()
        {
            var (bytes, _) = FillSheetFunction.FillSheet(new FillSheetFunction.CharacterSheet
            {
                Style = "HLD",
                Version = "v5",
                Fields = {
                    {"DashUpgrade-4-show", new JObject() { { "value", "Yes" } } },
                    {"DashUpgrade-4-show 2", new JObject() { { "value", "Yes" } } },
                    {"Corruption-1", new JObject() { { "value", "Yes" } } },
                    {"Name", new JObject() { { "value", "Tester" } } },
                    {"Class", new JObject() { { "value", "Drifter" } } },
                    {"Dash-1-fill", new JObject() { { "value", "Yes" } } },
                    {"DashUpgrade-4-hide", new JObject() { { "value", "Yes" } } },
                    {"xp-1", new JObject() { { "value", "Yes" } } },
                    {"Pronouns", new JObject() { { "value", "he/him" } } },
                    {"xp-10", new JObject() { { "value", "Yes" } } },
                    {"DashUpgrade-4-hide 2", new JObject() { { "value", "Yes" } } },
                },
                ReadOnly = true,
            });
            Assert.NotNull(bytes);

            using var memoryStream = new MemoryStream(bytes);
            using var reader = new PdfReader(memoryStream);
            using var original = new PdfDocument(reader);
            var form = PdfAcroForm.GetAcroForm(original, false);

            Assert.Null(form);
        }

        public static PdfReader GetReader(string resourceName)
        {
            using var stream = typeof(SheetGenerationShould).Assembly.GetManifestResourceStream(resourceName);
            return new PdfReader(stream);
        }
    }
}
