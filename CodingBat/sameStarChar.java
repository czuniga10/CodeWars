/*
Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.


sameStarChar("xy*yzz") → true
sameStarChar("xy*zzz") → false
sameStarChar("*xa*az") → true
*/

public boolean sameStarChar(String str) {
    int len = str.length();
    boolean result = true;

    for (int i = 0; i < len; i++) {
      String newStr = str.substring(i,i+1);
      if (newStr.equals("*") && i > 0 && i < len-1) {
        if (str.charAt(i-1) == str.charAt(i+1))
          result = true;
        else
          result = false;
      }
    }
    
    return result;
}