// //. Ch. 21-25
// //. 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter your first name");
// let secondName = prompt("Enter your Second name");
// var fullName = firstName + " " + secondName;
// alert("AOA" + " " + fullName);

// //. 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// let favouriteMobilePhoneModel = prompt("Please Enter Your Favourite Mobile Phone Model");
// document.write("My favourite phone is:" + " " + favouriteMobilePhoneModel + "<br>");
// document.write("Length of string:" + " " + favouriteMobilePhoneModel.length)

// //. 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var string = "Pakistani";
// var index = string.indexOf("n");

// document.write("String: " + "Pakistani" + "<br>")
// document.write("Index of 'n': " + index + "<br>")

// //. 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser .

// var str = "Hello World";
// var ind = str.lastIndexOf("l");

// document.write("String: " + "Hello World" + "<br>")
// document.write("Last index of 'l': " + ind + "<br>")

// //. 5. Write a program to find the character at 3 rd index in the word “Pakistani” and display the result in your browser .

// var str = "Pakistani";
// var character = str.charAt(3);

// document.write("String: " + str + "<br>")
// document.write("Character at index 3: " + character + "<br>")

// //. 6. Repeat Q1 using concat method.

// let firstName = prompt("Enter your first name");
// let secondName = prompt("Enter your Second name");
// var fullName = firstName.concat(" "+ secondName);
// alert("AOA" + " " + fullName);

// //. 7. Write a program to replace the “Hyder” to “Islam” in themword “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// var newCity = city.split("");
// newCity.splice(0, 5, "Islam");
// var replace = newCity.join("");

// document.write("City: " + city + "<br>");
// document.write("After replacement: " + replace)

// //. 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = " Ali and Sami are best friends. They play cricket and football together.";

// message = message.split("and").join("&");
// message = message.split("Sami").join("Omar");

// document.write(message)

// //. 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var string = "472";
// document.write("Value: " + string + "<br>")
// document.write("Type: " + typeof string + "<br>");
// var integer = parseInt("472");
// document.write("Value: " + integer + "<br>")
// document.write("Type: " + typeof integer + "<br>");

// //. 10. Write a program that takes user input. Convert and show the input in capital letters.

// var userInput = prompt("Type PEanuts in small letters");
// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + userInput.toUpperCase()) 

// //. 11. Write a program that takes user input. Convert and show the input in title case.

// var str = prompt("Type Javacript in small letters");
// document.write("User input: " + str + "<br>");
// str=str.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ")
// document.write("Title case: " + str) 

// //. 12. Write a program that converts the variable num tostring.
// // var num = 35.36 ;
// // Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// document.write("Number: " + num + "<br>");
// num = num.toString();
// var str = num.split(".").join("");
// document.write("String: " + str + "<br>");

// //. 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// var userName=prompt("Please enter your name: ");
// var message;
// var split=[];
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     split[i]=userName.split("&nbsp;");
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("please enter a valid userName");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             split[i]=userName.split("&nbsp;");
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }

// }
// alert(message);

// //. 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// //. Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// //. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let B = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

// if (A.includes(B) === true) {
//     alert(B + " " + "is available at index " + A.indexOf(B) + " " + " in our bakery")
// }
// else {
//     alert("We are sorry. " + B + " " + "is not available in our bakery.");
// }

// //. 15. Write a program to take password as an input from user. The password must qualify these requirements:
// // a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long
// // If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// function CheckPassword(inputtxt) 
// { 
// var passw=  /^[A-Za-z]\w{7,14}$/;
// if(inputtxt.value.match(passw)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }
// }

// //. 16. Write a program to convert the following string to an array using string split method.
// // var university = “University of Karachi”; Display the elements of array in your browser.

// var university = "University of Karachi";
// let uni = university.split("");

// for (int i=0, i<university.length, i++) {
//     document.write(uni[i] + " " + "<br>");
// }

// //. 17. Write a program to display the last character of a user input.

// let userInput = prompt("Type your input");
// var character = userInput.slice(-1);
// document.write("User input: " + userInput + "<br>")
// document.write("Last character of input: " + character)

// //. 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
 
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));

// //. ch. 26-30.

// //. 1. Write a program that takes a positive integer from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// var int = +prompt("Enter a positive integer:");

// if (int >= 0) {
    
//     document.write("number: " + int + "<br>");
//     document.write("round value: "+Math.round(int)+ "<br>");
//     document.write("floor value: " + Math.floor(int) + "<br>");
//     document.write("ceil value: " + Math.ceil(int) + "<br>");
// }
// else{
//     alert("Please type a positive integer")
// }

// //. 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// var int = +prompt("Enter a negative floating point number:");
// var floating = parseFloat(int);

// if (floating < 0) {
    
