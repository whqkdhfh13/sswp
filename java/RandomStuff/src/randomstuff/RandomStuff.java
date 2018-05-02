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
        public void execute(Object[] d);
    }
    
    public static List<String> parenthesisPairs(Object... n){
        List<String> ans = new ArrayList();
        recurse(ans, "", 0, 0, (int)n[0]);
        if (n.length > 3) System.out.println(String.format("There are %s combinations of matching parentheses.", ans.size()));
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
    
    public static List<Integer> FindP(Object... n) {
        List<Integer> temp = new ArrayList<>();
        for (int i = 0; i < (int)n[0]; i++) {
            if (isPalindromeWithOnlyInt(i)) temp.add(i);
        }
        if (n.length > 3) 
            System.out.println(String.format("There are %s palindromes below the number %s.", temp.size(), n[0]));
        return temp;
    }
    
    public static Object msT(int howMany, Command aFunc, Object... p) {
        float a = 0; 
        if (howMany < 1) {
            howMany = 1;
        }
        System.out.println("Started measuring time...");
        for (int i = 0; i < howMany; i++) {
            float st = System.nanoTime();
            aFunc.execute(p);
            float ft = System.nanoTime();
            a += (ft - st);
            if (p.length > 3)
                System.out.println(a);
        }
        float b = (int)p[0] >> 6;
        
        if (p.length > 2)
            return String.valueOf(a / (howMany * (float)p[1])) + p[2];
        return a / (howMany * (float)p[1]);
    }

    public static void pl(Object... a) {
        System.out.println(Arrays.toString(a));
    }
    
    public static void main(String[] args){
        Object b = msT(100, RandomStuff::FindP, 2000000, 1e6f);
        pl(
                "Elapsed Time for each calculation = " + b + "ms");
        pl(
                "Elapsed Time = " + msT(100, p -> FindP(p), 2000000, 1e6f, "ms"));
    }
    // https://stackoverflow.com/questions/295579/fastest-way-to-determine-if-an-integers-square-root-is-an-integer?rq=1
}
