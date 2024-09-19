// //                                 DSA Questions

// // Q1.
// // Concatenation of Array
// // Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// // Specifically, ans is the concatenation of two nums arrays.

// // Return the array ans.

// // Example 1:

// // Input: nums = [1,2,1]
// // Output: [1,2,1,1,2,1]
// // Explanation: The array ans is formed as follows:
// // - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// // - ans = [1,2,1,1,2,1]
// // Example 2:

// // Input: nums = [1,3,2,1]
// // Output: [1,3,2,1,1,3,2,1]
// // Explanation: The array ans is formed as follows:
// // - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// // - ans = [1,3,2,1,1,3,2,1]

// // Brute  Approch
// function getConcatenations(nums) {
//   let result = [];
//   result.length = nums.length * 2;
//   for (let i = 0; i < nums.length; i++) {
//     result[i] = nums[i];
//     result[i + nums.length] = nums[i];
//   }
//   return result;
// }
// console.log(getConcatenations([1, 2, 1]));
// console.log(getConcatenations([1, 3, 2, 1]));

// //Better  Approch
// function getConcatenations(nums) {
//   return nums.concat(nums);
// }
// console.log(getConcatenations([1, 2, 1]));
// console.log(getConcatenations([1, 3, 2, 1]))

// // Optimal Approach
// function getConcatenations(nums) {
//   let result = [];
//   n = nums.length;
//   for (let j = 0; j < 2; j++) {
//     for (let i = 0; i < nums.length; i++) {
//       result.push(nums[i]);
//     }
//   }
//   return result;
// }
// console.log(getConcatenations([1, 2, 1]));
// console.log(getConcatenations([1, 3, 2, 1]));

// // ==============================================================================

// // Q2. Squares of a sorted Array
// // Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// // Example 1:

// // Input: nums = [-4,-1,0,3,10]
// // Output: [0,1,9,16,100]
// // Explanation: After squaring, the array becomes [16,1,0,9,100].
// // After sorting, it becomes [0,1,9,16,100].
// // Example 2:

// // Input: nums = [-7,-3,2,3,11]
// // Output: [4,9,9,49,121]

// //better Approach
// function squareOfArray(nums) {
//   return nums.map((elm) => elm ** 2).sort((a, b) => a - b);
// }
// console.log(squareOfArray([-4, -1, 0, 3, 10]));
// console.log(squareOfArray([-7, -3, 2, 3, 11]));

// // optimal Apprcoh
// function squareOfArray(nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     result.push(nums[i] ** 2);
//   }
//   return result.sort((a, b) => a - b);
// }
// console.log(squareOfArray([-4, -1, 0, 3, 10]));
// console.log(squareOfArray([-7, -3, 2, 3, 11]));

// // other Approch
// function squareOfArray(nums) {
// result = nums.reduce((acc, curr) => {
//     acc.push(curr ** 2);
//     return acc;
//   }, []);
//   return result.sort((a,b)=>a-b)
// }
// console.log(squareOfArray([-4, -1, 0, 3, 10]));
// console.log(squareOfArray([-7, -3, 2, 3, 11]));
// // =================================================================================
// // Q 3.Missig Number
// // Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// // Example 1:

// // Input: nums = [3,0,1]
// // Output: 2
// // Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// // Example 2:

// // Input: nums = [0,1]
// // Output: 2
// // Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// // Example 3:

// // Input: nums = [9,6,4,2,3,5,7,0,1]
// // Output: 8
// // Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

//Brute Approach
// function findMissingElm(nums) {
//   let result = [];
//   n = nums.length;
//   for (let i = 1; i <= n; i++) {
//     flag = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] === i) {
//         flag = 1;
//       }
//     }
//     if (flag === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(findMissingElm([3, 0, 1]));
// console.log(findMissingElm([0, 1]));
// console.log(findMissingElm([9, 6, 4, 2, 3, 5, 7, 0, 1]));

//Better Appoach
// function findMissingElm(nums) {
//   n = nums.length;
//   for (let i = 0; i <= n; i++) {
//     if (!nums.includes(i)) {
//       return i;
//     }
//   }
// }
// console.log(findMissingElm([3, 0, 1]));
// console.log(findMissingElm([0, 1]));
// console.log(findMissingElm([9, 6, 4, 2, 3, 5, 7, 0, 1]));

//Optimal Approach
// function findMissingElm(nums) {
//   n = nums.length;
//   let s1 = (n * (n + 1)) / 2;
//   let s2 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     s2 += nums[i];
//   }
//   return [s1 - s2];
// }
// console.log(findMissingElm([3, 0, 1]));
// console.log(findMissingElm([0, 1]));
// console.log(findMissingElm([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// // =============================================================================
// // Q4 To Lower Case
// // Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// // Example 1:

// // Input: s = "Hello"
// // Output: "hello"
// // Example 2:

// // Input: s = "here"
// // Output: "here"
// // Example 3:

// // Input: s = "LOVELY"
// // Output: "lovely"
// //Brute Apprcoh
// function toLowercase(s) {
//   let result = "";
//   for (let char of s) {
//     if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
//       result += char.toLowerCase();
//     } else {
//       result += char;
//     }
//   }
//   return result;
// }
// console.log(toLowercase("Hello"));
// console.log(toLowercase("here"));
// console.log(toLowercase("LOVELY"));

// //Better Aprroach
// function toLowercase(s) {
//   return s.toLowerCase();
// }
// console.log(toLowercase("Hello"));
// console.log(toLowercase("here"));
// console.log(toLowercase("LOVELY"));

// // Q 5
// //Sqrt(x)

// // Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// // You must not use any built-in exponent function or operator.

// // For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// // Example 1:

// // Input: x = 4
// // Output: 2
// // Explanation: The square root of 4 is 2, so we return 2.
// // Example 2:

// // Input: x = 8
// // Output: 2
// // // Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// function mySqrt(x) {
//   return Math.floor(Math.sqrt(x));
// }
// console.log(mySqrt(4));
// console.log(mySqrt(8));
// // ===============================================================================
// // Q 6
// // //Two sum
// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// // You may assume that each input would have exactly one solution, and you may not use the same element twice.

// // You can return the answer in any order.

// // Example 1:

// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// // Example 2:

// // Input: nums = [3,2,4], target = 6
// // Output: [1,2]
// // Example 3:

// // Input: nums = [3,3], target = 6
// // Output: [0,1]

// // Brute Approah
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [-1,-1]
// }
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// //better  Approah
// function twoSum(nums, target) {
//   const map = new Map();
//   for (let index in nums) {
//     let pairTarget = target - nums[index];
//     if (map.has(pairTarget)) return [index, map.get(pairTarget)];
//     map.set(nums[index], index);
//   }
// }
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([1, 3], 6));

// // optimal Approah
function twoSum(nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) left++;
    else right--;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
// // =================================================================================
// // Q7.Contains Duplicate
// // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// // Example 1:

// // Input: nums = [1,2,3,1]
// // Output: true
// // Example 2:

// // Input: nums = [1,2,3,4]
// // Output: false
// // Example 3:

// // Input: nums = [1,1,1,3,3,4,3,2,4,2]
// // Output: true

