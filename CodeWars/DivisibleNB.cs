//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

public class DivisibleNb {
	public static bool isDivisible(long n, long x, long y) {
		if(n%x==0 && n%y==0) {
      return true;
    }
    return false;
	}
}