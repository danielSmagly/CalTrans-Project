package jumpstart;

import com.itextpdf.forms.PdfAcroForm;
import com.itextpdf.forms.fields.PdfChoiceFormField;
import com.itextpdf.forms.fields.PdfFormField;
import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.geom.Rectangle;
import com.itextpdf.kernel.pdf.*;
import com.itextpdf.layout.Document;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

public class Dropdown_Test {

    public static final String DEST = "results/chapter04/Dropdown_Test.pdf";

    public static void main(String args[]) throws IOException {
        File file = new File(DEST);
        file.getParentFile().mkdirs();
        new Dropdown_Test().createPdf(DEST);
    }

    public void createPdf(String dest) throws IOException {

        //Initialize PDF writer
        OutputStream fos = new FileOutputStream(dest);
        PdfWriter writer = new PdfWriter(fos);

        //Initialize PDF document
        PdfDocument pdf = new PdfDocument(writer);
        PageSize ps = PageSize.A4;
        pdf.setDefaultPageSize(ps);

        // Initialize document
        Document document = new Document(pdf);

        Dropdown_Test.addAcroForm(document);

        //Close document
        document.close();
        
    }

    public static PdfAcroForm addAcroForm(Document doc) {
        //Add acroform
        PdfAcroForm form = PdfAcroForm.getAcroForm(doc.getPdfDocument(), true);

        //Create Dropbox 1 (Rect. Coords = (x, y, Box Width, Box Height)
        String[] options1 = {"Default", "option 1", "option 2", "option 3"};
        PdfChoiceFormField choiceField1 = PdfFormField.createComboBox(
        		doc.getPdfDocument(), new Rectangle(260, 676, 115, 15), "box1", "Default", options1);
        form.addField(choiceField1);
        
        //Create Dropbox 2
        String[] options2 = {"Default", "option 3", "option 2", "option 1"};
        PdfChoiceFormField choiceField2 = PdfFormField.createComboBox(
        		doc.getPdfDocument(), new Rectangle(260, 576, 115, 15), "box2", "Default", options2);
        form.addField(choiceField2);
        
        //DB Test 1
        String[] optionsTest = {"Test", "option 0", "option 1", "option 2"};
        PdfChoiceFormField choiceFieldTest = PdfFormField.createComboBox(
        		doc.getPdfDocument(), new Rectangle(260, 476, 115, 15), "box3", "Test", optionsTest);
        form.addField(choiceFieldTest);
        
        return form;
        
    }
}