package helloworld;

public class Ball {
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

