package helloworld;

import java.util.ArrayList;

public class a {

	public static void main(String[] args) {
//		boolean loop = false;
//		
//		while(loop) {
//			
//		}
		
		System.out.println("hello");
		
		ArrayList<String> a = new ArrayList<String>();
		a.add(0, "World");
		a.add(1, "Hello ");
		a.add(2, "!");
		a.add(1, "insert");
		
		System.out.println(a.get(0) + a.get(1) + a.get(2));

	}

}
