// //chapter1-Alerts
// //1. Greeting
// alert("Hello Customer!");
// //2.Paswd Error
// alert("Error! Please enter a valid password.");
// //3.Welcome
// alert("Welcome to JS Land...\nHappy Coding!");
// //4.Sequence
// alert("Welcome to JS Land..")
// alert("Happy Coding!\n\nPrevent this page from creating additional dialogs")
// //5.Console box
// console.log("Hello..I can run JS through my web browser's console");

// //chapter2.variableForStrings
// //1.username
// var username = "Omar";
// //2. myName
// var myName = "Omar Mohammad Warraich";
// //3. script message
// var message = "Hello World";
// alert(message)
// //4. script biodata
// var student = "Jhone Doe";
// var age = 15;
// var qualification = "Certified Mobile Application Development";
// alert(student);
// alert(age + " years old" )
// alert(qualification)
// //5. Script one JS variable
// let str = "PIZZA";{
//     alert(str + "\n" + str.slice(0,-1) + "\n" + str.slice(0,-2) + "\n" + str.slice(0,-3) + "\n" + str.slice(0,-4));
    
// }
// //6.email
// var email = "earthling986@gmail.com"
// alert("My email address is" + " " + email)

// //7.book
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book" + " " + book)

// //8. HTML content
// document.write("Yah! I can write HTML content through JavaScript");

// //9. string in a variable
// var str ="---------------------------------&&iioii&&---------------------------------";
// alert(str)


// //Ch3. VariablesForNumbers

// //1. Age Variable
// var age = 38;
// alert("I am" + " " + age + " " + "years old.")

// //2. Track Website Visitor
// var visits = 15;
// alert("You have visted this site" + " " + visits + " " + "times.")

// //3. BirthYear Variable
// var birthYear = 1982;
// document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declared variable is number");

//4. www.xyzClothing.com
// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)".bold();
// var quantity = "5".bold();
// document.write(visitorName.bold() + " " + "ordered" + " " + quantity + " " + productTitle + " " + "on XYZ Clothing store." );

// //Ch4. VARIABLE NAMES: LEGAL & ILLEGAL
// //1. Declare 3 variables in 1 statement.
// var name = "John Vick",
//     age = 42,
//     height = 6;
// //2. 5 legal and illegal variables
// //Legal
// var name = "John Vick",
//     age = 42,
//     height = 6,
//     color = "white",
//     profession = "Assassin";
// //Illegal
// var 1name = 42,
//     birth year = 1978,
//     skin color = "white",
//     educational-qualification = "Graduate",
//     id# = "111";

// //3. Browser Display.
// document.write("<h1>Rules for naming JS variables</h1>" + "<br>");
// document.write("Variable names can only contain letters, numbers, $ and _ . For example: $my_1stVariable" + "<br>");
// document.write("Variables must begin with a letter, $ or _ . For example : $name, _name or name" + "<br>")
// document.write("Variable names are case sensitive." + "<br>")
// document.write("Variable names should not be JS keywords." + "<br>")

// //Ch5. MATH EXPRESSIONS
// //1. ADDING TWO NUMBERS
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var sum = firstNumber + secondNumber;
// document.write("The sum of" + " " + firstNumber + " " + "and" + " " + secondNumber + " " + "is" + " " + sum + "<br>" ) 

//2. Repeat Task 1.
//Subtraction
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var difference = firstNumber - secondNumber;
// document.write("The difference of" + " " + firstNumber + " " + "and" + " " + secondNumber + " " + "is" + " " + difference + "<br>")

// //Multiplication
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var product = firstNumber * secondNumber;
// document.write("The product of" + " " + firstNumber + " " + "and" + " " + secondNumber + " " + "is" + " " + product + "<br>" ) 

// //Division
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var division = firstNumber / secondNumber;
// document.write("The division of" + " " + firstNumber + " " + "and" + " " + secondNumber + " " + "is" + " " + division + "<br>")

// //Modulus
// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var modulus = firstNumber % secondNumber;
// document.write("The Modulus of" + " " + firstNumber + " " + "and" + " " + secondNumber + " " + "is" + " " + modulus + "<br>") 