// // brute approach
// // function containsDuplicate(nums) {
// //   const set = new Set(nums);
// //   return set.size !== nums.length;
// // }
// // console.log(containsDuplicate([1, 2, 3, 1]));
// // console.log(containsDuplicate([1, 2, 3, 4]));
// // console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// // better Approach
// // function containsDuplicate(nums) {
// //   const map = new Map();
// //   for (const n of nums) {
// //     if (map.has(n)) return true;
// //     map.set(n, true);
// //   }
// //   return false;
// // }
// // console.log(containsDuplicate([1, 2, 3, 1]));
// // console.log(containsDuplicate([1, 2, 3, 4]));
// // console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// // //optimal Approach
// // function containsDuplicate(nums) {
// //   nums.sort((a, b) => a - b);
// //   for (let i = 0; i < nums.length - 1; i++) {
// //     if (nums[i] == nums[i + 1]) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }
// // console.log(containsDuplicate([1, 2, 3, 1]));
// // console.log(containsDuplicate([1, 2, 3, 4]));
// // console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// // ================================================================================
// // //Q 8.Valid Angaram
// // // Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// // // An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// // // Example 1:

// // // Input: s = "anagram", t = "nagaram"
// // // Output: true
// // // Example 2:

// // // Input: s = "rat", t = "car"
// // // Output: false
// // //1 Aprroach
// function isAnagram(s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// }
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));

// //2nd Approach
// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;
//   const map = new Map();
//   for (let c of s) {
//     if (map.has(c)) map.set(c, map.get(c) + 1);
//     else map.set(c, 1);
//   }

//   for (const c of t) {
//     if (!map.has(c)) return false;
//     else map.set(c, map.get(c) - 1);
//     if (map.get(c) == 0) map.delete(c);
//   }
//   if (map.size > 0) return false;
//   return true;
// }
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));
// //

// optimal Approach
// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   let s1 = s.split("").sort();
//   let t1 = t.split("").sort();
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== t1[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));

// =================================================================================
// //Q 9 length of the last word
// // Given a string s consisting of words and spaces, return the length of the last word in the string.

// // A word is a maximal
// // substring
// //  consisting of non-space characters only.

// // Example 1:

// // Input: s = "Hello World"
// // Output: 5
// // Explanation: The last word is "World" with length 5.
// // Example 2:

// // Input: s = "   fly me   to   the moon  "
// // Output: 4
// // Explanation: The last word is "moon" with length 4.
// // Example 3:

// // Input: s = "luffy is still joyboy"
// // Output: 6
// // Explanation: The last word is "joyboy" with length 6.

// brute Approch

// function lengthOfLastWord(s) {
//   return s.trimEnd().split(" ").at(-1).length;
// }
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));

// better Approach
// function lengthOfLastWord(s) {
//   let length = 0;
//   let maxLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== " ") {
//       length++;
//       maxLength = length;
//     } else {
//       length = 0;
//     }
//   }
//   return maxLength;
// }
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));

// optimal Approach
// function lengthOfLastWord(s) {
//   let result = [];
//   let array = s.split(" ");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== "") {
//       result.push(array[i]);
//     }
//   }
//   return result[result.length - 1].length;
// }
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));
// =================================================================================

// // Q 10 plus one
// // You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// // Increment the large integer by one and return the resulting array of digits.

// // Example 1:

// // Input: digits = [1,2,3]
// // Output: [1,2,4]
// // Explanation: The array represents the integer 123.
// // Incrementing by one gives 123 + 1 = 124.
// // Thus, the result should be [1,2,4].
// // Example 2:

// // Input: digits = [4,3,2,1]
// // Output: [4,3,2,2]
// // Explanation: The array represents the integer 4321.
// // Incrementing by one gives 4321 + 1 = 4322.
// // Thus, the result should be [4,3,2,2].
// // Example 3:

// // Input: digits = [9]
// // Output: [1,0]
// // Explanation: The array represents the integer 9.
// // Incrementing by one gives 9 + 1 = 10.
// // Thus, the result should be [1,0].
// function plusOne(digits) {
//   return String(Number(digits.join("")) + 1).split("");
// }
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 2]));
// console.log(plusOne([9]));

// Optimal Approach
// function plusOne(digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     }
//     digits[i] = 0;
//   }
//   // if all the digits are 9 we need add an  extra digit at beginning
//   return [1, ...digits];
// }
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 2]));
// console.log(plusOne([9]));

// // =================================================================================
// //Q 11.
// //Remove Element
// // Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// // Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// // Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// // Return k.
// // Custom Judge:

// // The judge will test your solution with the following code:

// // int[] nums = [...]; // Input array
// // int val = ...; // Value to remove
// // int[] expectedNums = [...]; // The expected answer with correct length.
// //                             // It is sorted with no values equaling val.

// // int k = removeElement(nums, val); // Calls your implementation

// // assert k == expectedNums.length;
// // sort(nums, 0, k); // Sort the first k elements of nums
// // for (int i = 0; i < actualLength; i++) {
// //     assert nums[i] == expectedNums[i];
// // }
// // If all assertions pass, then your solution will be accepted.

// // Example 1:

// // Input: nums = [3,2,2,3], val = 3
// // Output: 2, nums = [2,2,_,_]
// // Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// // It does not matter what you leave beyond the returned k (hence they are underscores).
// // Example 2:

// // Input: nums = [0,1,2,2,3,0,4,2], val = 2
// // Output: 5, nums = [0,1,4,0,3,_,_,_]
// // Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// // Note that the five elements can be returned in any order.
// // It does not matter what you leave beyond the returned k (hence they are underscores)

// optimal Approach
// function removeDup(nums, val) {
//   let current = 0;
//   for (let i = 0; i < nums.length; i++) {
//     // if check is not equal
//     if (nums[i] !== val) {
//       // then update the array
//       nums[current] = nums[i];
//       // updateed Array = [3,3]
//       // updateed Array = [0,1,3,0,4]
//       current++;
//     }
//   }
//   return current;
// }
// console.log(removeDup([3, 2, 2, 3], 3));
// console.log(removeDup([0, 1, 2, 2, 3, 0, 4, 2], 2));
// // =================================================================================
// // Q 12
// // Find the Index of the First Occurrence in a String
// // Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// // Example 1:

// // Input: haystack = "sadbutsad", needle = "sad"
// // Output: 0
// // Explanation: "sad" occurs at index 0 and 6.
// // The first occurrence is at index 0, so we return 0.
// // Example 2:

// // Input: haystack = "leetcode", needle = "leeto"
// // Output: -1
// // Explanation: "leeto" did not occur in "leetcode", so we return -1.

// optimal Approach
// function findTheIndex(haystack, needle) {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//       if (needle === haystack.substr(i, needle.length)) return i;
//     }
//   }
//   return -1;
// }
// console.log(findTheIndex("sadbutsad", "sad"));
// console.log(findTheIndex("leetcode", "leeto"));

// // ===============================================================================

// //Q 13 Rotate the Array K time
// // Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// // Example 1:

// // Input: nums = [1,2,3,4,5,6,7], k = 3
// // Output: [5,6,7,1,2,3,4]
// // Explanation:
// // rotate 1 steps to the right: [7,1,2,3,4,5,6]
// // rotate 2 steps to the right: [6,7,1,2,3,4,5]
// // rotate 3 steps to the right: [5,6,7,1,2,3,4]
// // Example 2:

// // Input: nums = [-1,-100,3,99], k = 2
// // Output: [3,99,-1,-100]
// // Explanation:
// // rotate 1 steps to the right: [99,-1,-100,3]
// // rotate 2 steps to the right: [3,99,-1,-100]

// function rotateArr(nums, k) {
//   return nums.slice(-k).concat(nums.slice(0, nums.length - k));
// }
// console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotateArr([-1, -100, 3, 99], 2));

// // ================================================================================
// // Q 14Palindorm Number
// // Given an integer x, return true if x is a
// // palindrome
// // , and false otherwise.

// // Example 1:

// // Input: x = 121
// // Output: true
// // Explanation: 121 reads as 121 from left to right and from right to left.
// // Example 2:

// // Input: x = -121
// // Output: false
// // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// // Example 3:

