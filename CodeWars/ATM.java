/* --first iteration

There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

Good Luck!!!
*/

public class ATM {
  
  public int solve(int n) {
    int result = 0;
    if(result % 10 != 0) return -1;
    while(n > 0) {
      if(n % 500 == 0) {
        result += 1;
        n -= 500;
      }
      else if(n % 200 == 0) {
        result += 1;
        n -= 200;
      }
      else if(n % 100 == 0) {
        result += 1;
        n -= 100;
      }
      else if(n % 50 == 0) {
        result += 1;
        n -= 50;
      }
      else if(n % 20 == 0) {
        result += 1;
        n -= 20;
      }
      else if(n % 10 == 0) {
        result += 1;
        n -= 10;
      }
      else return -1;
    }
    return result;
  }
}
