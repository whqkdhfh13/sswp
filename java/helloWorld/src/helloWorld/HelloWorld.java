package helloWorld;

import java.util.ArrayList;

public class HelloWorld {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Hello World!");
		ArrayList<String> a;
		ArrayList a[0] = String "Hello";
		
	}

}

class Ball {
	private float x;
	private float y;
	private float xSpeed = 2;
	private float ySpeed = 2;
	
	void constructor(float x, float y, float xSpeed, float ySpeed) {
		this.x = x;
		this.y = y;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}
	
	void move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}
}