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
        public void execute(Object data);
    }
    
    public static List<String> parenthesisPairs(int n){
        List<String> ans = new ArrayList();
        recurse(ans, "", 0, 0, n);
        System.out.println(String.format("There are %s combinations of matching parentheses.", ans.size()));
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
    
    public static List<Integer> FindP(int n) {
        List<Integer> temp = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (isPalindromeWithOnlyInt(i)) temp.add(i);
        }
        System.out.println(String.format("There are %s palindromes below the number %s.", temp.size(), n));
        return temp;
    }
    
    public static int msT(int howMany, Command aFunc, int para) {
        if (howMany < 1) {
            howMany = 1;
        }
        long st = System.nanoTime();
        for (int i = 0; i < howMany; i++) {
            aFunc(para);
        }
        long ft = System.nanoTime();
        return (int)((ft - st) / 1000);
    }
    
    public static void main(String[] args){
        long st = System.nanoTime();
        System.out.println(FindP(2000000));
//        System.out.println(parenthesisPairs(3));
        long ft = System.nanoTime();
        System.out.println(String.format("Elapsed Time = %s µs", (ft - st)/1000));
    }

}
