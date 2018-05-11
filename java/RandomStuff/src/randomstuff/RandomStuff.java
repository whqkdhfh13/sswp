/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 *
 * @author j.cho18
 */
/*  List of helpful url
https://stackoverflow.com/questions/295579/fastest-way-to-determine-if-an-integers-square-root-is-an-integer?rq=1
https://stackoverflow.com/questions/30005243/how-to-make-a-2d-array-in-java
https://stackoverflow.com/questions/4685563/how-to-pass-a-function-as-a-parameter-in-java
https://stackoverflow.com/questions/1611735/java-casting-object-to-array-type
*/
package randomstuff;

import java.util.*;

public final class RandomStuff {
    
    static {
        pl("// Running Under \"RandomStuff\" class.");
    }
    
    public interface Command 
    {
        public void execute(int n, Object[] d);
    }
    
    public static List<String> parenthesisPairs(int a, Object... n){
        List<String> ans = new ArrayList<>();
        recurse(ans, "", 0, 0, a);
        if ((boolean)arrCheck(0, n)[0]) 
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
    
    public static boolean isPalindrome(Object n) {
        if (n instanceof Integer && 0 <= (int)n && (int)n < 10) return true;
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
    
    public static List<Integer> FindP(int j, Object... n) {
        List<Integer> temp = new ArrayList<>();
        for (int i = 0; i < j; i++) {
            if (isPalindromeWithOnlyInt(i)) temp.add(i);
        }
        if ((boolean)arrCheck(0, n)[0]) 
            System.out.println(String.format("There are %s palindromes below the number %s.", temp.size(), j));
        return temp;
    }
    
    public static Object[] arrCheck(int a, Object... x) {
        if (a > 5) throw new Error();
        Object[] temp = new Object[5];
        for (int i = 0; i < 5; i++) {
            boolean tempNum = false;
            ArrayList<Object> tNums = new ArrayList<>();
            for (int j = 0; j < x.length; j++) {
                if (x[j] instanceof Boolean && i == 0) {
                    tempNum = true; tNums.add(j);
                }
                if (x[j] instanceof String && i == 1) {
                    tempNum = true; tNums.add(j);
                }
                if (x[j] instanceof Integer && i == 2) {
                    tempNum = true; tNums.add(j);
                }
                if (x[j] instanceof Double && i == 3) {
                    tempNum = true; tNums.add(j);
                }
                if (x[j] instanceof Float && i == 4) {
                    tempNum = true; tNums.add(j);
                }
            }
            tNums.add(0, tempNum);
            temp[i] = tNums.toArray();
        }
        return (Object[])temp[a];
    }
    
    public static Object msT(int howMany, Command aFunc, int n, Object... p) {
        float a = 0;
        boolean isTrue = (boolean)arrCheck(0, p)[0];
        if (howMany < 1) {
            howMany = 1;
        }
        System.out.print("Started measuring time...");
        for (int i = 0; i < howMany; i++) {
            float st = System.nanoTime();
            aFunc.execute(n, p);
            float ft = System.nanoTime();
            a += (ft - st);
            if (isTrue)
                System.out.println(a);
        }
        
        if ((boolean)arrCheck(1, p)[0]) {
            return 
            String.valueOf(a / (howMany * (float)p[(int)arrCheck(4, p)[1]]))+ (String)p[(int)arrCheck(1, p)[1]];
        }
        
        return a / (howMany * (float)p[(int)arrCheck(4, p)[1]]);
    }

    public static void pl(Object a) {
        System.out.println(a);
    }
    
    public static void main(String[] args){
//        Object b = msT(100, RandomStuff::FindP, 2000000, 1e6f);
//        pl(
//                "Elapsed Time for each calculation = " + b + "ms");
//        pl("Elapsed Time = " + msT(10, (p, j) -> FindP(p, j), 2000000, 1e6f, "ms"));
        pl("Elapsed Time = " + msT(1000000, (p, j) -> arrCheck(p, j), 6, "ms", 1e6f, 74d, 34, 27));
//        pl((boolean)arrCheck(2, "ms", 1e6f, 74d, 34, 27)[0]);
//        return - [ [false], [true, 0], [true, 3, 4], [true, 2], [true, 1] ]
    }
}
/*
Generics
2D Arrays
Strict Way of Defining Data Types
Lambda Expressions (Functions as parameters)
Java Data Types - Boolean, String, Integer, Double, Float
Returning Types
Interfaces
ArrayLists - Different than arrays, I have to specify the length of the array when I define them
Loops are similar
Functions - I have to specify whether the function returns something, and if it does, what types
            of data it returns. I have to specify the data type of input as well. 
*/