// qo'shimcha nmasalalar

// 1 - masala

// Be Concise I - The Ternary Operator
// You are given a function that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)

// TODO: Refactor and shorten the function

// function describeAge(age) {
// return "You're a(n) " + (age <= 12 ? "kid" : age <= 17 ? "teenager" : age <= 64 ? "adult" : "elderly")
// }

// console.log(describeAge(12));
// console.log(describeAge(17));
// console.log(describeAge(65));

// 2 - masala

// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// function isPalindrome(x) {
//   // your code here
//   x = x.toLowerCase().split("")
//   let newX = [...x].reverse().join("")
//   x = x.join("")
//   return x === newX
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// 3 - masala

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// function sum (numbers) {
//   return numbers.reduce((a, b) => a + b, 0)
// }
// console.log(sum([1, 5.2, 4, 0, -1]));
// console.log(sum([]));
// console.log(sum([-2.398]));

// 4 - masala

// Create a function that takes three arguments:

// a value to be evaluated for truthiness.
// a function to execute if the first argument is truthy.
// a function to execute if the first argument is falsy.
// If the first argument evaluates to truthy, call the second argument (a function). If it evaluates to falsy, call the third argument instead (also a function).

// In statically-typed languages, the first argument will be a boolean. In dynamically-typed languages that attribute a truth value to all expressions, it may be of any type.

// function _if(bool, func1, func2) {
//   // ...
//   return bool ? func1() : func2()
// }
// console.log(_if(true, () => "true", () => "false"));
// console.log(_if(false, () => "true", () => "false"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// assalom alaykum ustoz  bu masalalarga ball qo'yasizmi 😅😅😅😂 ? codewarsdagi 8 kyulik masalar ekan ishlamagan ekanman hali shunga ishlap qo'shib ketyapman
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111

// 5 - masala

// This kata explores simplified time zones

// Given tz_from, tz_to, start and duration, return a boolean that answers this question:

// "Was the package received the day before it was sent?"
// Details
// Time zones are represented by integers -11 to +12 inclusive (including zero), one zone per hour for a total of 24 zones in one day. This simplification ignores zones below -11 and above +12, 30- and 45-minute offsets, daylight savings, and time folds.

// A package is sent between two time zones: tz_from and tz_to, initiated at local hour start (integer between 0 to 23, 24hr clock). The delivery takes duration hours to complete (integer between 0 to 24, inclusive).

// Examples
// Eg 1.
// Given tz_from=3, tz_to=0, start=13, duration=1, return False. A package sent at 13:00 from time zone 3 takes 1 hour to be delivered to time zone 0. The package is received at 11:00 local time, the same day it was sent. Return "False" as it was not received the day before it was sent.

// Eg 2.
// Given tz_from=12, tz_to=-3, start=5, duration=8, return True. A package sent at 05:00 from time zone 12 takes 8 hours to be delivered to time zone -3. The package is received at 22:00 local time, the day before it was sent. Return "True" as it was received the day before it was sent.

// function was_package_received_yesterday(tz_from, tz_to, start, duration) {
//   let vaqt = start - tz_from
//   let dostavka_vaqti = duration + vaqt
//   let kelgan_vaqti = dostavka_vaqti + tz_to
//   return kelgan_vaqti < 0 ? true : false
// }
// console.log(was_package_received_yesterday(3, 0, 13, 1));
// console.log(was_package_received_yesterday(12, -3, 5, 8));

// 6 - masala

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!

// function cookie(x){
//   // ...
//  return "Who ate the last cookie? It was " + (typeof x === "string" ? "Zach!" : typeof x === "number" ? "Monica!" : "the dog!")
// }
// console.log(cookie("hi"));
// console.log(cookie(1.1));
// console.log(cookie(true));

// 7 - masala

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// function plural(n) {
//   // ...
//   return n != 1
// }
// console.log(plural(1));
// console.log(plural(2));

// 8 - masala

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// function generateShape(integer) {
//   let result = "";
//   for (let i = 0; i < integer; i++) {
//     for (let j = 0; j < integer; j++) {
//       result += "+";
//     }
//     result += "\n";
//   }
//   return result.trim();
// }
// console.log(generateShape(3));
// console.log(generateShape(5));
// console.log(generateShape(9));

// 9 - masala

// You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

// function oddBall(arr){
//     const odd = arr.indexOf("odd")
//     for(const x of arr){
//       if(odd === x) return true
//     }
//   return false
// }
// console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"]));
// console.log(oddBall(["even",55,"odd",6,"even",10,"even"]));


// 10 - masala 


// Story
// You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.

// Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...

// But at the end of the day you realise not everybody did the same amount of work.

// To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

// Kata Task
// Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

// Example
// For start = 125, and end = 132

// The letterboxes are

// 125 = 1, 2, 5
// 126 = 1, 2, 6
// 127 = 1, 2, 7
// 128 = 1, 2, 8
// 129 = 1, 2, 9
// 130 = 1, 3, 0
// 131 = 1, 3, 1
// 132 = 1, 3, 2
// The digit frequencies are:

// 0 is painted 1 time
// 1 is painted 9 times
// 2 is painted 6 times
// etc...
// and so the method would return [1,9,6,3,0,1,1,1,1,1]

// Notes
// 0 < start <= end
// In C and NASM, the returned value will be free'd.



// var paintLetterboxes = function(start, end) {
//   // Your code here
//   let myArr = []
//   for(let i = start; i <= end; i++){
//     myArr.push(i.toString().split(""))
//   }
//   myArr = myArr.flat()
//   let myObj = {}
//   for(const num of myArr){
//     myObj[num] ? myObj[num]++ : myObj[num] = 1
//   }
//   let result = []
//   for (let i = 0; i < 10; i++) {
//     myObj[i] ? result.push(myObj[i]) : result.push(0)
//   }
//   return result
// }
// console.log(paintLetterboxes(125, 132));

