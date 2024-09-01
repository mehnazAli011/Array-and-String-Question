//                                 DSA Questions

// Q1.
// Concatenation of Array
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]

// 1st Apprcoh!
function getConcatenations(nums) {
  let result = [];
  n = nums.length;
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < nums.length; i++) {
      result.push(nums[i]);
    }
  }
  return result;
}
console.log(getConcatenations([1, 2, 1]));
console.log(getConcatenations([1, 3, 2, 1]));

//2nd Approch
function getConcatenations(nums) {
  return nums.concat(nums);
}
console.log(getConcatenations([1, 2, 1]));
console.log(getConcatenations([1, 3, 2, 1]));

// ==============================================================================

// Q2. Squares of a sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// 1st Apprcoh!
function squareOfArray(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] ** 2);
  }
  return result.sort((a, b) => a - b);
}
console.log(squareOfArray([-4, -1, 0, 3, 10]));
console.log(squareOfArray([-7, -3, 2, 3, 11]));

//2nd Apprcoh

function squareOfArray(nums) {
  return nums.map((elm) => elm ** 2).sort((a, b) => a - b);
}
console.log(squareOfArray([-4, -1, 0, 3, 10]));
console.log(squareOfArray([-7, -3, 2, 3, 11]));

// Q 3.Missig Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

function findMissingElm(nums){
  n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}
console.log(findMissingElm([3,0,1] ));
console.log(findMissingElm( [0,1]));
console.log(findMissingElm([9,6,4,2,3,5,7,0,1]));

// =============================================================================
//Q4 To Lower Case
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
//1st Apprcoh
function toLowercase(s) {
  let result = "";
  for (let char of s) {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }
  return result;
}
console.log(toLowercase("Hello"));
console.log(toLowercase("here"));
console.log(toLowercase("LOVELY"));

//2nd Apprcoh
function toLowercase(s) {
  return s.toLowerCase();
}
console.log(toLowercase("Hello"));
console.log(toLowercase("here"));
console.log(toLowercase("LOVELY"));

// Q 5
// . Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

function mySqrt(x) {
  return Math.floor(Math.sqrt(x));
}
console.log(mySqrt(4));
console.log(mySqrt(8));