//     document.write("number: " + floating + "<br>");
//     document.write("round value: "+Math.round(floating)+ "<br>");
//     document.write("floor value: " + Math.floor(floating) + "<br>");
//     document.write("ceil value: " + Math.ceil(floating) + "<br>");
// }
// else{
//     alert("Please type a negative floating point number")
// }

// //. 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = Math.random()
// var absolute = Math.abs(num);

// console.log(absolute);
// document.write("Absolute Value of" + " " + num + " " + "is" +   " "+ absolute + "<br>")

// //. 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: " + diceRoll + "<br>")
// var diceRoll2 = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: " + diceRoll2 + "<br>")

// //. 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// var coinRoll = Math.floor( Math.random() *2) +1 ;
// document.write(coinRoll + "<br>");
// if (coinRoll ===2){
//     document.write("random coin value: Heads" + "<br>");
// }
// else {
//     document.write("random coin value: Tails" + "<br>");
// }

// var coinRoll2 = Math.floor( Math.random() *2) +1 ;
// document.write(coinRoll2 + "<br>");
// if (coinRoll2 ===2){
//     document.write("random coin value: Heads" + "<br>");
// }
// else {
//     document.write("random coin value: Tails" + "<br>");
// }

// //. 6. Write a program that shows a random number between 1 and 100 in your browser.

// var randomNumber = Math.floor( Math.random() * 100) +1;
// document.write("random number between 1 and 100: " + " " + randomNumber + "<br>");

// //. 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms

// var weight = prompt("Please enter your weight in kilograms");
// var num = parseInt(weight);
// document.write("The weight of user is " + num + " " + "kilograms." + "<br>" )

// //. 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

// let x = Math.floor(Math.random() * 10) + 1;
// let y = prompt("Enter your guess");
// if (x===y) {
//     alert("Congratulations!");
// }
// else {
//     alert("Better luck next time");
// }

// //. Chapters. 31-34

// //. 1.  Write a program that displays current date and time in your browser.

// var currentDate = new Date();
// var c = currentDate.toString();
// document.write(c);

// //. 2. Write a program that alerts the current month in words.

// var d = new Date();
// var n = d.getMonth();
// console.log(n);
// var month = ["January", "Fenruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write("Current month: " + month[n])

// //. 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var d = new Date();
// var n = d.getDay();
// console.log(n);
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.write("Today is " + days[n])

// //. 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var currentDate = new Date();
// // currentDate.toString;
// var b = currentDate.toString();
// console.log(b);
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write("It's Work Day")
// }else if(c === "Tue"){
//     document.write("It's Work Day")
// }else if(c === "Wed"){
//     document.write("It's Work Day")
// }else if(c === "Thr"){
//     document.write("It's Work Day")
// }else if(c === "Fri"){
//     document.write("It's Work Day")
// }

// //. 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16 th of the month else shows “Last days of the month”.

// var p = new Date();
// var q = p.getDate();
// console.log(q);

// if (q<=15) {
//     document.write("First fifteen days of month")
// }
// else {
//     document.write("Last fifteen days of month")
// }

// //. 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var currentDate = new Date();
// var b = currentDate.toString();
// var c = currentDate.getTime();
// var d = c/60000;
// document.write("Current Date: " + b + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + c + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + d + "<br>");

// //. 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var a = new Date();
// var b = a.toString();
// console.log(b);
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

// //. 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var laterDate = new Date ("December 31, 2020");
// console.log(laterDate)

// //. 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1 st Ramadan?

// // var ramazaan = new Date ("April 25, 2020");
// // var currentDate = new Date();

// // var msRamazaan = ramazaan.getTime();
// // var msCurrentDate = currentDate.getTime();

// // var msDiff = msCurrentDate-msRamazaan;

// // var dDiff = msDiff /(1000*60*60*24);

// // dDiff = Math.floor(dDiff);

// // console.log(dDiff);

// var msDiff = new Date().getTime() - new Date("April 25, 2020").getTime();
// var dDiff = Math.floor(msDiff/(1000*60*60*24));
// alert("Number of days since 1st Ramazaan is: " + dDiff);

// //. 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var msDiff = new Date("December 05, 2015").getTime() - new Date("January 01, 2015").getTime();
// var sDiff = msDiff / 1000;
// document.write("On reference date Sat Dec 05 2015 22:50:16 GMT + 0500(PKT), " + sDiff + " " + "seconds had passed since beinning of 2015" + "<br>");

// //. 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,18);
// // var date1 = new Date();
// var setHour = a.setHours(c+1);
// document.write("current date: " + a + "<br>");
// document.write("1 hour ago, it was " + b + "<br>")

