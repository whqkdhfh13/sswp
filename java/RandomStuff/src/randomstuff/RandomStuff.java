/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package randomstuff;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;



/**
 *
 * @author j.cho18
 */
public class RandomStuff {

    /**
     * @param args the command line arguments
     */
    
    public static List<String> parenthesisPairs(int n){
        List<String> ans = new ArrayList();
        recurse(ans, "", 0, 0, n);
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
    
    public static boolean isPalindrome(long n) {
        List<String> temp = new ArrayList<>(Arrays.asList(String.valueOf(n).split("")));
        int a = 0;
        for (int i = 0; i < temp.size()/2; i++) {
            if (temp.get(i).equals(temp.get(temp.size() - (i + 1)))) a++;
        }
        return n > 100 && n % 10 != 0 || (temp.size() / 2 ) == a;
    }
    
    public static void main(String[] args){
        long st = System.nanoTime();
        System.out.println(parenthesisPairs(7));
        System.out.println(isPalindrome(101));
        long ft = System.nanoTime();
        System.out.println(String.format("Elapsed Time = %s µs", (ft - st)/1000));
    }
}
