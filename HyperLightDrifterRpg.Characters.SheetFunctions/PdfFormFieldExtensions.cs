using iText.Kernel.Pdf;
using iText.Forms.Fields;

namespace HyperLightDrifterRpg.Characters
{
    public static class PdfFormFieldExtensions
    {
        public static int GetVisibility(this PdfFormField target)
        {
            // F should include appearance - decyphered from https://stackoverflow.com/a/51154387/195653
            var flags = target.GetPdfObject().GetAsInt(PdfName.F);
            return (((flags & iText.Kernel.Pdf.Annot.PdfAnnotation.NO_VIEW) == iText.Kernel.Pdf.Annot.PdfAnnotation.NO_VIEW) ? 0 : 2)
                + (((flags & iText.Kernel.Pdf.Annot.PdfAnnotation.PRINT) == iText.Kernel.Pdf.Annot.PdfAnnotation.PRINT) ? 1 : 0);
        }

        public static PdfFormField SetVisibility(this PdfFormField field, bool? display, bool? print)
        {
            var visibility = field.GetVisibility();
            switch (display)
            {
                case true:
                    visibility &= (~2);
                    break;
                case false:
                    visibility |= 2;
                    break;
            }
            switch (print)
            {
                case false:
                    visibility &= (~1);
                    break;
                case true:
                    visibility |= 1;
                    break;
            }
            return field.SetVisibility(visibility);
        }
    }
}
