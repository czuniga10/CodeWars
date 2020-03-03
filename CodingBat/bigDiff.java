/*
Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.


bigDiff([10, 3, 5, 6]) → 7
bigDiff([7, 2, 10, 9]) → 8
bigDiff([2, 10, 7, 2]) → 8
*/

public int bigDiff(int[] nums) {
    if(nums.length < 2) 
      return 0;
    int max = 0;
    int min = nums[0];
    for(int i = 0; i < nums.length-1; i++) {
      if(Math.max(nums[i],nums[i+1]) > max) 
        max = Math.max(nums[i],nums[i+1]);
      if(Math.min(nums[i],nums[i+1]) < min) 
        min = Math.min(nums[i],nums[i+1]);
    }
    return max-min;
}