/*
Return true if the string "cat" and "dog" appear the same number of times in the given string.


catDog("catdog") → true
catDog("catcat") → false
catDog("1cat1cadodog") → true
*/

public boolean catDog(String str) {
    int cat = 0;
    int dog = 0;
    boolean result = false;
    if(str.length() < 3) {
      return true;
    }
    for(int i = 0; i <= str.length()-3; i++) {
      if(str.charAt(i) == 'c' && str.charAt(i+1) == 'a' && str.charAt(i+2) == 't') {
        cat++;
      } else if(str.charAt(i) == 'd' && str.charAt(i+1) == 'o' && str.charAt(i+2) == 'g') {
        dog++;
      }
    }
    if(cat == dog) {
      result = true;
    }
    return result;
}