// //3. Do the following using JS Mathematic Expressions
// var num; //a. Declare a variable.
// document.write("Value after variable declaration is undefined" + "<br>") //b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// num = 5; //c. Initialize the variable with some number.
// document.write("Initial Value:" + " " + num + "<br>")//d. Show the value of variable in your browser like “Initial value: 5”.
// num = ++num; //e. Increment the variable.
// document.write("Value after increment is:" + " " + num + "<br>") //f. Show the value of variable in your browser like “Value after increment is: 6”.
// num = num + 7; //g. Add 7 to the variable.
// document.write("Value after addition is:" + " " + num + "<br>") //h. Show the value of variable in your browser like “Value after addition is: 13”.
// num = --num; //i. Decrement the variable.
// document.write("Value after decrement is:" + " " + num + "<br>") //j. Show the value of variable in your browser like “Value after decrement is: 12”.
// num = num % 3; //k. Show the remainder after dividing the variable’s value by 3.
// document.write("The remainder is :" + " " + num + "<br>") //l. Output : “The remainder is : 0”.

// //4. 4. Cost of one movie ticket is 600 PKR. Write a script to
// // store ticket price in a variable & calculate the cost of buying 5
// // ticketsto a movie. 
// var ticketPrice = 600,
//     quantity = 5;
// document.write("Total cost to buy" + " " + quantity + " " + "tickets to a movie is" + " " + ticketPrice * quantity + " " + "PKR" + "<br>")

// //5. 5. Write a script to display multiplication table of any number in your browser.

// for (var i=1; i<=10; i++){
//     document.write("786" + "x" + i + "=" + 786*i + "<br>")
// }

// //6. 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// // a. Store a Celsius temperature into a variable.
// // b. Convert it to Fahrenheit & output “NN o C is NN o F”.
// // c. Now store a Fahrenheit temperature into a variable.
// // d. Convert it to Celsius & output “NN o F is NN o C”.

// var celsiusTemperature = 35,
//     faranheitTemperature =  (celsiusTemperature * 9/5) + 32;
//     document.write(celsiusTemperature +"<sup>o</sup>" + "C" + " " + "is" + " " + faranheitTemperature + "<sup>o</sup>" + "F" + "<br>")
// var faranheitTemperature = 65,
//     celsiusTemperature = (faranheitTemperature - 32) * 5/9;
//     document.write(faranheitTemperature +"<sup>o</sup>" + "F" + " " + "is" + " " + celsiusTemperature + "<sup>o</sup>" + "C" + "<br>")

// //7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// // a. Price of item 1
// // b. Price of item 2
// // c. Ordered quantity of item 1
// // d. Ordered Quantity of item 2
// // e. Shipping charges
// // Compute the total cost & show the receipt in your browser.

// var item1Price = 500,
//     item1Quantity = 5,
//     item2Price = 5000,
//     item2Quantity = 2,
//     shippingCharges = 500;
//     document.write("<h1>Shopping Cart</h1><br><br>")
//     document.write("Price of item 1 is" + " " + item1Price + "<br>")
//     document.write("Price of item 2 is" + " " + item2Price + "<br>")
// document.write("Ordered Quantity of item 1 is" + " " + item1Quantity + "<br>")
// document.write("Ordered Quantity of item 2 is" + " " + item2Quantity + "<br>")
// document.write("Shipping charges" + " " + shippingCharges + "<br><br>")
// document.write("Total cost of your order is " + " " + item1Price*item1Quantity + item2Price*item2Quantity + shippingCharges)

// //8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.

// var totalMarks = 1100,
//     marksObtained = 693;
// document.write("<h1>Marks Sheet</h1><br><br><br>")
// document.write("Total marks:" + " " + "=" + " " + totalMarks + "<br>")
// document.write("Marks obtained:" + " " + "=" + " " + marksObtained + "<br>")
// document.write("Percentage:" + " " + marksObtained/totalMarks*100 + "%" + "<br>")   

// //9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.
// // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// var dollars = 10,
//     dollarExchange = 104.80,
//     saudiRiyals = 25,
//     riyalExchange = 28;
//     document.write("<h1>Currency in PKR</h1><br><br><br>")
//     document.write("Total Currency in PKR: " + ((dollars*dollarExchange) + (saudiRiyals*riyalExchange)) + "<br>")

// //10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// // a. Add 5
// // b. Multiply by 10
// // c. Divide the result by 2
// // Perform all calculations in a single expression

// var num = 10;
// document.write("The final result is: " + ((num + 5)*10)/2 + "<br>")

// //11. The Age Calculator: Forgot how old someone is? Calculate it!
// // a. Store the current year in a variable.
// // b. Store their birth year in a variable.
// // c. Calculate their 2 possible ages based on the stored values.

