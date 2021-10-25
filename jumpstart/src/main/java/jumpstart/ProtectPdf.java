import com.itextpdf.kernel.pdf.EncryptionConstants;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfReader;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.WriterProperties;

import java.io.FileOutputStream;
import java.io.IOException;

public class ProtectPdf {
    private static final String ORIG = "* Insert pdf file path ";
    private static final String OUTPUT_FOLDER = " Insert target path *";
    private static final byte[] USERPASS = "viewer".getBytes();  //password for viewing ONLY
    private static final byte[] OWNERPASS = "editor".getBytes();  //password for overseers to re-edit something in pdf

    public static void main(String[] args) throws IOException {
        PdfReader pdfReader = new PdfReader(ORIG);
        WriterProperties writerProperties = new WriterProperties();
        writerProperties.setStandardEncryption(USERPASS, OWNERPASS, EncryptionConstants.ALLOW_PRINTING, EncryptionConstants.ENCRYPTION_AES_128);
        PdfWriter pdfWriter = new PdfWriter(new FileOutputStream(OUTPUT_FOLDER + " Protected.pdf"), writerProperties);
        PdfDocument pdfDocument = new PdfDocument(pdfReader, pdfWriter);
        pdfDocument.close();
    }
}
