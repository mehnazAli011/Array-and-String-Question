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
// function twoSum(nums, target) {}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
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

// function getSingleOne(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//     if (count === 1) {
//       return nums[i];
//     }
//   }
// }
// console.log(getSingleOne([2, 2, 1]));
// console.log(getSingleOne([4, 1, 2, 1, 2]));
// console.log(getSingleOne([1]));

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
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//Brute Approach
function majorityElm(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count > nums.length / 2) {
      return nums[i];
    }
  }
}
console.log(majorityElm([3, 2, 3]));
console.log(majorityElm([2, 2, 1, 1, 1, 2, 2]));
// =============================================================================