// // Input: x = 10
// // Output: false
// // Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// function check(x) {
//   let y = x.toString();
//   return y === y.split("").reverse().join("");
// }
// console.log(check(121));
// console.log(check(-121));
// console.log(check(10));

// // Q 15 Reverse String
// // Write a function that reverses a string. The input string is given as an array of characters s.

// // You must do this by modifying the input array in-place with O(1) extra memory.

// // Example 1:

// // Input: s = ["h","e","l","l","o"]
// // Output: ["o","l","l","e","h"]
// // Example 2:

// // Input: s = ["H","a","n","n","a","h"]
// // Output: ["h","a","n","n","a","H"]

// better Approach
// function reverseString(s) {
//   return s.reverse();
// }
// console.log(reverseString(["h", "e", "l", "l", "o"]));
// console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

// Optimal Approach
// function reverseString(s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     temp = s[right];
//     s[right] = s[left];
//     s[left] = temp;
//     left++;
//     right--;
//   }
//   return s;
// }
// console.log(reverseString(["h", "e", "l", "l", "o"]));
// console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

// // // Q 16
// // Find All Disapper number in Array
// // Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// // Example 1:

// // Input: nums = [4,3,2,7,8,2,3,1]
// // Output: [5,6]
// // Example 2:

// // Input: nums = [1,1]
// // Output: [2]

// better approach
// function disappearedElm(nums) {
//   let result = [];
//   const map = new Set(nums);
//   for (let i = 1; i <= nums.length; i++) {
//     if (!map.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(disappearedElm([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(disappearedElm([1, 1]));

// optimal approach
// function disappearedElm(nums) {
//   let result = [];
//   for (let i = 1; i <= nums.length; i++) {
//     if (!nums.includes(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(disappearedElm([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(disappearedElm([1, 1]));
// =================================================================================
// Q 17. Find the largest Element in array.

// brute-better-optimal
// //Brute Approach
// function findLargestElm(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[arr.length-1]
// }
// console.log(findLargestElm([6, 2, 3, 4, 5]));
// console.log(findLargestElm([5, 5, 5]));

// Better Approach
// function findLargestElm(arr) {
//     return Math.max(...arr)
// }
// console.log(findLargestElm([6, 2, 3, 4, 5]));
// console.log(findLargestElm([5, 5, 5]));

// Optimal Approach
// function findLargestElm(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findLargestElm([6, 2, 3, 4, 5]));
// console.log(findLargestElm([5, 5, 5]));

// ===============================================================================

// Q18 Find the second largest element in the array.

// Brute Approach
// function findTheSecondLargest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }
//   let temp = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   largest = arr[arr.length - 1];
//   for (let j = arr.length - 2; j >= 0; j--) {
//     if (arr[j] !== largest) {
//       return arr[j];
//     }
//   }
// }
// console.log(findTheSecondLargest([1, 7, 7, 8, 4, 2]));
// console.log(findTheSecondLargest([1, 7, 7, 7, 7]));

// //Better Approach
// function findTheSecondLargest(arr) {
//   let uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
//   if (uniqueArr.length < 2) {
//     return null;
//   }
//   return uniqueArr[uniqueArr.length - 2];
// }
// console.log(findTheSecondLargest([1, 7, 7, 8, 4, 2]));
// console.log(findTheSecondLargest([1, 7, 7, 7, 7]));

// //Optimal  Approach
// function findTheSecondLargest(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   let secondLargest = arr[0];
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > secondLargest && arr[j] !== max) {
//       secondLargest = arr[j];
//     }
//   }
//   return secondLargest;
// }
// console.log(findTheSecondLargest([1, 7, 7, 8, 4, 2]));
// console.log(findTheSecondLargest([1, 7, 7, 7, 7]));
// ==============================================================================

// Q 18 Remove Duplicate from the sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// //  Brute Approach
// function removeDuplicates(nums) {
//   let set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     set.add(nums[i]);
//   }
//   return Array.from(set).length;
// }
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Better Approach
// function removeDuplicates(nums) {
//  return [...new Set(nums)]
// }
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Optimal Approach
// function removeDuplicates(nums) {
//   i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[i] !== nums[j]) {
//       nums[i + 1] = nums[j];
//       i++;
//     }
//   }
//   return i+1;
// }
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// // ============================================================================
// // Q 19 left  Rotate array by one place

// // Optimal Apprcoh
// function rotateOnePlace(arr) {
//   let temp = arr[0];
//   for (let j = 1; j < arr.length; j++) {
//     arr[j - 1] = arr[j];
//   }
//   arr[arr.length - 1] = temp;
//   return arr;
// }
// console.log(rotateOnePlace([1, 2, 3, 4, 5]));

// // ================================================================================
// // Q 20 .Rotate by k

// //Better Approach
// function rotateByK(nums, k) {
//  return nums.slice(-k).concat(nums.slice(0,nums.length-k))
// }
// console.log(rotateByK([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotateByK([-1, -100, 3, 99], 2));

// // ==========================================================================
// Q 21
// // Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// // Note that you must do this in-place without making a copy of the array.

// // Example 1:

// // Input: nums = [0,1,0,3,12]
// // Output: [1,3,12,0,0]
// // Example 2:

// // Input: nums = [0]
// // Output: [0]

// //Brute Approach
// function moveZeroToEnd(nums) {
//   let temp = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       temp.push(nums[i]);
//     }
//   }
//   for (let i = 0; i < temp.length; i++) {
//     nums[i] = temp[i];
//   }
//   for (let i = temp.length; i < nums.length; i++) {
//     nums[i] = 0;
//   }
//   return nums;
// }
// console.log(moveZeroToEnd([0, 1, 0, 3, 12]));
// console.log(moveZeroToEnd([0]));

// //Better Approach
// function moveZeroToEnd(nums) {
//  let nonZeroElm =[];
//  let zeroElm =[];
//  for(let  i=0;i<nums.length;i++){
//   if(nums[i]!==0){
//     nonZeroElm.push(nums[i])
//   }
//   else{
//     zeroElm.push(nums[i])
//   }
//  }
//  return nonZeroElm.concat(zeroElm)
// }
// console.log(moveZeroToEnd([0, 1, 0, 3, 12]));
// console.log(moveZeroToEnd([0]));
// ================================================================================
// Q 22
//Max consecutive ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

//optimal Approach
// function maxConOne(nums) {
//   let result = [];
//   let counter = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       counter++;
//     } else {
//       counter = 0;
//     }
//     result.push(counter);
//   }
//   return Math.max(...result);
// }
// console.log(maxConOne([1, 1, 0, 1, 1, 1]));
// console.log(maxConOne([1, 0, 1, 1, 0, 1]));

// ===============================================================================
// Q 23 single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

//Brute Approach

function getSingleOne(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      return nums[i];
    }
  }
}
console.log(getSingleOne([2, 2, 1]));
console.log(getSingleOne([4, 1, 2, 1, 2]));
console.log(getSingleOne([1]));

//optimal Approach
// function getSingleOne(nums) {
//   let XOR = 0;
//   for(let  i=0;i<nums.length;i++){
//     XOR=XOR^nums[i]
//   }
//   return XOR
// }
// console.log(getSingleOne([2, 2, 1]));
// console.log(getSingleOne([4, 1, 2, 1, 2]));
// console.log(getSingleOne([1]));

// ==============================================================================
//Q 24
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//Brute Approach
// function majorityElm(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//     if (count > nums.length / 2) {
//       return nums[i];
//     }
//   }
// }
// console.log(majorityElm([3, 2, 3]));
// console.log(majorityElm([2, 2, 1, 1, 1, 2, 2]));

// =============================================================================
//Q 25
// Best Time to buy before  and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

