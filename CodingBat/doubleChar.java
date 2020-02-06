/*
Given a string, return a string where for every char in the original, there are two chars.

doubleChar("The") → "TThhee"
doubleChar("AAbb") → "AAAAbbbb"
doubleChar("Hi-There") → "HHii--TThheerree"
*/

public String doubleChar(String str) {
    StringBuilder sb = new StringBuilder();
    for(String el : str.split("")) {
      sb.append(el+el);
    }
    return sb.toString();
}