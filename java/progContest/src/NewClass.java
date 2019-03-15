/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author owner
 */
public class NewClass {
    public static void main(String[] args) throws Exception {	
	String line = "";
	int lines=1;
	
	java.util.Scanner in= new java.util.Scanner(System.in);
	while (lines > 0 && in.hasNextLine()) {
	    line += in.nextLine();
	    lines--;
	}
	
        System.out.println(line);
    }
}
