package helloworld;

import java.util.ArrayList;

public class a {

	public static void main(String[] args) {
//		boolean loop = false;
//		
//		while(loop) {
//			
//		}
		
		ArrayList<String> a = new ArrayList<String>();
		a.add(0, "World");
		a.add(1, "Hello ");
		a.add(2, "!");
		a.add(1, "insert");
		
		for(String str: a) {
			System.out.println(str);
		}

	}

}
