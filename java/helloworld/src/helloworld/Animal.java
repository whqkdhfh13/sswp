package helloworld;

public class Animal {
	String name;
	static int a = 1;
	
	public Animal(String name) {
		this.setName(name);
	}
	
	public static int addone(int x) {
		x++;
		return x;
	}
	
	public void setName(String name) {
        this.name = name;
    }
	
	public static int add(int x, int y) {
		return x + y;
	}
	
	public static void main(String[] args) {
        Animal cat = new Animal("lora");
        System.out.println(cat.name);
        Animal horse = new Animal("ceilheb");
        
        
        System.out.println(cat.a);
        addone(cat.a);
        addone(horse.a);
        System.out.println(cat.a);
        
        int[][] arr = new int[3][];
        arr[0] = new int[2];
        arr[1] = new int[2];
        arr[1][0] = 4;
        
    }
	
	public interface Predator {
		public String getFood();
	}
}

