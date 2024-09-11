
 // 1. Short form of x = x + 1
 var x = 0;
 x++;
 console.log(x); // 1
 
 // 2. Reduce x to 99
 var x = 100;
 x = x - 1;
 console.log(x); // 99
 
 // 3. Post-increment
 var x = 50;
 var y = x++;
 console.log(y); // 50
 
 // 4. Pre-decrement
 var y = 50;
 var z = --y;
 console.log(z); // 49
 
 // 5. Decrement and assign
 var num = 50;
 var newNum = num--;
 console.log(newNum); // 50
 console.log(num); // 49
 
 // 6. Increment and assign
 var varToIncrement = 50;
 var origVar = varToIncrement++;
 console.log(origVar); // 50
 console.log(varToIncrement); // 51
 
 // 7. Assign, increment, and display
 var num = 50;
 num++;
 alert(num); // 51
 
 
 
 // CHAPTER 7 
 
 // 1. Calculate num
 var calculatedNum = 2 + (2 * 6);
 console.log(calculatedNum); // 14
 
 // 2. Calculate num
 var calculatedNum = (2 + 2) * 6;
 console.log(calculatedNum); // 24
 
 // 3. Calculate num
 var calculatedNum = (2 + 2) * (4 + 2);
 console.log(calculatedNum); // 36
 
 
 // 4. Calculate num
 var calculatedNum = ((2 + 2) * 4) + 2;
 console.log(calculatedNum); // 18
 
 // 5. Calculate cost
 var cost = 2 + 2 * (4 + 10);
 console.log(cost); // 28, no, 56!
 
 // 6. Calculate units
 var units = (2 + 2 * 4 + 10) / 3;
 console.log(units); // 20/3, no, 20!
 
 // 7. Calculate pressure
 var pressure = (4 / 2) * 4;
 console.log(pressure); // 8, no, 5!
 
 
 
 // chapter 8
 
 // 1. Concatenate strings
 var num = "2" + "2";
 console.log(num); // "22"
 
 // 2. Concatenate strings
 var message = "Hello," + "Dolly";
 alert(message); // "Hello,Dolly"
 
 // 3. Concatenate string and number
 alert("33" + 3); // "333"
 
 // 4. Concatenate strings
 alert("Pakistan " + "Zindabad"); // "Pakistan Zindabad"
 
 // 5. Concatenate string and number
 var greeting = "Hello, " + 1;
 console.log(greeting); // "Hello, 1"
 
 // 6. Concatenate strings
 var firstName = "Alishba";
 var lastName = "Shahid";
 var fullName = firstName + " " + lastName;
 console.log(fullName); // "Alishba Shahid"
 
 
 // CHAPTER 9
 
 
 // 1. Prompt for first name
 var firstName = prompt("Enter first name");
 
 // 2. Prompt for country with default
 var country = prompt("Country?", "China");
 
 // 3. Corrected prompt statement
 var yourName = prompt("Enter Your Name");
 
 // 4. Prompt with message and default
 var userResponse = prompt("What is your favorite color?", "Blue");
 
 // 5. Prompt with variables
 var message = "What is your age?";
 var defaultResponse = "20";
 var userAge = prompt(message, defaultResponse);
 
 // 6. Prompt and alert
 var userResponse = prompt("What is your favorite food?", "Pizza");
 alert("Your favorite food is: " + userResponse);
 
 // chapter 6 
 
 //1. Initialize variable a
 var a = 10;
 
 // Display initial value of a
 document.write("The value of a is: " + a + "<br>");
 
 // Pre-increment a and display
 document.write("The value of ++a is: " + (++a) + "<br>");
 document.write("Now the value of a is: " + a + "<br>");
 
 // Divide a by 2 and display
 document.write("The value of a++ is: " + (a++) + "<br>");
 document.write("Now the value of a is: " + a + "<br>");
 
 // Pre-decrement a and display
 document.write("The value of --a is: " + (--a) + "<br>");
 document.write("Now the value of a is: " + a + "<br>");
 
 // Post-decrement a and display
 document.write("The value of a-- is: " + (a--) + "<br>");
 document.write("Now the value of a is: " + a + "<br>");
 
 
 //2. result after ececution
 
 var a = 2, b = 1;
 var result = --a - --b + ++b + b--;
 console.log("a:", a); // 1
 console.log("b:", b); // 0
 console.log("result:", result); // 2
 
 
 // 3. Greeting Program
 
 var name = prompt("Enter your name");
 alert("Hello, " + name + "!");
 
 
 
 
 
 //5. a) Take three subjects name from user
 var subject1 = prompt("Enter first subject name");
 var subject2 = prompt("Enter second subject name");
 var subject3 = prompt("Enter third subject name");
 
 // b) Total marks for each subject
 var totalMarks = 100;
 
 // c) Take obtained marks for first subject from user
 var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1));
 
 // d) Take obtained marks for remaining 2 subjects from user
 var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2));
 var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3));
 
 // e) Calculate total marks and percentage
 var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
 var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
 
 
 
 
 
 
 // Prompt the user to enter obtained marks for each subject
 var obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"), 10);
 var obtainedMarksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"), 10);
 var obtainedMarksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"), 10);
 
 // Calculate total obtained marks and percentage
 var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
 var totalPossibleMarks = totalMarks * 3; 
 var percentage = (totalObtainedMarks / totalPossibleMarks) * 100; 
 
 // Display the results in a table format
 document.write("<h2>Result:</h2>");
 document.write("<table border='1' style='border-collapse: collapse;'>");
 document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
 document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
 document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
 document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
 document.write("<tr><td colspan='2'>Total Obtained Marks</td><td>" + totalObtainedMarks + "</td></tr>");
 document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
 document.write("</table>");