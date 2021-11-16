import java.awt.FlowLayout;

import java.awt.event.*;

import java.io.File;

import javax.swing.*;

import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Image;

import java.io.FileNotFoundException;
import java.net.MalformedURLException;




public class FileChooser extends JFrame implements ActionListener{
	
	public static String filePath = "";

	JButton button;

	public FileChooser(){		

		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		this.setLayout(new FlowLayout());

		button = new JButton("Select File");

		button.addActionListener(this);

		this.add(button);

		this.pack();

		this.setVisible(true);

	}

	public void actionPerformed(ActionEvent e) {

		if(e.getSource()==button) {

			JFileChooser fileChooser = new JFileChooser();

			fileChooser.setCurrentDirectory(new File(".")); //sets current directory

			int response = fileChooser.showOpenDialog(null); //select file to open

			if(response == JFileChooser.APPROVE_OPTION) {

				File file = new File(fileChooser.getSelectedFile().getAbsolutePath());
				
				filePath = file.getAbsolutePath();

				System.out.println(filePath);
				
				String imgSrc = filePath;
				
			}

		}

	}

}
    
/*
 import javax.swing.*;    
    import java.awt.event.*;    
    import java.io.*;    
    public class FileChoserDemo extends JFrame implements ActionListener{    
    JMenuBar mb;    
    JMenu file;    
    JMenuItem open;    
    JTextArea ta;    
    FileChoserDemo() {    
    	open=new JMenuItem("Open File");    
    	open.addActionListener(this);       
    	
    	file=new JMenu("File");    
    	file.add(open);             
    	
    	mb=new JMenuBar();    
    	
    	mb.setBounds(0,0,800,20);    
    	mb.add(file);              
    	ta=new JTextArea(800,800);    
    	ta.setBounds(0,20,800,800); 
    	
    	add(mb);    
    	add(ta);              
    }    
    public void actionPerformed(ActionEvent e) {    
    if(e.getSource()==open) {    
        JFileChooser fc=new JFileChooser();    
        int i=fc.showOpenDialog(this);    
        if(i==JFileChooser.APPROVE_OPTION){    
            File f=fc.getSelectedFile();    
            
            String filepath=f.getPath();    
            try {  
            	BufferedReader br=new BufferedReader(new FileReader(filepath));    
            	String s1="",s2="";                         
            	while((s1=br.readLine())!=null){    
            		s2+=s1+"\n";    
            	}    
            	
            ta.setText(s2);    
            br.close();    
            
            }
            
            catch (Exception ex) {ex.printStackTrace();  
            }                 
        	}    
    	}    
    }          
    public static void main(String[] args) {    
        FileChoserDemo om=new FileChoserDemo();    
                 om.setSize(500,500);    
                 om.setLayout(null);    
                 om.setVisible(true);    
                 om.setDefaultCloseOperation(EXIT_ON_CLOSE);    
    	}    
    }  
 */