// var currentYear = 2020,
//     birthYear = 1982;
//     document.write("<h1>Age Calculator</h1><br><br>")
//     document.write("Current Year: " + currentYear +"<br>")
//     document.write("Birth Year: " + birthYear +"<br>")
//     document.write("Your Age is: " + (currentYear - birthYear) + "<br>")

// //12. The Geometrizer: Calculate properties of a circle.
// // a. Store a radius into a variable.
// // b. Calculate the circumference based on the radius, and output “The circumference is NN”.(Hint : Circumference of a circle = 2 π r , π = 3.142)
// // Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142)

// var radius = 10,
//     pi = 3.142;
// document.write("<h1>The Geometrizer</h1><br><br>")
// document.write("The Radius of the Circle is: " + radius + "<br>")
// document.write("The Circumference of the Circle is: " + radius  * 2 * pi + "<br>")
// document.write("The Radius of the Circle is: " + radius * radius * pi + "<br>")

// //13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// // a. Store your favorite snack into a variable
// // b. Store your current age into a variable.
// // c. Store a maximum age into a variable.
// // d. Store an estimated amount per day (as a number).
// // e. Calculate how many would you eat total for the rest of your life.
// // Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// var favouriteSnack = "CornFlakes",
//     currentAge = 38,
//     maximumAge = 65,
//     snacksPerDay = 1;

// document.write("<h1>The Lifetime Supply Calculator</h1><br><br>")
// document.write("Favourite Snack: " + favouriteSnack + "<br>")
// document.write("Current Age: " + currentAge + "<br>")
// document.write("Estimated Maximum Age: " + maximumAge + "<br>")
// document.write("Amount of Snacks per day: " + snacksPerDay + "<br>")
// document.write("You will need " + ((maximumAge-currentAge) * 365 * snacksPerDay) + " " + favouriteSnack + " " + "to last you until the ripe age of " + maximumAge + "<br>")

// //CH6-9-MATH EXPRESSIONS
// //1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// var num = 10;
// document.write("Result:"+ "<br>")
// document.write("The value of num is: " + num + "<br>")
// document.write("-----------------------------------------------" + "<br><br>")
// document.write("The value of ++num is:"  + ++num + "<br>")
// document.write("Now the value of num is:" + num + "<br><br>")
// document.write("The value of num++ is:" + num++ + "<br>")
// document.write("Now the value of num is:" + num + "<br><br>")
// document.write("The value of --num is:" + --num + "<br>")
// document.write("Now the value of num is:" + num + "<br><br>")
// document.write("The value of num-- is:" + num-- + "<br>")
// document.write("Now the value of num is:" + num + "<br><br>")

// //2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// //Explain the output at each stage:
// //--a; //predecrement a=>1
// //--a - --b; //preincrement a=>0 - 
// //--a - --b + ++b;
// //--a - --b + ++b + b--;

// // document.write("a is 1<br>b is 1<br>result is "  +  result + "<br>")

// //3. input name from user and greet the user.

// var name = prompt("Enter your name");
// alert("Welcome " + name)

// //5. Write a program to take input a number from user & display it’s multiplication table on your browser.
// //  If user does not enter a new number, multiplication table of 5 should be displayed by default.

// var num = +prompt("Enter any number")
   
// for (var i=1; i<=10; i++){
//     document.write(num + "x" + i + "=" + num*i + "<br>");
//     // if (num==num) {
//     //     for (var j =1; j<=10; j++) {
//     //         document.write(5 + "x" + j + "=" + 5*j +"<br>";
//     //     }
//     // }
// }



// // 6. Take
// // a) Take three subjects name from user and store them in 3
// // different variables.
// // b) Total marks for each subject is 100, store it in another
// //  variable.
// // c) Take obtained marks for first subject from user and
// // stored it in different variable.
// // d) Take obtained marks for remaining 2 subjects from user
// // and store them in variables.
// // e) Now calculate total marks and percentage and show the
// // result in browser like this.(Hint: user table)

// var subject1 = prompt("Enter Subject No.1");
// var totalMarksSubject1 = prompt("Enter total marks in Subject 1");
// var subject2 = prompt("Enter Subject No.2");
// var totalMarksSubject2 = prompt("Enter total marks in Subject 2");
// var subject3 = prompt("Enter Subject No.3");
// var totalMarksSubject3 = prompt("Enter total marks in Subject 3");
// var marksSubject1 = prompt("Enter your marks in subject 1");
// var marksSubject2 = prompt("Enter your marks in subject 2");
// var marksSubject3 = prompt("Enter your marks in subject 3");
// document.write("<h3> Subject    Total    Marks   Obtained    Marks    Percentage</h3>" +"<br>")
// document.write(subject1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + totalMarksSubject1 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSubject1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSubject1 /totalMarksSubject1 * 100 +"%" + "<br>")
// document.write(subject2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + totalMarksSubject2 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSubject2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSubject2 /totalMarksSubject2 * 100 +"%" + "<br>")
// document.write(subject3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + totalMarksSubject3 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSubject3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSubject3 /totalMarksSubject3 * 100 +"%" + "<br>")