//Brute Approach
function maxProfit(prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let cost = prices[i] - min;
    profit = Math.max(profit, cost);
    min = Math.min(min, prices[i]);
  }
  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

// =============================================================================
//Q 26Rearrange  Array the Element By Sign
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.
// Example 2:

// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// So nums is rearranged to [1,-1].

//Brute Approach
// function rearrangeArr(nums) {
//   let pos = [];
//   let neg = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       neg.push(nums[i]);
//     } else {
//       pos.push(nums[i]);
//     }
//   }
//   for (let i = 0; i < nums.length / 2; i++) {
//     nums[i * 2] = pos[i];
//     nums[i * 2 + 1] = neg[i];
//   }
//   return nums;
// }
// console.log(rearrangeArr([3, 1, -2, -5, 2, -4]));
// console.log(rearrangeArr([-1, 1]));

// //Optimal Approach
// function rearrangeArr(nums) {
//   let result = [];
//   let posIndex = 0;
//   let negIndex = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       result[negIndex]=nums[i]
//       negIndex+=2;
//     } else {
//       result[posIndex]=nums[i]
//       posIndex+=2
//     }
//   }
//   return result

// }
// console.log(rearrangeArr([3, 1, -2, -5, 2, -4]));
// console.log(rearrangeArr([-1, 1]));

//=========================================================================
// Q 27
// Better Approach
// function longestConsecutive(nums) {
//   let max = 0;
//   let set = new Set(nums);
//   for (let num of set) {
//     if (set.has(num - 1)) {
//       continue;
//     }
//     let currNums = num;
//     let currMax = 1;
//     while (set.has(currNums + 1)) {
//       currNums++;
//       currMax++;
//     }
//     max = Math.max(max, currMax);
//   }
//   return max;
// }
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// ==============================================================================

// Q 28 Subarray Sum Equals of k

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

//Better Approach
// function subarraySum(nums, k) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];

//       if (sum === k) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1, 2, 3], 3));

// ==============================================================================
// Q 29
// Majaroity Element ||
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
function majorityElm(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count > nums.length / 3) {
      result.push(nums[i]);
    }
  }
  return [...new Set(result)];
}
console.log(majorityElm([3, 2, 3]));
console.log(majorityElm([1]));
console.log(majorityElm([1, 2]));
// ============================================================================
// 3 sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// function ThreeSum(nums) {
//   nums.sort((a, b) => a - b);
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           result.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }
//   return result;
// }
// console.log(ThreeSum([-1, 0, 1, 2, -1, -4]));
// console.log(ThreeSum([0, 1, 1]));
// console.log(ThreeSum([0, 0, 0]));
// ===============================================================================
// Q 31
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

function reverseTheString(s) {
  return s
    .split(" ")
    .reverse()
    .filter((elm) => elm != "")
    .join(" ");
}
console.log(reverseTheString("the sky is blue"));
console.log(reverseTheString("  hello world  "));
console.log(reverseTheString("a good   example"));
console.log(reverseTheString("  Bob    Loves  Alice   "));
// =============================================================================

// Q 32 Pow(x,n)
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

//Better Approach
// function myPow(x, n) {
//   let ans = 1;
//   let pow = Math.abs(n);
//   for (let i = 1; i <= pow; i++) {
//     ans = ans * x;
//   }
//   if (n < 0) {
//     ans = 1 / ans;
//   }
//   return ans;
// }
// console.log(myPow(2.0, 10));
// console.log(myPow(2.1, 3));
// console.log(myPow(2.0, -2));
// function myPow(x, n) {
//   if (n < 0) {
//     x = 1 / x;
//     n = -n;
//   }
//   let res = 1;
//   let current_Product = x;
//   while (n > 0) {
//     if (n % 2 === 1) {
//       res = res * current_Product;
//     }
//     current_Product = current_Product * current_Product;
//     n = Math.floor(n / 2);
//   }
//   return res;
// }
// console.log(myPow(2.0, 10));
// console.log(myPow(2.1, 3));
// console.log(myPow(2.0, -2));
// console.log(myPow(2, 4));

// ==============================================================================
// Q 33

//brute Approach
function check(s) {
  let str = s.replace(/[\W|_]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(check("A man, a plan, a canal: Panama"));
console.log(check("race a car"));
console.log(check(" "));
console.log(check("0p"));
console.log(check("ab_a"));
//Better Approach
function check(s) {
  let modifiyS = s.replace(/[\W|_]/g, "").toLowerCase();
  return modifiyS == modifiyS.split("").reverse().join("");
}
console.log(check("A man, a plan, a canal: Panama"));
console.log(check("race a car"));
console.log(check(" "));
console.log(check("0p"));
console.log(check("ab_a"));

// ================================================================================
// // Q 34  Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(1));
console.log(fib(3));
console.log(fib(4));
// // ============================================================================
// Q 35. N-th Tribonacci Number
// Easy
// Topics
// Companies
// Hint
// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

// Example 1:

// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:

// Input: n = 25
// Output: 1389537

function tribonacciNum(n) {
  let arr = [0, 1, 1];
  if (n <= 2) {
    return arr[n];
  }
  for (let i = 3; i <= n; i++) {
    let temp = arr[0] + arr[1] + arr[2];
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;
  }
  return arr[2];
}
console.log(tribonacciNum(4));
console.log(tribonacciNum(25));
// ===============================================================================
// Q 36 Climbing stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbStairs(n) {
  let arr = [];
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
console.log(climbStairs(2));
console.log(climbStairs(3));
// =====================================================================================
// // Q 37 Median of two sorted Array
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// Brute Approach
function findMedinElmOfTwoArr(nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  let n = arr.length;
  if (n % 2 !== 0) {
    return arr[Math.floor(n / 2)];
  } else {
    return (arr[n / 2] + arr[n / 2 - 1]) / 2;
  }
}
console.log(findMedinElmOfTwoArr([1, 3], [2]));
console.log(findMedinElmOfTwoArr([1, 2], [3, 4]));

// ====================================================================================
// 38 maximum subarray sum
// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// //Better Approach
function maxSubArrSum(nums) {
  let max = nums[0];
  let sum = 0;
  nums.forEach((elm) => {
    sum += elm;
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  });
  return max;
}
console.log(maxSubArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArrSum([1]));
console.log(maxSubArrSum([5, 4, -1, 7, 8]));
// ====================================================================================
// Q 39 Buy and sell Stock ||
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

//Brute Approach
function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 2, 1]));
// =======================================================================================
// // Q 40 Remove Duplicate form sorted Array ||
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

function remoevDupSec(nums) {
  if (nums.length <= 2) return nums.length;
  let perv1 = nums[0];
  let perv2 = nums[1];
  let pivot = 2;
  for (let i = 2; i < nums.length; i++) {
    let curr = nums[i];
    if (curr != perv1 || curr != perv2) {
      nums[pivot] = curr;
      pivot += 1;
    }
    perv1 = perv2;
    perv2 = curr;
  }
  return pivot;
}
console.log(remoevDupSec([1, 1, 1, 2, 2, 3]));
console.log(remoevDupSec([0, 0, 1, 1, 1, 1, 2, 3, 3]));
// ====================================================================================
// Q 41 Largest Number
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

