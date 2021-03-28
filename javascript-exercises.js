/*
1
Write a javaScript function that prints the sum of the numbers 1 to 10, using a while loop
*/

// =================FIRST TASK====================

// var a = 0
// while (a < 10) {
//   console.log(a)
//   document.write(a, '<br>')
//   a++
// }
/*
2
Write a javaScript function that prints a multiplication table for number 10

let number = 10;
>>>>> Result:   1 * 10= 10
                2 * 10= 20
                .
                .
                10 * 10= 100
*/

// =================SECOND TASK====================
// let number = 10
// function multiplication() {
//   if (number < 11) {
//     return console.log((number *= 10))
//   } else {
//     return false
//   }
// }  first solution which is not entirely wrong there is something missing

// let nums = 10

// ================================================

// for (let num = 0; num <= 10; ) {
//   num++
//   let multi = num * nums
//   // document.write(nums * num == multi, '<br>')

//   document.write(`${nums} * ${num} = ${multi}`, '<br>')
//   console.log(`${nums} * ${num} = ${multi}`, '<br>')
// } the second solution

/*
3
Write a javaScript function that returns the largest element in an array
** DON'T use any built-in functions**

let numbers = [5, 8, 66, 1 , 40, 13, 27];
*/
// =================THIRD TASK====================

// let num = [5, 8, 66, 1, 40, 13, 27]
// if ((num =0;  length < 2)) {
//   console.log(num)
// }

// ===============================================
// var num = [5, 8, 66, 1, 40, 13, 27]
// var largest = 0

// for (nums = 0; nums <= largest; nums++) {
//   if (num[nums] > largest) {
//     var largest = num[nums]
//   }
// }
// console.log(largest)

/*
4
Write a javaScript function that reverses an array
** DON'T use any built-in functions**

let months = [April, May, June, July, August];
*/
// =================FOURTH TASK====================
// First try this is a bulit in function
// let months = ['April', 'May', 'June', 'July', 'August']
// months.reverse().push('hello')
// console.log(months)
// ==================================

// Second try
// const months = ['April', 'May', 'June', 'July', 'August']
// var reversed = 0

// for ( mons <= reversed; --mons) {
//   if (months[mons] - reversed) {
//     var reversed = months[mons]
//   }
// }
// console.log(reversed)

// let reverseArr = (arr) => {
//   for (let mon = 0; mon < arr.length / 2; mon++) {
//     ;[arr[mon], arr[arr - mon - 1]] = [arr[arr - mon - 4], arr[mon]]
//   }
//   return arr[(-1, 1)]
// }
// console.log(reverseArr(['April', 'May', 'June', 'July', 'August']))
/*
5
Write a javaScript function that returns the elements on even index in an array


// =================FIFTH TASK====================

let months = [April, May, June, July, August];
>>>>> Result: May, July
*/
// First Try

// var months = { 0: 'April', 1: 'May', 2: 'June', 3: 'July', 4: 'August' }
// array = ['April', 'June' , 'August']
// console.log(array)

// Second try

// for (var i = 1; i < months.length; i++) {
//   if (months[i] % 2 === 1) {
//     array.push(months[i])
//   }
//   console.log(array)
// }

// Third try
// function evenElements(array) {
//   var newArray = []
//   for (var i = 0; i < array.length; i++) {
//     //if 2 equal 0

//     // if (i % 2 == 0) {
//     //   newArray.push([i])
//     //   console.log(months[i])
//     // }

//     if (i % 2 != 0) {
//       //if 2 not equal  0
//       newArray.push([i])
//       console.log(months[i])
//     }
//   }
// }
// let months = ['April', ' May', 'June', 'July', 'August']
// evenElements(months)

/*
6
Write a javaScript function that compute the sum of the numbers in an array, using a for-loop
*/

// =================SIXTH TASK====================

// let array = [20, 30, 40, 50, 60, 70, 80, 90, 100]
// sum = 0
// for (i = 0; i < array.length; i += 1) {
//   sum += array[i]
// }
// console.log(`Sum: ${sum}`)
/*
7
Write a javaScript function that concatenates two arrays
** DON'T use any built-in functions**
*/
// =================SEVENTH TASK====================

// var a = [1, 2, 3, 4, 5, 6]
// var b = [1, 2, 5, 0, 8, 6]

// array = [...a, ...b]
// console.log(array)
/*
8
Write a javaScript function that sorts an array
** DON'T use any built-in functions**
*/

// =================EIGHTH TASK====================

// i found the solution on w3resource.com

// const arr1 = [8, 0, 1, 5, 3]
// const arr2 = []
// let min = arr1[0]
// let pos
// var max = arr1[0]
// for (i = 0; i < arr1.length; i++) {
//   if (max < arr1[i]) max = arr1[i]
// }

// for (var i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr1.length; j++) {
//     if (arr1[j] != 'x') {
//       if (min > arr1[j]) {
//         min = arr1[j]
//         pos = j
//       }
//     }
//   }
//   arr2[i] = min
//   arr1[pos] = 'x'
//   min = max
// }
// console.log(arr2)

/*
9
Write a javaScript function that sorts an array
** DON'T use any built-in functions**
*/

/*
10
Write a javaScript function that sorts an array
** DON'T use any built-in functions**

let numbers = [8, 0, 1, 5, 3];
>>>>> Result: [0, 1, 3, 5, 8];
*/

/*

Q8 to Q10 is the same Question

11
Write a javaScript function that counts the number of vowel letters in the string
*/

// =================ELEVENTH TASK====================

// const vowels = ['a', 'e', 'i', 'o', 'u']

// function countVowel(str) {
//   // initialize count
//   let count = 0

//   //loop through string to test if each character is a vowel
//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++
//     }
//   }
//   // return number of vowels
//   return count
// }
// // take input
// const string = prompt('Enter a string: ')

// const result = countVowel(string)
// console.log(result)

/*
12
Write a javaScript function that checks numbers and put even and odd numbers in two different araays

let numbers = [10, 5, 3, 8, 1, 6, 9];
>>>>> Result:   Even numbers [10, 8, 6]
                Odd numbers [5, 3, 1, 9]
*/

// =================TWELFTH TASK====================

// function evenElements(array) {
//   var newArray = []
//   for (var i = 0; i < array.length; i++) {
//     //if 2 equal 0

//     if (i % 2 == 0) {
//       newArray.push([i])
//       console.log('Even numbers:', numbers[i])
//     }

//     console.log('=============')
//     if (i % 2 != 0) {
//       //if 2 not equal  0
//       newArray.push([i])
//       console.log('Odd numbers:', numbers[i])
//     }
//   }
// }
// let numbers = [10, 5, 3, 8, 1, 6, 9]
// evenElements(numbers)

/*
13
Write a javaScript function that calculates the factorial of any number
*/
// function factorial(x) {
//   if (x === 1) {
//     return 1
//   }
//   return x * factorial(x - 1)
// }
// console.log(factorial(5))
/*
14
Write a javaScript function that finds the second minmum number of an array
** DON'T use any built-in functions**

let numbers = [10, 5, 3, 8, 1, 6, 9];
>>>>> Result:   3
*/
// not solved still i wanna solve it
/*
15
Write a javaScript function that compares the length of words in an array and returns the longest word with length
** DON'T use any built-in functions**

let animals = ['Horse', 'Cat', 'Giraffe']
>>>>> Result:   Giraffe 7
*/
// not solved still i wanna solve it
