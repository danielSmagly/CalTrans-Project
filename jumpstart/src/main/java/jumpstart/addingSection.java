package jumpstart;

import com.itextpdf.forms.PdfAcroForm;
import com.itextpdf.forms.fields.PdfTextFormField;
import com.itextpdf.kernel.events.Event;
import com.itextpdf.kernel.events.IEventHandler;
import com.itextpdf.kernel.events.PdfDocumentEvent;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.geom.Rectangle;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfPage;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.canvas.PdfCanvas;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.property.TextAlignment;
import com.itextpdf.io.font.constants.StandardFonts;

import jumpstart.summarySection;

public class addingSection extends SectionEventHandler{
	private static int yStart = 761;   //The y value of where the next text line should be made
	private static int AFinding = 6;   //Number of Administration Findings
	private static int BMPFinding = 3; //Number of BMP Site Findings
	private static boolean isFirstCellSet = true; //Checks if a table has reached the end of a page
	private static int tempBoxCount = 0;  //The number of pages a table has spanned
	
	public static void main(String args[]) throws Exception{
		//Making the pdf
		String dest = "results/iTest/addSection.pdf";
		PdfWriter writer = new PdfWriter(dest);
		PdfDocument pdf = new PdfDocument(writer); 
		Document document = new Document(pdf);
		
		//Making the directory (in case it doesn't exist)
		File file = new File(dest);
        	file.getParentFile().mkdirs();
		
		//Section stuffs
		summarySection sumBase = new summarySection();

		//AcroForm
		PdfAcroForm form = PdfAcroForm.getAcroForm(document.getPdfDocument(), true);
		
		//Making tables
		float columnWidth[] = {sumBase.getFirst(), sumBase.getSecond(), sumBase.getThird(), sumBase.getFourth()};
		Table tableAS = new Table(columnWidth);
		Table tableBMP = new Table(columnWidth);
		
		//Admin Summary Cells
		addSumCellsAS(document, tableAS, form);
		
		//BMP Summary Cells
		addSumCellsBMP(document, tableBMP, form);
		
		//Adding tables
		document.add(tableAS);
		document.add(tableBMP);
		
		//How to add to multiple pages (testing)
		pdf.addEventHandler(PdfDocumentEvent.END_PAGE, new SectionEventHandler());
		
		//Close
		document.close();
		System.out.println("Sucess");
	}
	
	public static void addSumCellsAS(Document document, Table tableAS, PdfAcroForm form){
		tableAS.addCell(new Cell().add(new Paragraph("Finding No.").setTextAlignment(TextAlignment.CENTER)));
		tableAS.addCell(new Cell().add(new Paragraph("Finding Description Summary").setTextAlignment(TextAlignment.CENTER)));
		tableAS.addCell(new Cell().add(new Paragraph("Corrected?").setTextAlignment(TextAlignment.CENTER)));
		tableAS.addCell(new Cell().add(new Paragraph("Date Completed").setTextAlignment(TextAlignment.CENTER)));
		if (isFirstCellSet){
			for (int i = 1; i < AFinding + 1; i++){
				tableAS.addCell(new Cell().add(new Paragraph("A" + i).setTextAlignment(TextAlignment.CENTER)));
				tableAS.addCell(new Cell().add(new Paragraph("")));
				tableAS.addCell(new Cell().add(new Paragraph("No").setTextAlignment(TextAlignment.CENTER)));
				tableAS.addCell(new Cell().add(new Paragraph("").setTextAlignment(TextAlignment.CENTER)));
				if (yStart - 23 < 20){
					yStart = 783; //would preferably let the text lines show at this coordinate next page
					isFirstCellSet = false;
					tempBoxCount = i;
					break;
				}
				PdfTextFormField descAS = PdfTextFormField.createText(document.getPdfDocument(),new Rectangle(112, yStart, 200, 22), "descAS" + i, "");
				form.addField(descAS);
				if (i % 2 == 0 && i != AFinding){
					yStart -= 22;
				}
				else if(i % 2 == 1 && i != AFinding){
					yStart -= 23;
				}
			}
			yStart -= 45;
		}
		while (isFirstCellSet == false){
			for (int i = tempBoxCount; i < AFinding + 1; i++){
				if (yStart - 23 < 20){
					yStart = 783; //would preferably let the text lines show at this coordinate next page
					tempBoxCount = i;
					break;
				}
				tableAS.addCell(new Cell().add(new Paragraph("A" + i).setTextAlignment(TextAlignment.CENTER)));
				tableAS.addCell(new Cell().add(new Paragraph("")));
				tableAS.addCell(new Cell().add(new Paragraph("No").setTextAlignment(TextAlignment.CENTER)));
				tableAS.addCell(new Cell().add(new Paragraph("").setTextAlignment(TextAlignment.CENTER)));
				PdfTextFormField descAS = PdfTextFormField.createText(document.getPdfDocument(),new Rectangle(112, yStart, 200, 22), "descAS" + i, "");
				form.addField(descAS);
				if (i == AFinding){
					yStart -= 45;
					tempBoxCount = 0;
					isFirstCellSet = true;
					break;
				}
				if (i % 2 == 0 && i != AFinding){
					yStart -= 22;
				}
				else if (i % 2 == 1 && i != AFinding){
					yStart -= 23;
				}
			}
		}
	}
	
