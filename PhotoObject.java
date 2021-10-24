import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Image;

import java.io.FileNotFoundException;
import java.net.MalformedURLException;


public class PhotoObject {

	public static void main(String[] args) throws FileNotFoundException, MalformedURLException {
		// TODO Auto-generated method stub
		
		String imgSrc = "images//newer-img.png";
		ImageData data = ImageDataFactory.create(imgSrc);
		Image image1 = new Image(data);
		
		String path = "/Users/danielsmagly/Desktop/itexttestpdfs/testItext.pdf";
		PdfWriter pdfWriter = new PdfWriter(path);
		
		PdfDocument pdfDocument = new PdfDocument(pdfWriter);
		pdfDocument.addNewPage();
		
		Document document = new Document(pdfDocument);
		document.add(image1);
		document.add(image1);
		document.close();
		
		System.out.println("yo");
		
	}

}