function lasgestNumber(nums) {
  if (nums.every((elm) => elm === 0)) return "0";
  return nums
    .map((elm) => elm.toString())
    .sort((a, b) => {
      if (a + b > b + a) return -1;
      return 1;
    })
    .join("");
}
console.log(lasgestNumber([10, 2]));
console.log(lasgestNumber([3, 30, 34, 5, 9]));
console.log(lasgestNumber([0, 0, 0]));
// =================================================================================
// Q 42 Happy Number
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
Output: false;
function isHappyNumber(n) {
  let set = new Set();
  while (n !== 1) {
    let sum = 0;
    while (n > 0) {
      sum += (n % 10) * (n % 10);

      n = Math.floor(n / 10);
      console.log(n);
    }
    if (set.has(sum)) {
      return false;
    } else {
      set.add(sum);
      n = sum;
    }
  }
  return true;
}
console.log(isHappyNumber(19));
console.log(isHappyNumber(2));
// ========================================================================================
//43 Add Digits
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
//Brute Approach
function addDigits(num) {
  let sum = 0;
  while (num >= 10) {
    sum += num % 10;
    num = Math.floor(num / 10);
    if (num < 10) {
      num += sum;
      sum = 0;
    }
  }
  return num;
}
console.log(addDigits(38));
console.log(addDigits(0));

function addDigits(num) {
  if (num < 10) return num;
  if (num % 9 === 0) return 9;
  return num % 9;
}
console.log(addDigits(38));
console.log(addDigits(0));

// ==================================================================================
// Q 44 count the digits That Divide a Number

// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

// Example 1:

// Input: num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.
// Example 2:

// Input: num = 121
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.
// Example 3:

// Input: num = 1248
// Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.

function countDigits(num) {
  let original = Math.abs(num);
  let sum = 0;
  let temp = original;
  while (num !== 0) {
    let digits = num % 10;
    if (temp % digits === 0 && digits != 0) {
      sum++;
    }
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(countDigits(7));
console.log(countDigits(121));
console.log(countDigits(1248));
// =======================================================================================

// 45 uggly Number
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

//Brute Approach
function isUggly(n) {
  if (n === 0) return false;
  while (n !== 1) {
    if (n % 2 == 0) {
      n = n / 2;
      continue;
    }
    if (n % 3 == 0) {
      n = n / 3;
      continue;
    }
    if (n % 5 == 0) {
      n = n / 3;
      continue;
    }
    return false;
  }
  return true;
}
console.log(isUggly(6));
console.log(isUggly(1));
console.log(isUggly(14));

//Better Appraoch
function isUggly(n) {
  if (n === 0) return false;
  while (n % 5 === 0) {
    n = n / 5;
  }
  while (n % 2 === 0) {
    n = n / 2;
  }
  while (n % 3 === 0) {
    n = n / 3;
  }
  return n == 1;
}
console.log(isUggly(6));
console.log(isUggly(1));
console.log(isUggly(14));

// ======================================================================================
// Q 46 Palindorm number
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
function isPalindrom(x) {
  let dup = x;
  let reverse = 0;
  while (x > 0) {
    let lastDigits = x % 10;
    x = Math.floor(x / 10);
    reverse = reverse * 10 + lastDigits;
  }
  return reverse === dup;
}
console.log(isPalindrom(121));
console.log(isPalindrom(-121));
console.log(isPalindrom(10));
// =======================================================================================
// 47 Search insert position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function sreachInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) {
      return i;
    }
  }
  return nums.length;
}
console.log(sreachInsert([1, 3, 5, 6], 5));
console.log(sreachInsert([1, 3, 5, 6], 2));
console.log(sreachInsert([1, 3, 5, 6], 7));
console.log(sreachInsert([1, 3, 5, 6], 7));
console.log(sreachInsert([1, 6], 7));

// Better
function sreachInsert(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}
console.log(sreachInsert([1, 3, 5, 6], 5));
console.log(sreachInsert([1, 3, 5, 6], 2));
console.log(sreachInsert([1, 3, 5, 6], 7));
console.log(sreachInsert([1, 3, 5, 6], 7));
console.log(sreachInsert([1], 0));
// ==============================================================================
// Q 48 Find the closest number to Zero
// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

// Example 1:

// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.
// Example 2:

// Input: nums = [2,-1,1]
// Output: 1
// Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.

function findClosetNumber(nums) {
  if (nums.length === 0) return null;
  let closest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (
      Math.abs(nums[i]) < Math.abs(closest) ||
      (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > closest)
    ) {
      closest = nums[i];
    }
  }
  return closest;
}
console.log(findClosetNumber([-4, -2, 1, 4, 8]));
console.log(findClosetNumber([2, -1, 1]));
// =======================================================================================
// Q 49 contains duplicate ||

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

//Brute Approach
function isCountainDup(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
}
console.log(isCountainDup([1, 2, 3, 1], 3));
console.log(isCountainDup([1, 0, 1, 1], 1));
console.log(isCountainDup([1, 2, 3, 1, 2, 3], 2));

//Better Approach
function isCountainDup(nums, k) {
  const map = new Map();
  for (let index in nums) {
    if (!map.has(nums[index])) map.set(nums[index], index);
    else if (Math.abs(map.get(nums[index]) - index) <= k) return true;
    map.set(nums[index], index);
  }
  return false;
}
console.log(isCountainDup([1, 2, 3, 1], 3));
console.log(isCountainDup([1, 0, 1, 1], 1));
console.log(isCountainDup([1, 2, 3, 1, 2, 3], 2));
// ======================================================================================
// Q 50 intersection of Two  Array