// // Ch# 9-11 : USER INPUT & CONDITIONAL STATEMENT

// // 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var x = prompt("What is the name of your city");

// if (x === "Karachi") {
//     alert("Welcome to the city of lights");
// }

// //2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("What is your gender?");

// if (gender === "male") {
//     alert("Good Morning Sir");
// }

// if (gender === "female") {
//     alert("Good Morning Madam");
// }

// // 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
 
// var roadTrafficSignalColor1 = prompt("Enter Road Traffic Signal Color 1");
// var roadTrafficSignalColor2 = prompt("Enter Road Traffic Signal Color 2");
// var roadTrafficSignalColor3 = prompt("Enter Road Traffic Signal Color 3");

// document.write("<b>Signal Color</b>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +  "<b>Message</b>" + "<br>")
// document.write("<b>Red<b>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" +  "Must Stop" + "<br>")
// document.write("<b>Yellow<b>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +  "Ready to move" + "<br>")
// document.write("<b4>Green<b>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +  "Move now" + "<br>")

// // 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var currentFuel = prompt("Enter remaining fuel in your car");

// if (currentFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// // 5. Run this script, & check whether alert message would bedisplayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }  // true because it is pre increment.

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } // b++ !== 83 because b it is post increment.

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// } // condition 2 is true & condition 4 is true. codition 1 is false because post increment. condtion 3 false because preincrement.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } //The cost equals

// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
//     } // alerts only True because only true condition set no parameters defined.


// if("car" < "cat"){
//     alert("car is smaller than cat");
//     } //alerts


// // 6. MARKS SHEET

// var marksSubject1 = +prompt("Enter your marks in subject 1");
// var totalMarksSubject1 = +prompt("Enter total marks in Subject 1");
// var marksSubject2 = +prompt("Enter your marks in subject 2");
// var totalMarksSubject2 = +prompt("Enter total marks in Subject 2");
// var marksSubject3 = +prompt("Enter your marks in subject 3");
// var totalMarksSubject3 = +prompt("Enter total marks in Subject 3");
// var marksObtained = marksSubject1 + marksSubject2 + marksSubject3;
// var totalMarks = totalMarksSubject1 + totalMarksSubject2 + totalMarksSubject3;
// var percentage = marksObtained/totalMarks * 100
// var grade = " ";
// switch(
//        (percentage >= 80 && percentage <= 100):
//        (percentage >= 70 && percentage <= 79):
//        (percentage >= 60 && percentage <= 69):
//        (percentage <= 59):
//       )
       
//          {
//              case 1: grade = "A-one"; break;
//              case 2: grade = "A"; break;
//              case 3: grade = "B"; break;
//              case 4: grade = "Fail"; break;

//          }
        

// document.write("<h1>Marks Sheet</h1>" +"<br><br><br><br>")
// document.write("Total Marks:" + "&nbsp;&nbsp; " + totalMarks + "<br>")
// document.write("Marks Obtained:" + "&nbsp;&nbsp; " + marksObtained + "<br>")
// document.write("Percentage:" + " &nbsp;&nbsp;" + percentage + "<br>")
// // document.write("Grade" + " " + grade + <br>)
// // // document.write("Remarks" + " " + remarks + <br>)

// //. 7. GUESS GAME


// // random value generated 

// var y = Math.floor(Math.random() * 10 + 1); 
      
// // counting the number of guesses 
// // made for correct Guess 
// var guess = prompt("Enter a number ranging from 1 to 10"); 
  
// document.getElementById("guess").onclick = function(){ 
  
// // number guessed by user      
// var x = document.getElementById("guessField").value; 

// if(x == y) 
// {     
//    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//            + guess + " GUESS "); 
// } 
// else if(x > y) /* if guessed number is greater 
//                than actual number*/ 
// {     
//    guess++; 
//    alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
// } 
// else
// { 
//    guess++; 
//    alert("OOPS SORRY!! TRY A GREATER NUMBER") 
// } 
// } 