// //. 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var a = new Date();
// var b = a.toString();
// var c = b.slice(11,15);
// var setYear = a.setFullYear(c-100);
// document.write("current date: " + b + "<br>");
// document.write("100 years back, it was " + a + "<br>")

// //. 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var a = new Date();
// var b = a.toString();
// var c = b.slice(11,15);
// // console.log(c)
// var age = +prompt("Please Enter Your Age");
// var birthYear = c - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear + "<br>")

// //. 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// var a = new Date();
// var b = a.toString();
// var c = b.slice(4,7);
// var customer = "Omar";
// var units = 410;
// var charges = 16;
// var netAmount = units*charges;
// var LPS = 350;
// var grossAmount = netAmount+LPS;

// document.write("<h2>K-Electric Bill</h2>" + "<br>");
// document.write("Customer Name: " + customer +"<br>");
// document.write("Month: " + c + "<br>");
// document.write("Number of units: " + units + "<br>");
// document.write("Charges per unit" + charges + "<br><br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late Payment Surcharge: " + LPS + "<br>");
// document.write("Gross Amount Payable: " + grossAmount + "<br>");  

// //. Ch. 35-38.

// //.1. Write a function that displays current date & time in your browser.

// function currentDate() {
//     var now = new Date();
//     document.write(now);
// }
// currentDate();

// //. 2. Write a function that takes first & last name and then it greets the user using his full name.

// function greeting() {
//     var fName = prompt("Enter your first name");
//     var lName = prompt("Enter your last name");
//     document.write("Assalam-o-Alaikum, " + fName + " " + lName + "<br>");
// }
// greeting();

// //. 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum() {
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     alert (num1+num2);
// }
// sum();

// //. 4. Calculator
// //. Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function Calculator() {
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     var operator = prompt("Enter one of these operators: + - / * % ")
//     if (operator === "+" ) {
//         document.write("The desired result is: " + (num1 + num2) + "<br>");
//     }
//     else if (operator === "-" ) {
//         document.write("The desired result is: " + (num1 - num2) + "<br>");
//     }
//     else if (operator === "/" ) {
//         document.write("The desired result is: " + (num1 / num2) + "<br>");
//     }
//     else if (operator === "*" ) {
//         document.write("The desired result is: " + (num1 * num2) + "<br>");
//     }
//     else if (operator === "%" ) {
//         document.write("The desired result is: " + (num1 % num2) + "<br>");
//     }
//     else {
//         document.write("Please enter the correct format");
//     }
// }
// Calculator();

// //. 5. Write a function that squares its argument.

// function sq() {
//     var num = +prompt("Enter a number");
//     var square = Math.pow(num, 2) ;
//     alert("The square of your number is: " + square);
// }
// sq();

// //. 6. Write a function that computes factorial of a number.


// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = +prompt("Enter any No.");
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

// //. 7. Write a function that take start and end number as inputs & display counting in your browser.

// var start = +prompt("Enter the starting no.");
// var end = +prompt("Enter the ending no.");

// function counting() {
//     for(i=start;i<=end;i++){
//         document.write(i)
//     }
// }
// counting();

// //. 8. Write a nested function that computes hypotenuse of aright angle triangle.Hypotenuse 2 = Base 2 + Perpendicular 2
// // Take base and perpendicular as inputs.
// // Outer function : calculateHypotenuse()
// // Inner function: calculateSquare()

// // var base = +prompt("Enter the base of the triangle");
// // var perpendicular = +prompt("Enter the perpendicular of the triangle");
// // var hypotenuse;
// // var square;
// // function calculateHypotenuse() {
// //     let hypotenuse = Math.sqrt(square)
// //     function calculateSquare(){
// //         let square = Math.pow(base,2) + Math.pow(base, 2)
// //     }
// // }
// // console.log(calculateHypotenuse());


// var base = +prompt("Enter the base of the triangle");
// var perp = +prompt("Enter the perpendicular of the triangle");
// function hypo(base, perp){
//     return Math.sqrt(Math.pow(base, 2) + Math.pow(perp, 2));
//   }  
// console.log(hypo(base,perp));

//. 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// //i. 
// function area(){
//     return (3*4)
// }
// document.write("the area of the rectangle is" + area(3,4));

// //.ii.
// var width = +prompt("Enter the width of the rectangle");
// var height = +prompt("Enter the height of the rectangle");

// function area() {
//     return (width* height)
// }
// document.write("The area of the rectangle is " + area());

// //. 10. Write a JavaScript function that checks whether a passed string is palindrome or not?

// // Write a JavaScript function that checks whether a passed string is palindrome or not? 