// Given two integer arrays nums1 and nums2, return an array of their
// intersection
// . Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
//Brute Approach
function intersection(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let intersection = [...set1].filter((elm) => set2.has(elm));
  return intersection;
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

// Better Approach
function intersection(nums1, nums2) {
  return Array.from(new Set(nums1).intersection(new Set(nums2)));
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

//Optimal
function intersection(nums1, nums2) {
  let res = [];
  let uniqueArr1 = [...new Set(nums1)].sort((a, b) => a - b);
  let uniqueArr2 = [...new Set(nums2)].sort((a, b) => a - b);

  for (let i = 0; i < uniqueArr1.length; i++) {
    let temp = uniqueArr1[i];
    for (let i = 0; i < uniqueArr2.length; i++) {
      if (temp === uniqueArr2[i]) {
        res.push(temp);
      }
    }
  }
  return res;
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// =====================================================================================
// Q51 Intersection of two Array ||
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
function interect(nums1, nums2) {
  let countMap = new Map();
  //count each elm occurrnce in nums1
  for (let num of nums1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  let res = [];
  for (let num of nums2) {
    if (countMap.has(num) && countMap.get(num) > 0) {
      res.push(num);
      countMap.set(num, countMap.get(num) - 1);
    }
  }
  return res;
}
console.log(interect([1, 2, 2, 1], [2, 2]));
console.log(interect([4, 9, 5], [9, 4, 9, 8, 4]));
// ======================================================================================
// Q 52  Intercestion of multiple Arrays
// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

// Example 1:

// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]
// Explanation:
// The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].
// Example 2:

// Input: nums = [[1,2,3],[4,5,6]]
// Output: []
// Explanation:
// There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].

function intersectionOfMutipleArr(nums) {
  let flatArr = nums.flat(Infinity);
  const map = new Map();
  for (let nums of flatArr) {
    map.set(nums, (map.get(nums) || 0) + 1);
  }
  let res = [];
  for (let [num, count] of map.entries()) {
    if (count === nums.length) {
      res.push(num);
    }
  }
  return res.sort((a, b) => a - b);
}
console.log(
  intersectionOfMutipleArr([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
console.log(
  intersectionOfMutipleArr([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

// =======================================================================================
// Q 53 find the distance of two Arrays
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

//Brute Approach
function diiference(nums1, nums2) {
  let ans = [];
  let x = new Set();
  let y = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      x.add(nums1[i]);
    }
  }
  ans.push(Array.from(x));

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i])) {
      y.add(nums2[i]);
    }
  }
  ans.push(Array.from(y));
  return ans;
}
console.log(diiference([1, 2, 3], [2, 4, 6]));
console.log(diiference([1, 2, 3, 3], [1, 1, 2, 2]));

//Better Approach
function diiference(nums1, nums2) {
  let ans = [];
  let x = Array.from(new Set(nums1.filter((elm) => !nums2.includes(elm))));
  let y = Array.from(new Set(nums2.filter((elm) => !nums1.includes(elm))));
  ans[0] = x;
  ans[1] = y;
  return ans;
}
console.log(diiference([1, 2, 3], [2, 4, 6]));
console.log(diiference([1, 2, 3, 3], [1, 1, 2, 2]));
// ========================================================================================
// Q 54 minimum common value
// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

//Better Approach
function minimumCommonValue(nums1, nums2) {
  let set1 = new Set(nums1);
  let commonElm = nums2.filter((elm) => set1.has(elm));
  return commonElm.length > 0 ? Math.min(...commonElm) : -1;
}
console.log(minimumCommonValue([1, 2, 3], [2, 4]));
console.log(minimumCommonValue([1, 2, 3, 6], [2, 3, 4, 5]));
// =====================================================================================

// 56 Thrid maximum number

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

//Brute Approach Tc-o(n3)
function thirdMaxNum(nums) {
  //sort the in decending order
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[0];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
  //remove duplicate
  let firstElm = nums[0];
  let res = [firstElm];
  for (let i = 1; i < nums.length; i++) {
    if (firstElm !== nums[i]) {
      firstElm = nums[i];
      res.push(nums[i]);
    }
  }
  index = res.indexOf(Math.max(...res)) + 2;
  return res.length > 2 ? res[index] : res[0];
}
console.log(thirdMaxNum([3, 2, 1]));
console.log(thirdMaxNum([1, 2]));
console.log(thirdMaxNum([2, 2, 3, 1]));
console.log(thirdMaxNum([2, 2, 3, 1]));
console.log(thirdMaxNum([5, 5, 5, 5, 1, 2, 3])); // 2 (distinct numbers: 5, 3, 2, 1)

//Better Approach
function thirdMaxNum(nums) {
  let res = [...new Set(nums.sort((a, b) => b - a))];
  return res.length > 2 ? res[2] : res[0];
}
console.log(thirdMaxNum([3, 2, 1]));
console.log(thirdMaxNum([1, 2]));
console.log(thirdMaxNum([2, 2, 3, 1]));
console.log(thirdMaxNum([2, 2, 3, 1])); // 1
console.log(thirdMaxNum([1, 1, 1])); // 1 (only one distinct number)
console.log(thirdMaxNum([-1, -2, -3, -4])); // -3 (distinct numbers: -1, -2, -3, -4)
// =======================================================================================
// Q 57 Neither minimum nor maximum
// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

// Return the selected integer.

// Example 1:

// Input: nums = [3,2,1,4]
// Output: 2
// Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.
// Example 2:

// Input: nums = [1,2]
// Output: -1
// Explanation: Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.
// Example 3:

// Input: nums = [2,1,3]
// Output: 2
// Explanation: Since 2 is neither the maximum nor the minimum value in nums, it is the only valid answer.

//Brute Approach
function findNonMinOrMax(nums) {
  nums.sort((a, b) => a - b);
  if (nums.length <= 2) return -1;
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  for (let num of nums) {
    if (num !== min && num !== max) {
      return num;
    }
  }
  return -1;
}
console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
console.log(findNonMinOrMax([2, 1, 3]));
console.log(findNonMinOrMax([2]));

//Better Appraoch
function findNonMinOrMax(nums) {
  nums.sort((a, b) => a - b);
  let arr = nums.slice(1, nums.length - 1);
  return arr.length === 0 ? -1 : Math.min(...arr);
}
console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
console.log(findNonMinOrMax([2, 1, 3]));
console.log(findNonMinOrMax([2]));

function findNonMinOrMax(nums) {
  nums.sort((a, b) => a - b);
  return nums.length <= 2
    ? -1
    : nums.find(
        (elm) => Math.min(...nums) !== elm && Math.max(...nums) !== elm
      );
}
console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
console.log(findNonMinOrMax([2, 1, 3]));
console.log(findNonMinOrMax([2]));
// =====================================================================================
// Q 58 Valid parenthes
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

function isValidParenthes(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}
console.log(isValidParenthes("()"));
console.log(isValidParenthes("()[]{}"));
console.log(isValidParenthes("(]"));
console.log(isValidParenthes("([])"));

// =======================================================================================
// Q 59 power of two
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false

function isPowerOfTwo(n) {
  let i = 1;
  while (i < n) {
    i *= 2;
  }
  return i === n;
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
// ========================================================================================
// Q 60 Power of three
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).

function powerOfThree(n) {
  let i = 1;
  while (i < n) {
    i *= 3;
  }
  return i === n;
}
console.log(powerOfThree(27));
console.log(powerOfThree(0));
console.log(powerOfThree(-1));
// ====================================================================================
// // Q 61 First unique Char
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

//Brute Approach
function firstUniqueChar(s) {
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) {
        count++;
      }
    }
    if (count === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("loveleetcode"));
console.log(firstUniqueChar("aabb"));

//Optimal Approach
function firstUniqueChar(s) {
  let countOccurr = {};
  for (let char of s) {
    if (countOccurr[char]) {
      countOccurr[char]++;
    } else {
      countOccurr[char] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (countOccurr[char] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("loveleetcode"));
console.log(firstUniqueChar("aabb"));
// ======================================================================================
// Q 62 First letter appear twice
// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:

// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

// Example 1:

// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.
// Example 2:

// Input: s = "abcdd"
// Output: "d"
// Explanation:wice is 'd' so we return
// The only letter that appears t 'd'.
function repeatedChar(s) {
  let set = new Set();

  for (let char of s) {
    if (set.has(char)) {
      return char;
    }
    set.add(char);
  }
}

console.log(repeatedChar("abccbaacz"));
console.log(repeatedChar("abcdd"));
// ========================================================================================
// Q 63 valid prefect squares
// Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.

// Example 1:

// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
// Example 2:

// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

//Brute
function isPrefectSqures(num) {
  for (let i = 1; i <= num; i++) {
    if (i * i === num) {
      return true;
    } else if (i * i > num) {
      return false;
    }
  }
}
console.log(isPrefectSqures(16));
console.log(isPrefectSqures(14));

//Better
function isPrefectSqures(num) {
  return Number.isInteger(Math.sqrt(num));
}
console.log(isPrefectSqures(16));
console.log(isPrefectSqures(14));
// ======================================================================================
// Q 64 Sum of Squres of sepical Elements
// You are given a 1-indexed integer array nums of length n.

// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

// Return the sum of the squares of all special elements of nums.
// Example 1:

// Input: nums = [1,2,3,4]
// Output: 21
// Explanation: There are exactly 3 special elements in nums: nums[1] since 1 divides 4, nums[2] since 2 divides 4, and nums[4] since 4 divides 4.
// Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21.
// Example 2:

// Input: nums = [2,7,1,19,18,3]
// Output: 63
// Explanation: There are exactly 4 special elements in nums: nums[1] since 1 divides 6, nums[2] since 2 divides 6, nums[3] since 3 divides 6, and nums[6] since 6 divides 6.
// Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[3] * nums[3] + nums[6] * nums[6] = 2 * 2 + 7 * 7 + 1 * 1 + 3 * 3 = 63.

//Brute Approach
function sumOfSpeicalEm(nums) {
  let sum = 0;
  let n = nums.length;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += nums[i - 1] * nums[i - 1];
    }
  }
  return sum;
}
console.log(sumOfSpeicalEm([1, 2, 3, 4]));
console.log(sumOfSpeicalEm([2, 7, 1, 19, 18, 3]));

//Better Appraoch

function sumOfSpeicalEm(nums) {
  let sum = 0;
  let n = nums.length;
  nums.forEach((num, i) => {
    if (n % (i + 1) == 0) {
      sum += num * num;
    }
  });
  return sum;
}
console.log(sumOfSpeicalEm([1, 2, 3, 4]));
console.log(sumOfSpeicalEm([2, 7, 1, 19, 18, 3]));

function sumOfSpeicalEm(nums) {
  return nums
    .filter((num, i) => nums.length % (i + 1) == 0)
    .map((elm) => elm ** 2)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfSpeicalEm([1, 2, 3, 4]));
console.log(sumOfSpeicalEm([2, 7, 1, 19, 18, 3]));

// ======================================================================================
// Q 65 Sum of Squres Number
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false

//Brute Approach
function sumOfSquaresNum(n) {
  if (n < 0) return false;
  let l = 0;
  let r = Math.floor(Math.sqrt(n));
  let t;
  while (l <= r) {
    t = l * l + r * r;
    if (t == n) {
      return true;
    } else if (t < n) {
      l++;
    } else {
      r--;
    }
  }
  return false;
}
console.log(sumOfSquaresNum(5));
console.log(sumOfSquaresNum(3));
// =====================================================================================
// Q 66 Find the difference
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"
//Brute Approach
function findTheDifference(s, t) {
  s = s.split("").sort();
  t = t.split("").sort();
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== s[i]) {
      return t[i];
    }
  }
  return t[t.length - 1];
}
console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));