// // 8. 
// var num = +prompt("Enter any Number: ");
// if (num % 3 === 0) {
//    alert(num + " " +"is divisble by 3" );
// }
// else { 
//    alert(num + " " + "is not divsible by 3");   
// }

// // 9. Even or Odd.

// var num = +prompt("Enter any number:");
// if (num%2===0) {
//    alert(num + " " + "is an even number!");
// }
// else {
//    alert(num + " " + "is an odd number!");
// }

// // 10. 
// var temperature = +prompt("What is the temperature today?");

// if (temperature > 40) {
//    alert("It is too hot outside.");
// }
// else if (temperature > 30) {
//    alert("The Weather today is Normal;.")
// }
// else if (temperature > 20) {
//    alert("Today's Weather is cool.");
// }
// else if (temperature > 10) {
//    alert("OMG!Today's Weather  is so Cool.");
// }

// // 11. Operators. 

// var firstNumber = +prompt("Enter the First Number:");
// var secondNumber = +prompt("Enter the Second Number:");
// var Operation = prompt("Choose one of the Following Operators: +,-,*,/,% in inverted commas");

// if (Operation ===  "+") {
//    alert(firstNumber + " " + "plus" + " " + secondNumber + " " + "equals" + " " +(firstNumber+secondNumber));
// }
// else if (Operation ===  "-") {
//    alert(firstNumber + " " + "minus" + " " + secondNumber + " " + "equals" + " " +f(irstNumber-secondNumber));
// }
// else if (Operation ===  "*") {
//    alert(firstNumber + " " + "multiplied by" + " " + secondNumber + " " + "equals" + " " +(firstNumber*secondNumber));
// }
// else if (Operation ===  "/") {
//    alert(firstNumber + " " + "divided by" + " " + secondNumber + " " + "equals" + " " +(firstNumber/secondNumber));
// }
// else if (Operation ===  "%") {
//    alert(firstNumber + " " + "modulus" + " " + secondNumber + " " + "equals" + " " +(firstNumber%secondNumber));
// }
// else {
//    alert("Please choose the Correct Format!");
// }

// // Ch. 12-13. IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS.

// // 1. 

// var s = prompt("Enter any charachter number or string:");
// var n = s.charCodeAt(0);

// if ((n >= 65) && (n <= 90)) {
//    alert("Upper Case");
// }
// else if ((n >= 97) && (n <= 122)) {
//    alert("Upper Case");
// }
// else {
//    alert("it is a number");
// }

// // 2. 
// var int1 = +prompt("Enter the First Integer");
// var int2 = +prompt("Enter the Second Integer");
// if (int1 > int2) {
//    alert(int1);
// }
// else if (int1 < int2) {
//    alert(int2);
// } 
// else {
//    alert("The two integers are equal");
// }

// // 3. 
// var int = +prompt("Enter any Integer");
// if (int > 0) {
//    alert("Positive");
// }
// else if (int < 0) {
//    alert("Negative");
// }
// else {
//    alert("Zero");
// }  

// // 4. 

// function isVowel(argument){

// 	var text;
// 	var argument = argument.toLowerCase();

//     var vowels = (['a', 'e', 'i', 'o', 'u']);

//     for (var i = 0; i <= vowels.length; i++){
//         if (argument != vowels[i]) {
//             continue;
//         }
//         return true;
//     }
//     return false;
// }


// var char = prompt("Enter one aphabetic character ");

// if (isVowel(char)) {
// 	console.log(char + " is a vowel");
// } else {
// 	console.log(char + " is not a vowel");
// }

// // 5.

// var password = "Hackathon";
// var urPassword = prompt("Enter your Password:");
// if (urPassword === "") {
//    alert("Please enter your Password");
// }
// else if (urPassword === password) {
//    alert("Correct!The password you entered matches the original password");
// }
// else {
//    alert("Incorrect password");
// }

// // 6.
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else 
// greeting = "Good evening";
// }
// alert(greeting);

// //. 7.

// var greeting;
// var time = +prompt("Enter the time in 0000 format i.e from 0000 hour to 2400 hour")

// if (time >= 0000 && time < 1200) {
//    greeting = "Good Morning";
// }
// else if (time >=1200 && time < 1700) {
//    greeting = "Good Afternoon";
// }
// else if (time >=1700 && time < 2100) {
//    greeting = "Good Evening";
// }
// else if (time >=2100 && time < 2359) {
//    greeting = "Good Night";
// }
// else {
//    greeting = "Please type in the Correct Foramt";
// }
// alert(greeting);

// // Ch# 14-16. ARRAYS

// // 1. 

// var students = [];

