package helloworld;

import java.util.Scanner;

public class scanner {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int input = scanner.nextInt();
		
		scanner abc = new scanner();
		abc.test(input);
	}
	
	public void test(int x) {
		for (int i = 1; i < 10; i++) {
			System.out.println(x + "*" + i + " = " + (x*i));
		}
	}

}
