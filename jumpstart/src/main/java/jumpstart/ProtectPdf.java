
import com.itextpdf.kernel.pdf.EncryptionConstants;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfReader;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.WriterProperties;
import java.util.Scanner;
import java.io.FileOutputStream;
import java.io.IOException;
import javax.swing.*;

import java.awt.event.*;    
import java.io.*;    

public class ProtectPdf extends JFrame implements ActionListener{
	private static String ORIG = "* Insert pdf file path *";
    private static String OUTPUT_FOLDER = "* Insert target path *";  
    private static String vPASS;
    private static String oPASS;
    private static String o;
    private static String orig;
    private static boolean set = false;
    private static byte[] USERPASS;  //password for viewing ONLY
    private static byte[] OWNERPASS;  //password for overseers to re-edit something in pdf
    
    public static void main(String[] args) throws IOException {
        openBox();
        saveBox();   
        if(o != null && orig != null)
        {
	        passwordSet();
	        passwordSet();
	        Protect(o, orig, vPASS, oPASS);
        } 
        else	
        {
          JOptionPane.showMessageDialog(null, "Incorrect file parameters given.","Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    
    public static void Protect(String orig, String output, String userpass, String ownerpass) throws IOException
    {
    	ProtectPdf.ORIG = orig;
    	ProtectPdf.OUTPUT_FOLDER = output;
    	ProtectPdf.USERPASS = userpass.getBytes();
    	ProtectPdf.OWNERPASS = ownerpass.getBytes();
    	PdfReader pdfReader = new PdfReader(ORIG);
        WriterProperties writerProperties = new WriterProperties();
        writerProperties.setStandardEncryption(USERPASS, OWNERPASS, EncryptionConstants.ALLOW_PRINTING, EncryptionConstants.ENCRYPTION_AES_128);
        //FILE_NAME = JOptionPane.showInputDialog(null, "Please enter the new file name.");
        //System.out.println(FILE_NAME);
        PdfWriter pdfWriter = new PdfWriter(new FileOutputStream(OUTPUT_FOLDER + " Protected.pdf"), writerProperties);
        PdfDocument pdfDocument = new PdfDocument(pdfReader, pdfWriter);
        pdfDocument.close();
        JOptionPane.showMessageDialog(null, "Pdf protected!","Notice", JOptionPane.PLAIN_MESSAGE);
    }
    
    public static void openBox()
    {
    	JFileChooser chooser = new JFileChooser();
    	JOptionPane.showMessageDialog(null, "First, open the file that you want to protect.","Message", JOptionPane.PLAIN_MESSAGE);
    	/*om.setSize(350,350);    
    	om.add(new JLabel("Hello World"));
        om.setLayout(null);    
        om.setVisible(true);    
        om.setDefaultCloseOperation(DISPOSE_ON_CLOSE); 
        */
        chooser.setMultiSelectionEnabled(true);
        chooser.setFileSelectionMode(JFileChooser.FILES_AND_DIRECTORIES);
        chooser.setFileHidingEnabled(false);
        if (chooser.showOpenDialog(null) == JFileChooser.APPROVE_OPTION) {
           File f = chooser.getSelectedFile();
           System.err.println(f.getPath());
           o = f.getPath();  
           om.dispose();
        //FileChoserDemo.path = o;
        }
    }
    
    public static void saveBox()
    {
    	JFileChooser chooser = new JFileChooser();	
    	JOptionPane.showMessageDialog(null, "Then, open the folder where you want to save the file.","Message", JOptionPane.PLAIN_MESSAGE);
        /*om.setSize(350,350);    
        om.setLayout(null);    
        om.setVisible(true);    
        om.setDefaultCloseOperation(DISPOSE_ON_CLOSE);  
        */
        chooser.setMultiSelectionEnabled(true);
        chooser.setFileSelectionMode(JFileChooser.FILES_AND_DIRECTORIES);
        chooser.setFileHidingEnabled(false);
        if (chooser.showOpenDialog(null) == JFileChooser.APPROVE_OPTION) {
           File f = chooser.getSelectedFile();
           System.err.println(f.getAbsolutePath());
           orig = f.getAbsolutePath();  
           om.dispose();
        //FileChoserDemo.path = o;
        }
    }
    
    public static void passwordSet()
    {
    	if(set == false)
    	{
	    	vPASS = JOptionPane.showInputDialog(null, "Please enter the viewer password.");
	        System.out.println(vPASS);
	        set = true;
    	} else
    	{
    		oPASS = JOptionPane.showInputDialog(null, "Please enter the owner password.");
	        System.out.println(oPASS);
    	}
    }

	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		
	}
}