// // 2.

// var students = {firstName:"John", lastName:"Vick", age:42};

// // 3. 

// var students = [];

// students[0] = "Omar";
// students[1] = "Samar";
// students[2] = "Nasr";

// console.log(students);

// // 4. 

// let x = new Array(10,20,30);

// console.log(x);

// // 5. 

// var boolArray = [true,false];
// console.log(boolArray);

// // 6. 

// var fruits = ["Apple", "Banana"];
// var tempString = "Pie,Dumpling,Cider";
// var tempArray = new Array();
// tempArray.push(tempString);
// tempString = "Bread,Republic";
// tempArray.push(tempString);
// var output = {};
// for (var i = 0; i < fruits.length; i++)
// {
//     var members = tempArray[i].split(",");
//     var temp = {};
//     for(var k = 0; k < members.length; k++)
//     {
//         temp[("" + k)] = members[k];
//     }
//     output[("" + fruits[i])] = temp;
// }
// console.log(output);
// //Different ways to access the objects
// console.log(output.Apple);
// console.log(output["Apple"]);
// console.log(output.Banana[0]);
// console.log(output["Banana"]["0"]);

// // 7. 

// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("<h3>Qualifications:</h3>" + "<br>")
// document.write("1)".bold() + " "+ qualification[0].bold() + "<br>");
// document.write("2)".bold() + " "+ qualification[1].bold() + "<br>");
// document.write("3)".bold() + " "+ qualification[2].bold() + "<br>");
// document.write("4)".bold() + " "+ qualification[3].bold() + "<br>");
// document.write("5)".bold() + " "+ qualification[4].bold() + "<br>");
// document.write("6)".bold() + " "+ qualification[5].bold() + "<br>");
// document.write("7)".bold() + " "+ qualification[6].bold() + "<br>");
// // document.write("8)".bold() + " "+ qualification[7].bold() + "<br>");

// // 8. 

// var students = ["Omar", "Samar", "Nasr"];
// var scores = [350, 450, 450];
// document.write("Score of" + " " + students[0] + " "+ "is" + " " + scores[0] + "."+ " "+"Percentage: " + " " + scores[0]/500 * 100+ "<br>")
// document.write("Score of" + " " + students[1] + " "+ "is" + " " + scores[1] + "."+ " "+"Percentage: " + " " + scores[1]/500 * 100+ "<br>")
// document.write("Score of" + " " + students[2] + " "+ "is" + " " + scores[2] + "."+ " "+"Percentage: " + " " + scores[2]/500 * 100+ "<br>")

// // 9.

// var colors = new Array("red", "white", "green")
// document.write(colors + "<br>");
// var add = prompt("what color do u want to add to the beginnning of the array?");
// colors.unshift(add);
// document.write(colors +"<br>");
// var add1 = prompt("what color do u want to add to the end of the array?");
// colors.push(add1);
// document.write(colors +"<br>");
// colors.unshift("Green","White");
// document.write(colors +"<br>");
// colors.shift();
// document.write(colors +"<br>");
// colors.pop();
// document.write(colors +"<br>");
// var addIndex = +prompt("Enter the index no u want to add color:");
// var addColor = prompt("Enter the color u want to add at the selected index");
// colors.splice(addIndex,0,addColor)
// document.write(colors +"<br>");
// var delIndex = +prompt("Enter the index no u want to delete color:");
// var delColor = prompt("Enter the no of colors u want to delete from the selected index");
// colors.splice(delIndex,delColor)
// document.write(colors +"<br>");

// // 10. 

// var studentScores = new Array(10).fill(null);
// studentScores = studentScores.map(() => (Math.floor(Math.random() * 200) + 1));
// var orderedScores = studentScores.sort();
// document.write("Scores of Students :" + " " + studentScores + "<br>")

// function sortStudentScores(a, b) {
//    return a > b ? 1 : b > a ? -1 : 0;
//  }

// studentScores.sort(sortStudentScores);

// document.write("Ordered Scores of Students :" + " " + orderedScores + "<br>")

// // 11. 

// let cities = new Array("Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar");
// var selectedCities = cities.slice(1,4)
// document.write("Cities list:" + "<br>")
// document.write(cities + "<br><br>")
// document.write("Selected cities list:" + "<br>")
// document.write(selectedCities + "<br><br>")

// // 12.

// let arr = ["This","is","my","cat"];
// let newArr = arr.join(" ");
// document.write("<h3>Array:</h3>" + "<br>")
// document.write(arr)
// document.write("<h3>String:</h3>" + "<br>")