// function check_Palindrome(str_entry){
//     // Change the string into lower case and remove  all non-alphanumeric characters
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//     // Check if the length of the string is even or odd 
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//     // If the length of the string is 1 then it becomes a palindrome
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//     // If the length of the string is odd ignore middle character
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//     // Loop through to check the first character to the last character and then move next
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
//     check_Palindrome('nurses run');
//     check_Palindrome('fox');
    
// //. 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

// //. 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

// //.13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('w3resource.com', 'r'));

// //. 14. The Geometrizer
// // Create 2 functions that calculate properties of a circle, using the definitions here. Create a function called calcCircumference:
// // Pass the radius to the function. Calculate the circumference based on the radius, and output"The circumference is NN".
// // Create a function called calcArea:Pass the radius to the function. Calculate the area based on the radius, and output "The areais NN".
// // Circumference of circle = 2πr
// // Area of circle πr 2

// var radius = +prompt("Enter the radius of the circle");

// function calcCircumference(){
//     return (Math.PI*2*radius)
// }

// function calcArea(){
//     return(Math.PI * Math.pow(radius,2))
// }

// document.write("The circumference is " + calcCircumference() + "<br>")
// document.write("The area is " + calcArea() + "<br>")

//. Chapters. 38-42. FUNCTIONS,SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS

// //1. Write a custom function power ( a, b ), to calculate the value of a raised to b.


// function power(a, b) {
// 	var result = 1;
// 	if(b == undefined)
// 		b = 2;
// 	for(var i=1; i<=b; i++) {
// 		result = result * a;
// 	}
// 	return result;
// }

// console.log(power(4,4));

// //.2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

// //.3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// // area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2

// // var a = prompt("Enter side 1 of the triangle");
// // var b = prompt("Enter side 2 of the triangle");
// // var c = prompt("Enter side 3 of the triangle");
// // var s = (a+b+c)/2
// // var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));


// // // function area() {
// // //     return (Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// // }

// const side1 = 5; 
// const side2 = 6; 
// const side3 = 7; 
// const perimeter = (side1 + side2 + side3)/2;
// const area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// console.log(area);

// document.write("The area of the triangle is " + area);

// //. 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction
// // and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

// var marks1 = +prompt("Enter marks in subject1");
// var marks2 = +prompt("Enter marks in subject2");
// var marks3 = +prompt("Enter marks in subject3");


// function main() {
//     return("The average of student 1 is " + avg() + " " + "and the percentage of student1 is " + per() + "<br>");
   
// }

// function avg() {
//     return ((marks1+marks2+marks3)/3)
// }

// function per() {
//     return(avg()+"%");
// }

// document.write(main())

// //. 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

// function inde() {
//     return("The index of ")
// }

// //. 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// var string = "heelloo world";
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//                 j--;           // take the removed character into account
//                 secondLoop--;  // string is now one character shorter
//             }

//         }
//     }
// }

// string.character();
// console.log(string);


//. 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.
// For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.


// //. 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

// var distance = +prompt("Enter the distance between two cities in km");

// function meters() {
//     return(distance*1000)
// }
// function feet() {
//     return(meters()*3.28084)
// }
// function inches() {
//     return(feet()*12)
// }
// function centimeters() {
//     return(inches() * 2.54)
// }

// console.log(meters());
// console.log(feet());
// console.log(inches());
// console.log(centimeters());

// //. 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

// var totalHours = +prompt("Please enter the working hours of the employee");
// if (totalHours>40){
//     var overtimeHours = totalHours-40
// }
// else{
//     var overtimeHours = 0
// }
// function overtimePay(){
//         return("The overtime pay is " +"Rs."+ overtimeHours*12 )
// }
// console.log(overtimePay())

// //. 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes
// // of each denomination the cashier will have to give to the withdrawer.

// var totalAmount = +prompt("Please enter the amount in hundreds");

// if (totalAmount<1000 && totalAmount>=100 ){
//     var hundreds = Math.floor(totalAmount/100)

// }
// else {
//     alert("Please enter correct format")
// }

// var balance = (totalAmount-(hundreds*100))

// if (balance>=50) {
//     var fifty = 1
// }
// else{
//     var fifty = 0
// }

// var balanceTens = balance - fifty*50;

// if (balanceTens>=10) {
//     var ten = balanceTens/10
// }
// else{
//     var ten = 0
// }

// document.write("You will have" + hundreds + " " + "hundred notes" + " " + fifty + "fifty notes" + " " + ten+ " " + "ten notes." + "<br>" )

//. Chapters. 43-48. EVENTS.


//.1. index.html
//.2. 

 
    function expandLoris() {
        
        var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which
        make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of
        distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several
        adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.
        Slow lorises have a toxic bite, a rare trait among mammals.";
        
        document.getElementById("slowLoris").innerHTML = expandedParagraph;
         }













































































































































































