	public static void addSumCellsBMP(Document document, Table tableBMP, PdfAcroForm form){
		tableBMP.addCell(new Cell().add(new Paragraph("Finding No.").setTextAlignment(TextAlignment.CENTER)));
		tableBMP.addCell(new Cell().add(new Paragraph("Finding Description Summary").setTextAlignment(TextAlignment.CENTER)));
		tableBMP.addCell(new Cell().add(new Paragraph("Corrected?").setTextAlignment(TextAlignment.CENTER)));
		tableBMP.addCell(new Cell().add(new Paragraph("Date Completed").setTextAlignment(TextAlignment.CENTER)));
		if (isFirstCellSet){
			for (int i = 1; i < BMPFinding + 1; i++){
				tableBMP.addCell(new Cell().add(new Paragraph("B" + i).setTextAlignment(TextAlignment.CENTER)));
				tableBMP.addCell(new Cell().add(new Paragraph("")));
				tableBMP.addCell(new Cell().add(new Paragraph("No").setTextAlignment(TextAlignment.CENTER)));
				tableBMP.addCell(new Cell().add(new Paragraph("").setTextAlignment(TextAlignment.CENTER)));
				if (yStart - 23 < 20){
					yStart = 783; //would preferably let the text lines show at this coordinate next page
					isFirstCellSet = false;
					tempBoxCount = i;
					break;
				}
				PdfTextFormField descBMP = PdfTextFormField.createText(document.getPdfDocument(),new Rectangle(112, yStart, 200, 22), "descBMP" + i, "");
				form.addField(descBMP);
				if (i % 2 == 0 && i != BMPFinding){
					yStart -= 22;
				}
				else if (i % 2 == 1 && i != BMPFinding){
					yStart -= 23;
				}
			}
		}
		while (isFirstCellSet == false){
			for (int i = tempBoxCount; i < BMPFinding + 1; i++){
				if (yStart - 23 < 20){
					yStart = 783; //would preferably let the text lines show at this coordinate next page
					tempBoxCount = i;
					break;
				}
				tableBMP.addCell(new Cell().add(new Paragraph("B" + i).setTextAlignment(TextAlignment.CENTER)));
				tableBMP.addCell(new Cell().add(new Paragraph("")));
				tableBMP.addCell(new Cell().add(new Paragraph("No").setTextAlignment(TextAlignment.CENTER)));
				tableBMP.addCell(new Cell().add(new Paragraph("").setTextAlignment(TextAlignment.CENTER)));
				PdfTextFormField descAS = PdfTextFormField.createText(document.getPdfDocument(),new Rectangle(112, yStart, 200, 22), "descBMP" + i, "");
				form.addField(descAS);
				if (i == BMPFinding){
					tempBoxCount = 0;
					isFirstCellSet = true;
					break;
				}
				if (i % 2 == 0){
					yStart -= 22;
				}
				else{
					yStart -= 23;
				}
			}
		}
	}
}
class SectionEventHandler implements IEventHandler{ //could try to use this for putting text lines on different pages?
	public void handleEvent(Event event){
		PdfDocumentEvent docEvent = (PdfDocumentEvent) event;
        PdfDocument pdfDoc = docEvent.getDocument();
        PdfPage page = docEvent.getPage();
        int pageNumber = pdfDoc.getPageNumber(page); 
        Rectangle pageSize = page.getPageSize();
        PdfCanvas pdfCanvas = new PdfCanvas(page.newContentStreamBefore(), page.getResources(), pdfDoc);
        PdfFont font = null;
		try {
			font = PdfFontFactory.createFont(StandardFonts.TIMES_ROMAN);
		} catch (java.io.IOException e) {
			e.printStackTrace();
		}
        pdfCanvas.beginText()
        	.setFontAndSize(font, 14)
        	.moveText(pageSize.getWidth() / 2 - 60, pageSize.getTop() - 20)
        	.showText("CalTrans Project")
        	.moveText(60, -pageSize.getTop() + 30)
        	.showText(String.valueOf(pageNumber))
        	.endText();
        
        pdfCanvas.release();
	}
}