// document.write(newArr.bold())

// // 13.

// let devices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("Devices:" + "<br>")
// document.write(devices + "<br><br>")
// document.write("Out:" + "<br>")
// document.write(devices[0] + "<br>")
// document.write("Out:" + "<br>")
// document.write(devices[1] + "<br>")
// document.write("Out:" + "<br>")
// document.write(devices[2] + "<br>")
// document.write("Out:" + "<br>")
// document.write(devices[3] + "<br>")

// // 14.

// let devices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("Devices:" + "<br>")
// document.write(devices + "<br><br>")
// document.write("Out:" + "<br>")
// document.write(devices[3] + "<br>")
// document.write("Out:" + "<br>")
// document.write(devices[2] + "<br>")
// document.write("Out:" + "<br>")
// document.write(devices[1] + "<br>")
// document.write("Out:" + "<br>")
// document.write(devices[0] + "<br>")

// // 15. 

// function mobile(){
//     var myArray = new Array("Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier");
//     for(i=0; i<myArray.length; i++) {  
//         document.write('<option value="' + myArray[i] +'">' + myArray[i] + '</option>');
//     }
// }

// // Ch# 17-20. ARRAYS AND LOOP.

// // 1.

// // let multiDimensionalArray = [
// //     [0,1,2,3],
// //     [1,0,1,2],
// //     [2,1,0,1]
// // ];

// // document.write(multiDimensionalArray)


// // let myArray = int(3);
// // myArray[0] = new int[0,1,2,3];
// // myArray[1] = new int[1,0,1,2];
// // myArray[2] = new int[2,1,0,1];
// // document.write(myArray);

// // public var multiDimensionalArray: int[,] = new int[4,4];
 
// //  multiDimensionalArray[0,0] = 1;
// //  multiDimensionalArray[0,1] = 1;
// //  multiDimensionalArray[0,2] = 0;
// //  multiDimensionalArray[0,3] = 1;
// //  multiDimensionalArray[1,0] = 0;
// //  ....
// //  multiDimensionalArray[3,3] = 0;

// //  document.write(multiDimensionalArray)

// // var aName = [[1,2,3],['a','b','c']];
// // console.log(aName);

// // var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// // var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// // var fullNames = [];
// // for (var i = 0; i < firstNames.length; i++) {
// // for (var j = 0; j < lastNames.length; j++) {
// // fullNames.push(firstNames[i] + lastNames[j]);
// // document.write(fullNames);

// // }
// // }
// // var arr = [];
// // arr[0] = [0,1,2,3];
// // arr[0][1] = [1,0,1,2];
// // arr[0][0][0] = [2,1,0,1];
// // document.write(arr)

// // var arr = new Array(3);
// // for (var i = 0; i < arr.length; ++i) {
// //   arr[i] = new Array(3);
// // }

// // console.log(arr);


// // var aName = new Array();
// // aName[0] = [1,2,3];
// // aName[1] = ['a','b','c'];
// // console.log(aName);

// // var arr=[[1,2],[3,4],[5,6]];
// // document.write(arr);

// var arr = [];
// arr.push([]);
// arr.push([]);
// console.log(arr);

// const matrix = new Array(3).fill(0).map(() => new Array(5));

// console.log(matrix);

// var emptyArray = [[]];
// console.log(emptyArray);

// // 2. 

// var arr = new Array([]);

// arr[0][0] = '0  1  2  3'
// arr[0][1] = '1  0  1  2'
// arr[0][2] = '2  1  0  1'


// document.write(arr[0][0] + "<br>");
// document.write(arr[0][1] + "<br>");
// document.write(arr[0][2] + "<br>");

// // 3. 

// for (i=1; i<=10; i++){
//     document.write(i+"<br>");
// }

// // 4. 

// var num = +prompt("Enter a number to show its multiplication table");
// var len = +prompt("Enter length of the multiplication table ");

// document.write("Multiplication table of " + num + "<br> ");
// document.write("Length " + len + "<br><br>");

// for (var i=1; i<=len; i++){
//     document.write(num + "x" + i + "=" + num*i + "<br>")
// }

// // 5. 

// var fruits = new Array("apple", "banana", "mango", "orange", "strawberry");
// var len = fruits.length;

// for (var i=0;i<len; i++) {
//     document.write(fruits[i] + "<br>");
// }

// for (var i=0;i<len; i++) {
//     document.write("Elements at index" + " " + i + " " +"is" + " " + fruits[i] + "<br>");
// }

// // 6. 

