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

function findMissingElm(nums) {
  n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}
console.log(findMissingElm([3, 0, 1]));
console.log(findMissingElm([0, 1]));
console.log(findMissingElm([9, 6, 4, 2, 3, 5, 7, 0, 1]));

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

//Q 6
// //Two sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
  const map = new Map();
  for (const index in nums) {
    const pairTarget = target - nums[index];
    if (map.has(pairTarget)) return [index, map.get(pairTarget)];
    map.set(nums[index], index);
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

//
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

//Q7.Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function containsDuplicate(nums) {
  const set = new Set(nums);
  return set.size !== nums.length;
}
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

function containsDuplicate(nums) {
  const map = new Map();
  for (const n of nums) {
    if (map.has(n)) return true;
    map.set(n, true);
    console.log(map.set(n, true));
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

//Q 8.Valid Angaram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
//1 Aprroch
function isAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

//2nd Approch
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let c of s) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }

  for (const c of t) {
    if (!map.has(c)) return false;
    else map.set(c, map.get(c) - 1);
    if (map.get(c) == 0) map.delete(c);
  }
  if (map.size > 0) return false;
  return true;
}
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
// ================================================================================
//Q 9 length of the last word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

function lengthOfLastWord(s) {
  return s
    .split(" ")
    .filter((elm) => elm !== "")
    .slice(-1)
    .join("").length;
}
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

function lengthOfLastWord(s) {
  let length = 0;
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      length++;
      maxLength = length;
    } else {
      length = 0;
    }
  }
  return maxLength;
}
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

// =================================================================================

// Q 10 plus one
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  // if all the digits are 9 we need add an  extra digit at beginning
  return [1, ...digits];
}
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 2]));
console.log(plusOne([9]));
// =================================================================================
