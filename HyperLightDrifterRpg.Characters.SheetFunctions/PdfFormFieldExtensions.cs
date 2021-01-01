using iText.Kernel.Pdf;
using iText.Forms.Fields;

namespace HyperLightDrifterRpg.Characters
{
    public static class PdfFormFieldExtensions
    {
        private static bool HasFlag(int flags, int flag) =>
            (flags & flag) == flag;
        private static int SetFlag(int flags, int flag) =>
            flags | flag;
        private static int ClearFlag(int flags, int flag) =>
            flags & (~flag);

        public static int GetVisibility(this PdfFormField target)
        {
            // https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_reference_1-7.pdf p608 has detail of flags
            // https://github.com/itext/itext7-dotnet/blob/2f189af50b06ec574248e20ef39186c55721649d/itext/itext.forms/itext/forms/fields/PdfFormField.cs
            var flags = target.GetPdfObject().GetAsInt(PdfName.F)!.Value;
            if (HasFlag(flags, iText.Kernel.Pdf.Annot.PdfAnnotation.HIDDEN))
                return PdfFormField.HIDDEN;
            return (HasFlag(flags, iText.Kernel.Pdf.Annot.PdfAnnotation.NO_VIEW) ? PdfFormField.HIDDEN_BUT_PRINTABLE : PdfFormField.VISIBLE);
        }

        public static PdfFormField SetVisibility(this PdfFormField field, bool? display, bool? print)
        {
            // https://github.com/itext/itext7-dotnet/blob/2f189af50b06ec574248e20ef39186c55721649d/itext/itext.forms/itext/forms/fields/PdfFormField.cs
            var flags = field.GetPdfObject().GetAsInt(PdfName.F)!.Value;
            flags = display switch
            {
                false => ClearFlag(flags, iText.Kernel.Pdf.Annot.PdfAnnotation.NO_VIEW),
                true => SetFlag(flags, iText.Kernel.Pdf.Annot.PdfAnnotation.NO_VIEW),
                null => flags
            };
            if (print == false && display == false)
                flags = ClearFlag(SetFlag(flags, iText.Kernel.Pdf.Annot.PdfAnnotation.HIDDEN), iText.Kernel.Pdf.Annot.PdfAnnotation.PRINT);
            if (print == true)
                flags = SetFlag(flags, iText.Kernel.Pdf.Annot.PdfAnnotation.PRINT);
            field.Put(PdfName.F, new PdfNumber(flags));
            return field;
        }
    }
}
