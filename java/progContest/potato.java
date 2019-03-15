
import java.util.ArrayList;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// @author j.cho18
public class potato {
    public static void main(String[] args) throws Exception {	
        int howManyLinesOfInput=1;
        String[] input;

        //<editor-fold defaultstate="collapsed" desc=" Generated Code (input is an array containing objects of each line in each index) ">
	ArrayList<String> lines = new ArrayList<>();
	
	java.util.Scanner in= new java.util.Scanner(System.in);
	while (howManyLinesOfInput > 0 && in.hasNextLine()) {
	    lines.add(in.nextLine());
	    howManyLinesOfInput--;
	}
        input = lines.toArray(String[]::new);
        //</editor-fold>
        
        int numberOfKids = Integer.valueOf(input[0].split(" ")[0]);
	
        System.out.println();
    }
}