function findTheDifference(s, t) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result ^= s.charCodeAt(i);
  }
  for (let i = 0; i < t.length; i++) {
    result ^= t.charCodeAt(i);
  }
  return String.fromCharCode(result);
}
console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));

// ======================================================================================
// Q 67 Find Smallest Letter Greater then Target
// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

function nextGreaterLetter(letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() > target.charCodeAt()) {
      return letters[i];
    }
  }
  return letters.length;
}
console.log(nextGreaterLetter(["c", "f", "j"], "a"));
console.log(nextGreaterLetter(["c", "f", "j"], "c"));
console.log(nextGreaterLetter(["x", "x", "y", "y"], "z"));

function nextGreaterLetter(letters, target) {
  let l = 0;
  let r = letters.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (letters[mid].charCodeAt() > target.charCodeAt()) r = mid - 1;
    else l = mid + 1;
  }
  return l === letters.length ? letters[0] : letters[l];
}
console.log(nextGreaterLetter(["c", "f", "j"], "a"));
console.log(nextGreaterLetter(["c", "f", "j"], "c"));
console.log(nextGreaterLetter(["x", "x", "y", "y"], "z"));
// ========================================================================================
// Q 68 Count Elements with strictly samller and greater then Element
// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

// Example 1:

// Input: nums = [11,7,2,15]
// Output: 2
// Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
// Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
// In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
// Example 2:

// Input: nums = [-3,3,3,90]
// Output: 2
// Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
// Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
function countElements(nums) {
  if (nums.length < 3) return 0; // If there are fewer than 3 elements, none can have both a smaller and a greater element

  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return nums.filter((elm) => elm !== min && elm !== max).length;
}
console.log(countElements([11, 7, 2, 15]));
console.log(countElements([-3, 3, 3, 90]));
console.log(countElements([-71, -71, 93, -71, 40]));
console.log(countElements([-71, -71, 93, -71]));
// ====================================================================================
// 69 Maximum count of positive and negaitve.
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

//Brute Appraoch
function maximunCount(nums) {
  let pos = 0;
  let neg = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos++;
    } else if (nums[i] < 0) {
      neg++;
    }
  }
  if (pos === neg) {
    return neg;
  } else if (pos < neg) {
    return neg;
  }
  return pos;
}
console.log(maximunCount([-2, -1, -1, 1, 2, 3]));
console.log(maximunCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximunCount([5, 20, 66, 1314]));

//Better Appraoch
function maximunCount(nums) {
  let x = nums.filter((elm) => elm < 0 && elm !== 0);
  let y = nums.filter((elm) => elm !== 0 && elm > 0);
  return Math.max(...[x.length, y.length]);
}
console.log(maximunCount([-2, -1, -1, 1, 2, 3]));
console.log(maximunCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximunCount([5, 20, 66, 1314]));

// ========================================================================================
// Q 70 Count negtive number in a sorted Matrix
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0

function countNeg(grid) {
  let count = 0;
  let m = grid.length;
  let n = grid[0].length;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (grid[j][i] >= 0) break;
      count++;
    }
  }
  return count;
}
console.log(
  countNeg([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNeg([
    [3, 2],
    [1, 0],
  ])
);

// Better Approach

function countNeg(grid) {
  let count = grid.reduce((acc, curr) => {
    return (
      acc +
      curr.reduce((innerAcc, innerCurr) => {
        return innerCurr < 0 ? innerAcc + 1 : innerAcc;
      }, 0)
    );
  }, 0);
  return count;
}
console.log(
  countNeg([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNeg([
    [3, 2],
    [1, 0],
  ])
);
// =========================================================================================
// 71 Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
function reverseInteger(x) {
  const INT_MIN = 2 ** 31 * -1;
  const INT_MAX = 2 ** 31 - 1;
  let reverse = 0;
  let sign = Math.sign(x);
  x = Math.abs(x);
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);

    x = Math.floor(x / 10);
  }
  if (reverse < INT_MIN || reverse > INT_MAX) {
    return 0;
  }

  return reverse * sign;
}
console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));
// ====================================================================================
// 72 A Numer After  a double Reverse
// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

// Example 1:

// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
// Example 2:

// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
// Example 3:

// function reverseNumber(x) {
//   let reverse = 0;
//   while (x > 0) {
//     reverse = reverse * 10 + (x % 10);
//     x = Math.floor(x / 10);
//   }
//   return reverse;
// }
// function isSamAfterTheDoubleReverse(num) {
//   let reversed1 = reverseNumber(num);
//   let reversed2 = reverseNumber(reversed1);
//   return reversed2 === num;
// }
// console.log(isSamAfterTheDoubleReverse(526));
// console.log(isSamAfterTheDoubleReverse(1800));
// console.log(isSamAfterTheDoubleReverse(0));

// ====================================================================================
// 73Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
function romamToInt(s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      total = total - roman[s[i]];
    } else {
      total = total + roman[s[i]];
    }
  }
  return total;
}
console.log(romamToInt("III"));
console.log(romamToInt("LVIII"));
console.log(romamToInt("MCMXCIV"));
// =======================================================================================
// Q 74 First missing postive
// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.
//Brute Approach
function firstMissingPosElm(nums) {
  let num = [...new Set(nums)].filter((elm) => elm > 0).sort((a, b) => a - b);

  let j = 1;
  for (let i = 0; i < num.length; i++) {
    if (j === num[i]) {
      j++;
    } else {
      return j;
    }
  }
  return j;
}
console.log(firstMissingPosElm([1, 2, 0]));
console.log(firstMissingPosElm([3, 4, -1, 1]));
console.log(firstMissingPosElm([7, 8, 9, 11, 12]));
// Tc-o(n log n)

//Optimal Approach
function firstMissingPosElm(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = 1;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!obj[i]) {
      return i;
    }
  }
  return nums.length + 1;
}
console.log(firstMissingPosElm([1, 2, 0]));
console.log(firstMissingPosElm([3, 4, -1, 1]));
console.log(firstMissingPosElm([7, 8, 9, 11, 12]));
// TC o(n)
// ================================================================================
// Q 75 Find the duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