// document.write("<h3>Counting:</h3>" + "<br>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",");
// }
// document.write("<br>")

// document.write("<h3>Reverse Counting:</h3>" + "<br>")
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",");
// }
// document.write("<br>")

// document.write("<h3>Even:</h3>" + "<br>")
// for (var i = 0; i <= 20; i++) {
//     if (i === 0 || i%2 ===0){
//     document.write(i + ",");
// }
// }
// document.write("<br>")

// document.write("<h3>Odd:</h3>" + "<br>")
// for (var i = 0; i <= 20; i++) {
//     if (i%2 ===1){
//     document.write(i + ",");
// }
// }
// document.write("<br>")

// document.write("<h3>Series:</h3>" + "<br>")
// for (var i = 1; i <= 20; i++) {
//     if (i%2 ===0){
//     document.write(i + "k,");
// }
// }
// document.write("<br>")

// // 7. 

// // let A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]

// // var search = prompt("Welcome to ABC Bakery, What do you want to order sir/madam?");
// // var len = A.length;

// // for (var i=0;i<len; i++) {
// //         document.write("Elements at index" + " " + i + " " +"is" + " " + fruits[i] + "<br>");
// //     }


//     // var data = [{
//     //     id: 'A1',
//     //     name: 'Minstrels'
//     //   }, {
//     //     id: 'A2',
//     //     name: 'Bounty'
//     //   }, {
//     //     id: 3,
//     //     name: 'Crunchie'
//     //   }, {
//     //     id: 4,
//     //     name: 'bar'
//     //   }];
      
//     //   var rl = require('readline')
      
//     //   var prompts = rl.createInterface(process.stdin, process.stdout);
      
//     //   prompts.question('Which Product do you want to purchase? ',
//     //     function(Answer1) {
//     //       //missing code goes here in order to return Minstrels if the user 
//     //       //types 'A1' etc..
//     //     }
//     //   )

//     //   var item = data.find(i => ("" + i.id) === Answer1);

//     //   console.log(item ? item.name : 'No such food');

//     // const array = [
//     //     { id: 3, name: 'Central Microscopy', fiscalYear: 2018 },
//     //     { id: 5, name: 'Crystallography Facility', fiscalYear: 2018 },
//     //     { id: 3, name: 'Central Microscopy', fiscalYear: 2017 },
//     //     { id: 5, name: 'Crystallography Facility', fiscalYear: 2017 }
//     //   ];
//     // const result = [];
//     // const map = new Map();
//     // for (const item of array) {
//     //     if(!map.has(item.id)){
//     //         map.set(item.id, true);    // set any value to Map
//     //         result.push({
//     //             id: item.id,
//     //             name: item.name
//     //         });
//     //     }
//     // }
//     // console.log(result)

//     // const A = new Array(5);
//     // Array[0] = "cake";
//     // Array[1] = "apple pie";
//     // Array[2] = "cookie";
//     // Array[3] = "chips";
//     // Array[4] = "patties";
    
//     // const index = [];
//     // const map = prompt("Welcome to the ABC Bakery, What do you want to order Sir/Madam?");
//     // for (const A of array) {
//     //     if(!map.has(A[])){
//     //         map.set(A[], true);    // set any value to Map
//     //         result.push({
//     //             A[]
//     //         });
//     //     }
//     // }
//     // console.log(result)

//     A = [
//         "cake",
//         "apple pie",
//         "cookie",
//         "chips",
//         "patties"
//     ]

//     var found = prompt("Welcome to the ABC Bakery, What do you want to order Sir/Madam?");
// for (var i = 0; i < A.length; i++) {
//     if (A[i] !== found) {
//         document.write("We are sorry, " + found + " "+ "is <b>not available</b> in our bakery" );
//         break;
//       }
//     else if (A[i] === found){
//     document.write(found + " " + "is <b>available</b> at index " + i );
//     break;
//   }
// }

// // 8. 

// var arr = [24, 53, 78, 91, 12];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// document.write("Array items:" + " " + arr + "<br>")
// document.write("The largest number is " + largest)

// // 9. 

// var arr = [24, 53, 78, 91, 12];
// var smallest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (smallest > arr[i] ) {
//         smallest = arr[i];
//     }
// }
// document.write("Array items:" + " " + arr + "<br>")
// document.write("The smallest number is " + smallest)

// // 10. 

// var sum = [];

// for(var i = 1; i <= 100; i++){
//     if (i % 5 === 0){
//         sum.push(i);
//     }
//   }
// document.write(sum)
