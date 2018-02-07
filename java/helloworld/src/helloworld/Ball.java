package helloworld;

public class Ball {
	private float x;
	private float y;
	private float xSpeed = 2;
	private float ySpeed = 2;
	
	public Ball(float x, float y, float xSpeed, float ySpeed) {
		this.x = x;
		this.y = y;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}
	
	public void move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}
	
	public float[] getPos() {
		float[] temp = {x, y};
		return temp;
	}
	
	public String getPos(int t) {	
		return "x : " + this.x + " | y : " + this.y;
	}
	
	public static void main(String[] args) {
		Ball abc = new Ball(3,4,2,2);
		abc.getPos();
	}
}

 