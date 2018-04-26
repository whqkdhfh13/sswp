/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package randomstuff;

import java.util.*;



/**
 *
 * @author j.cho18
 */
public class RandomStuff {

    /**
     * @param args the command line arguments
     */
    
    public interface Command 
    {
        public void execute(int... d1);
    }
    
    public static List<String> parenthesisPairs(int... n){
        List<String> ans = new ArrayList();
        recurse(ans, "", 0, 0, n[0]);
        if (n.length > 1) System.out.println(String.format("There are %s combinations of matching parentheses.", ans.size()));
        return ans;
    }
    
    public static void recurse(List<String> ans, String cur, int open, int close, int n) {
        if (cur.length() == n * 2) {
            ans.add(cur);
            return;
        }
        if (open < n) {
            recurse(ans, cur + "(", open + 1, close, n);
        }
        if (close < open) {
            recurse(ans, cur + ")", open, close + 1, n);
        }
    }
    
    public static boolean isPalindrome(int n) {
        if (0 <= n && n < 10) return true;
        List<String> temp = new ArrayList<>(Arrays.asList(String.valueOf(n).split("")));
        for (int i = 0; i < temp.size()/2; i++) {
            if (!temp.get(i).equals(temp.get(temp.size() - (i + 1)))) return false;
        }
        return true;
    }
    
    public static boolean isPalindromeWithOnlyInt(int n) {
        if (0 <= n && n < 10) return true;
        int length = (int)(Math.log10(n) + 1);
        int tempNum = n;
        int[] tempArr = new int[length];
        for (int i = 0; i < length; i++) {
            tempArr[i] = tempNum % 10;
            tempNum -= tempArr[i];
            tempNum /= 10;
        }
        for (int i = 0; i < length / 2; i++) {
            if (tempArr[i] != tempArr[length - (i + 1)]) return false;
        }
        return true;
    }
    
    public static List<Integer> FindP(int... n) {
        List<Integer> temp = new ArrayList<>();
        for (int i = 0; i < n[0]; i++) {
            if (isPalindromeWithOnlyInt(i)) temp.add(i);
        }
        if (n.length > 1) System.out.println(String.format("There are %s palindromes below the number %s.", temp.size(), n[0]));
        return temp;
    }
    
    public static float msT(int howMany, Command aFunc, int... p) {
        float a = 0; 
        if (howMany < 1) {
            howMany = 1;
        }
        for (int i = 0; i < howMany; i++) {
            float st = System.nanoTime() / 10^3;
            aFunc.execute(p);
            float ft = System.nanoTime() / 10^3;
            a += ft - st;
            System.out.println(a);
        }
        return a / howMany;
    }
    
    public static void main(String[] args){
//        long st = System.nanoTime();
//        System.out.println(FindP(2000000));
//        System.out.println(parenthesisPairs(3));
//        long ft = System.nanoTime();
//        float b = msT(100, RandomStuff::FindP, 2000000);
//        System.out.println(String.format("Elapsed Time = %s µs = %s ms", b, b/1000));
        System.out.println("Elapsed Time = " + new Command() {
            public String execute() {
                return "hi";
            }

            @Override
            public void execute(int... d1) {
                throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
            }
        });
    }
    // What's going on here

}
