package jumpstart;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class HelloWorld 
{
	public static final String DEST = "jumpstart/results/hello_world.pdf";
	
	public static void main(String args[]) throws IOException 
	{
		File file = new File(DEST);
		file.getParentFile().mkdirs();
		new HelloWorld().createPdf(DEST);
	}
	
	public void createPdf(String dest) throws IOException
	{
		FileOutputStream fos = new FileOutputStream(dest);
		PdfWriter writer = new PdfWriter(fos);
		
		PdfDocument pdf = new PdfDocument(writer);
		
		Document document = new Document(pdf);
		
		document.add(new Paragraph("12398172340721097401240612"));
		
		document.add(new Paragraph("csc131 team very awesome 2"));
		
		document.close();
	}
}
	