//Brute Approach
function findDuplicateElm(nums) {
  let obj = {};
  for (let elm of nums) {
    if (!obj[elm]) {
      obj[elm] = 1;
    } else {
      return elm;
    }
  }
}
console.log(findDuplicateElm([1, 3, 4, 2, 2]));
console.log(findDuplicateElm([3, 1, 3, 4, 2]));
console.log(findDuplicateElm([3, 3, 3, 3, 3]));

function findDuplicateElm(nums) {
  return Number(
    [...new Set(nums.filter((elm, i) => i !== nums.indexOf(elm)))].join("")
  );
  // i    firstIndex
  // 0      0
  // 1      1
  // 2      2
  // 3      3
  // 4      3
}
console.log(findDuplicateElm([1, 3, 4, 2, 2]));
console.log(findDuplicateElm([3, 1, 3, 4, 2]));
console.log(findDuplicateElm([3, 3, 3, 3, 3]));
// =======================================================================================
// Q 73 set Mismatch
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

//Better Appraoch
function ErrorNums(nums) {
  let result = [];
  n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      x = nums[i];
    }
  }
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      y = i;
    }
  }
  result[0] = x;
  result[1] = y;
  return result;
}
console.log(ErrorNums([1, 2, 2, 4]));
console.log(ErrorNums([1, 1]));

function ErrorNums(nums) {
  let output = [];
  //get duplicate elm
  for (let num of nums) {
    num = Math.abs(num);
    if (nums[num - 1] < 0) {
      output.push(num);
    } else {
      nums[num - 1] *= -1;
    }
  }
  //missing elm
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      output.push(i + 1);
      return output;
    }
  }
}
console.log(ErrorNums([1, 2, 2, 4]));
console.log(ErrorNums([1, 1]));
// =====================================================================================
// Q 74 Find the XOR of numbers which appear Twice
// You are given an array nums, where each number in the array appears either once or twice.

// Return the bitwise XOR of all the numbers that appear twice in the array, or 0 if no number appears twice.

// Example 1:

// Input: nums = [1,2,1,3]

// Output: 1

// Explanation:

// The only number that appears twice in nums is 1.

// Example 2:

// Input: nums = [1,2,3]

// Output: 0

// Explanation:

// No number appears twice in nums.

// Example 3:

// Input: nums = [1,2,2,1]

// Output: 3

// Explanation:

// Numbers 1 and 2 appeared twice. 1 XOR 2 == 3.

function duplicateNumbersXOR(nums) {
  let XOR = 0;
  let frequncyMap = new Map();
  // console.log(frequncyMap);

  for (let num of nums) {
    frequncyMap[num] = (frequncyMap[num] || 0) + 1;
  }
  for (let num in frequncyMap) {
    if (frequncyMap[num] === 2) {
      XOR ^= Number(num);
    }
  }

  return XOR;
}
console.log(duplicateNumbersXOR([1, 2, 1, 3]));
console.log(duplicateNumbersXOR([1, 2, 3]));
console.log(duplicateNumbersXOR([1, 2, 2, 1]));

function duplicateNumbersXOR(nums) {
  let map = new Map();
  let result = [];
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let [i, v] of map) {
    if (v > 1) {
      result.push(i);
    }
  }
  return result.reduce((a, b) => a ^ b, 0) || 0;
}
console.log(duplicateNumbersXOR([1, 2, 1, 3]));
console.log(duplicateNumbersXOR([1, 2, 3]));
console.log(duplicateNumbersXOR([1, 2, 2, 1]));

// =====================================================================================
//75 Valid number
// Given a string s, return whether s is a valid number.

// For example, all the following are valid numbers: "2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789", while the following are not valid numbers: "abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53".

// Formally, a valid number is defined using one of the following definitions:

// An integer number followed by an optional exponent.
// A decimal number followed by an optional exponent.
// An integer number is defined with an optional sign '-' or '+' followed by digits.

// A decimal number is defined with an optional sign '-' or '+' followed by one of the following definitions:

// Digits followed by a dot '.'.
// Digits followed by a dot '.' followed by digits.
// A dot '.' followed by digits.
// An exponent is defined with an exponent notation 'e' or 'E' followed by an integer number.

// The digits are defined as one or more digits.

// Example 1:

// Input: s = "0"

// Output: true

// Example 2:

// Input: s = "e"

// Output: false

// Example 3:

// Input: s = "."

// Output: false;
//Brute Appraoch
function isValid(s) {
  return (
    (Number(s) === 0 || !!Number(s)) &&
    s.trim() !== " " &&
    s !== "Infinity" &&
    s !== "-Infinity" &&
    s !== "+Infinity"
  );
}
console.log(isValid("0"));
console.log(isValid("e"));
console.log(isValid("."));

//Better Appraoch
function isValid(s) {
  const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
  return regex.test(s);
}
console.log(isValid("0"));
console.log(isValid("e"));
console.log(isValid("."));

// =======================================================================================
// Q 76 Score of a string
// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

// Example 1:

// Input: s = "hello"

// Output: 13

// Explanation:

// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// Example 2:

// Input: s = "zaz"

// Output: 50

// Explanation:

// The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

//Brute Approach
function calculateTheScore(s) {
  let score = 0;
  for (let i = 0; i < s.length - 1; i++) {
    score += Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt());
  }
  return score;
}
console.log(calculateTheScore("hello"));
console.log(calculateTheScore("zaz"));

//Better Approach

function calculateTheScore(s) {
  let chars = Array.from(s);
  return chars.reduce((acc, curr, index) => {
    // index ===0 skip (acc=0)
    if (index === 0) return acc;
    return (
      acc + Math.abs(chars[index - 1].charCodeAt() - chars[index].charCodeAt())
    );
  }, 0);
}
console.log(calculateTheScore("hello"));
console.log(calculateTheScore("zaz"));

// =====================================================================================
// // Q 77find the maximum Achievable Number
// Given two integers, num and t. A number is achievable if it can become equal to num after applying the following operation:

// Increase or decrease the number by 1, and simultaneously increase or decrease num by 1.
// Return the maximum achievable number after applying the operation at most t times.

// Example 1:
// Input: num = 4, t = 1
// Output: 6
// Explanation:
// Apply the following operation once to make the maximum achievable number equal to num:
// Decrease the maximum achievable number by 1, and increase num by 1.
// Example 2:
// Input: num = 3, t = 2
// Output: 7

// Explanation:
// Apply the following operation twice to make the maximum achievable number equal to num:

// Decrease the maximum achievable number by 1, and increase num by 1.
//x-t=num+t;
//x=num+t+t;
//x=num+2*(t)

//Brute Approach
function TheMaximumAchribleX(num, t) {
  for (let i = 0; i < t; i++) {
    num += 2;
  }
  return num;
}
console.log(TheMaximumAchribleX(4, 1));
console.log(TheMaximumAchribleX(3, 2));

//Better Approach
function TheMaximumAchribleX(num, t) {
  return num + 2 * t;
}
console.log(TheMaximumAchribleX(4, 1));
console.log(TheMaximumAchribleX(3, 2));
// ====================================================================================
// Q 78 Return the length of Arugment passed
// Write a function argumentsLength that returns the count of arguments passed to it.
// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.
function argumentsLength(...args) {
  return args.length;
}
console.log(argumentsLength(5)); // Output: 1
console.log(argumentsLength({}, null, "3")); // Output: 3


function argumentsLength(...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    count++;
  }
  return count;
}
console.log(argumentsLength(5)); // Output: 1
console.log(argumentsLength({}, null, "3")); // Output: 3
