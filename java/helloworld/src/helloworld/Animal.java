package helloworld;

public class Animal {
	String name;
	static int a = 1;
	
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
        Animal cat = new Animal();
        cat.setName("Lexi");
        System.out.println(cat.name);
        Animal horse = new Animal();
        
        
        System.out.println(cat.a);
        addone(cat.a);
        addone(horse.a);
        addone(horse.a);
        System.out.println(cat.a);
        
    }
}

