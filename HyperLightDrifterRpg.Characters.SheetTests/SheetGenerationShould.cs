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
            var fields = FillSheetFunction.GetFields(sheet).OrderBy(f => f.Key);
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
            var (bytes, err) = FillSheetFunction.FillSheet(new FillSheetFunction.CharacterSheet
            {
                Style = "HLD",
                Version = "v5",
                Fields = {
                    {"DashUpgrade-4-show", new JObject() { } },
                    {"Dash-4-background", new JObject() { { "visible", 1 } } },
                    {"Dash-4-fill", new JObject() { { "visible", 1 } } },
                    {"DashUpgrade-4-hide", new JObject() { { "visible", 1 } } },

                    {"DashUpgrade-4-show 2", new JObject() { { "value", true }, { "visible", 1 } } },
                    {"Dash-4-background 2", new JObject() { { "visible", false } } },
                    {"Dash-4-fill 2", new JObject() { { "visible", false } } },
                    {"DashUpgrade-4-hide 2", new JObject() { { "value", "Yes" }, { "visible", false } } },

                    {"Corruption-1", new JObject() { { "value", "Yes" } } },
                    {"Name", new JObject() { { "value", "Tester" } } },
                    {"Class", new JObject() { { "value", "Drifter" } } },
                    {"Dash-1-fill", new JObject() { { "value", "Yes" } } },
                    {"xp-1", new JObject() { { "value", "Yes" } } },
                    {"Pronouns", new JObject() { { "value", "he/him" } } },
                    {"xp-10", new JObject() { { "value", "Yes" } } },
                    {"Inventory", new JObject() { { "value", "equipment 1\r\nline 2" } } },
                    {"Inventory 2", new JObject() { { "value", "equipment 2" } } },
                    {"Talents", new JObject() { { "value", "Talent List" } } },
                    {"Talent-Passive-Effect", new JObject() { { "value", "PB" } } },
                    {"Talent-Passive-Title", new JObject() { { "value", "PT" } } },
                    {"Talents 3", new JObject() { { "value", "1B" } } },
                    {"Talent-1-Title", new JObject() { { "value", "1T" } } },
                    {"Talents 4", new JObject() { { "value", "2B" } } },
                    {"Talent-2-Title", new JObject() { { "value", "2T" } } },
                    {"Talents 5", new JObject() { { "value", "3B" } } },
                    {"Talent-3-Title", new JObject() { { "value", "3T" } } },
                    {"Talents 6", new JObject() { { "value", "4B" } } },
                    {"Talent-4-Title", new JObject() { { "value", "4T" } } },
                    {"Talents 7", new JObject() { { "value", "DB" } } },
                    {"Talent-Dash-Title", new JObject() { { "value", "DT" } } },
                },
            });
            Assert.Null(err);
            Assert.NotNull(bytes);

            using var memoryStream = new MemoryStream(bytes);
            using var reader = new PdfReader(memoryStream);
            using var actual = new PdfDocument(reader);
            var actualFields = PdfAcroForm.GetAcroForm(actual, false).GetFormFields();
            System.IO.File.WriteAllBytes($"{nameof(FillFields)}.pdf", bytes);

            using var reader2 = GetReader("HyperLightDrifterRpg.Characters.filled.pdf");
            using var filled = new PdfDocument(reader2);
            var expectedFields = PdfAcroForm.GetAcroForm(filled, false).GetFormFields();

            foreach (var field in actualFields.Keys)
            {
                Assert.Equal(expectedFields[field].GetValueAsString(), actualFields[field].GetValueAsString());
                Assert.Equal(expectedFields[field].GetAppearanceStates(), actualFields[field].GetAppearanceStates());
                Assert.Equal(expectedFields[field].GetVisibility(), actualFields[field].GetVisibility());
                Assert.Equal(expectedFields[field].GetPdfObject().GetAsInt(PdfName.F), actualFields[field].GetPdfObject().GetAsInt(PdfName.F));
                // TODO - find a way to determine difference between "generateAppearance" programatically
            }
        }

        [Fact]
        public void Dash2()
        {
            var (bytes, err) = FillSheetFunction.FillSheet(new FillSheetFunction.CharacterSheet
            {
                Style = "HLD",
                Version = "v5",
                Fields = {
                    {"DashUpgrade-4-show", new JObject() { } },
                    {"Dash-4-background", new JObject() { { "visible", true } } },
                    {"Dash-4-fill", new JObject() { { "visible", true } } },
                    {"DashUpgrade-4-hide", new JObject() { { "visible", true } } },

                    {"DashUpgrade-4-show 2", new JObject() { { "visible", false } } },
                    {"Dash-4-background 2", new JObject() { { "visible", true } } },
                    {"Dash-4-fill 2", new JObject() { { "visible", true } } },
                    {"DashUpgrade-4-hide 2", new JObject() { { "value", false }, { "visible", true } } },

                },
            });
            Assert.Null(err);
            Assert.NotNull(bytes);

            using var memoryStream = new MemoryStream(bytes);
            using var reader = new PdfReader(memoryStream);
            using var actual = new PdfDocument(reader);
            var actualFields = PdfAcroForm.GetAcroForm(actual, false).GetFormFields();
            System.IO.File.WriteAllBytes($"{nameof(Dash2)}.pdf", bytes);

            using var reader2 = GetReader("HyperLightDrifterRpg.Characters.dash2.pdf");
            using var filled = new PdfDocument(reader2);
            var expectedFields = PdfAcroForm.GetAcroForm(filled, false).GetFormFields();

            foreach (var field in actualFields.Keys)
            {
                Assert.Equal(expectedFields[field].GetValueAsString(), actualFields[field].GetValueAsString());
                Assert.Equal(expectedFields[field].GetAppearanceStates(), actualFields[field].GetAppearanceStates());
                Assert.Equal(expectedFields[field].GetVisibility(), actualFields[field].GetVisibility());
                Assert.Equal(expectedFields[field].GetPdfObject().GetAsInt(PdfName.F), actualFields[field].GetPdfObject().GetAsInt(PdfName.F));
                // TODO - find a way to determine difference between "generateAppearance" programatically
            }
        }

        [Fact]
        public void Dash3()
        {
            var (bytes, err) = FillSheetFunction.FillSheet(new FillSheetFunction.CharacterSheet
            {
                Style = "HLD",
                Version = "v5",
                Fields = {
                    {"DashUpgrade-4-show", new JObject() { } },
                    {"Dash-4-background", new JObject() { { "visible", true } } },
                    {"Dash-4-fill", new JObject() { { "visible", true } } },
                    {"DashUpgrade-4-hide", new JObject() { { "visible", true } } },

                    {"DashUpgrade-4-show 2", new JObject() { { "value", true }, { "visible", 1 } } },
                    {"Dash-4-background 2", new JObject() { { "visible", false } } },
                    {"Dash-4-fill 2", new JObject() { { "visible", false } } },
                    {"DashUpgrade-4-hide 2", new JObject() { { "value", "Yes" }, { "visible", false } } },

                },
            });
            Assert.Null(err);
            Assert.NotNull(bytes);

            using var memoryStream = new MemoryStream(bytes);
            using var reader = new PdfReader(memoryStream);
            using var actual = new PdfDocument(reader);
            var actualFields = PdfAcroForm.GetAcroForm(actual, false).GetFormFields();
            System.IO.File.WriteAllBytes($"{nameof(Dash3)}.pdf", bytes);

            using var reader2 = GetReader("HyperLightDrifterRpg.Characters.dash3.pdf");
            using var filled = new PdfDocument(reader2);
            var expectedFields = PdfAcroForm.GetAcroForm(filled, false).GetFormFields();

            foreach (var field in actualFields.Keys)
            {
                Assert.Equal(expectedFields[field].GetValueAsString(), actualFields[field].GetValueAsString());
                Assert.Equal(expectedFields[field].GetAppearanceStates(), actualFields[field].GetAppearanceStates());
                Assert.Equal(expectedFields[field].GetVisibility(), actualFields[field].GetVisibility());
                Assert.Equal(expectedFields[field].GetPdfObject().GetAsInt(PdfName.F), actualFields[field].GetPdfObject().GetAsInt(PdfName.F));
                // TODO - find a way to determine difference between "generateAppearance" programatically
            }
        }

        [Fact]
        public void Dash4()
        {
            var (bytes, err) = FillSheetFunction.FillSheet(new FillSheetFunction.CharacterSheet
            {
                Style = "HLD",
                Version = "v5",
                Fields = {
                    {"DashUpgrade-4-show", new JObject() { { "visible", 1 } } },
                    {"Dash-4-background", new JObject() { { "visible", false } } },
                    {"Dash-4-fill", new JObject() { { "visible", false } } },
                    {"DashUpgrade-4-hide", new JObject() { { "value", "Yes" }, { "visible", false } } },

                    {"DashUpgrade-4-show 2", new JObject() { { "value", true }, { "visible", 1 } } },
                    {"Dash-4-background 2", new JObject() { { "visible", false } } },
                    {"Dash-4-fill 2", new JObject() { { "visible", false } } },
                    {"DashUpgrade-4-hide 2", new JObject() { { "value", "Yes" }, { "visible", false } } },

                },
            });
            Assert.Null(err);
            Assert.NotNull(bytes);

            using var memoryStream = new MemoryStream(bytes);
            using var reader = new PdfReader(memoryStream);
            using var actual = new PdfDocument(reader);
            var actualFields = PdfAcroForm.GetAcroForm(actual, false).GetFormFields();
            System.IO.File.WriteAllBytes($"{nameof(Dash4)}.pdf", bytes);

            using var reader2 = GetReader("HyperLightDrifterRpg.Characters.dash4.pdf");
            using var filled = new PdfDocument(reader2);
            var expectedFields = PdfAcroForm.GetAcroForm(filled, false).GetFormFields();

            foreach (var field in actualFields.Keys)
            {
                Assert.Equal(expectedFields[field].GetValueAsString(), actualFields[field].GetValueAsString());
                Assert.Equal(expectedFields[field].GetAppearanceStates(), actualFields[field].GetAppearanceStates());
                Assert.Equal(expectedFields[field].GetVisibility(), actualFields[field].GetVisibility());
                Assert.Equal(expectedFields[field].GetPdfObject().GetAsInt(PdfName.F), actualFields[field].GetPdfObject().GetAsInt(PdfName.F));
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
