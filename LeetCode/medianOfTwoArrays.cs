There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        var nums = nums1.Concat(nums2).OrderBy(c => c).ToArray();
        var len = nums.Length;
        var mid = 0.0;
        if(len % 2 != 0) {
            mid = nums[len/2];
        } else {
            mid = ((double)nums[(len/2)-1]+nums[len/2])/2;
        }
        return mid;
    }
}