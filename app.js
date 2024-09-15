 // Chapter 9
    // 1.
    var city = prompt("enter your city name")

    if(city === "Karachi"){
        alert("welcome to the city of lights");
    }
    else{
        alert("better luck next time")
    }
    
    //  2.
    var gender = prompt("enter your gender(male/female):")
    
    if(gender === "male"){
        console.log("Good morning sir");
    }
    else if(gender === "female"){
        console.log("Good morning maam");
    }
    
    else{console.log("invalid input. please enter male or female")    
    }
    
    
    // 3.
    
    let signalColor = prompt("Enter the color of the traffic signal (Red/Yellow/Green):");
    
    // Check the color and display the appropriate message
    if (signalColor === "red") {
        console.log("Must stop");
    }
     else if (signalColor === "yellow") {
        console.log("Ready to move");
    }
     else if  (signalColor === "green") {
        console.log("Move now");
    }
     else {
        console.log("Incorrect input..");
        
    }
    
    
    // 4.
    
    var remainingFuel = +prompt("Enter remaining fuel in litres")
    
    if(remainingFuel < 0.25){
        alert("please refill the fuel in your car")
    }
    else {
        alert("you have sufficient fuel")
    }
    
    // 5.
    
    var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");}
     var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
     var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
     var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
    if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    
    // 6.
    
    let totalMarks = +prompt("Enter total marks for all subjects:");
    let marksSubject1 = +prompt("Enter obtained marks for Subject 1:");
    let marksSubject2 = +prompt("Enter obtained marks for Subject 2:");
    let marksSubject3 = +prompt("Enter obtained marks for Subject 3:");
    
    // Calculate total obtained marks and percentage
    let totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;
    let percentage = (totalObtainedMarks / totalMarks) * 100;
    
    // Compute the grade and remarks based on percentage
    let grade, remarks;
    
    if (percentage >= 80) {
        grade = "A+";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else if (percentage >= 50) {
        grade = "C";
        remarks = "Satisfactory";
    } else {
        grade = "Fail";
        remarks = "Sorry, you need to work harder";
    }
    
    // Display the results in the browser
    document.write("<h2>MARKSHEET:</h2>");
    document.write("<table border='1' style='border-collapse: collapse; width: 50%; text-align: left;'>");
    document.write("<tr><th>Total Marks</th><td>" + totalMarks + "</td></tr>");
    document.write("<tr><th>Marks Obtained</th><td>" + totalObtainedMarks + "</td></tr>");
    document.write("<tr><th>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
    document.write("<tr><th>Grade</th><td>" + grade + "</td></tr>");
    document.write("<tr><th>Remarks</th><td>" + remarks + "</td></tr>");
    document.write("</table>");
    
    // 7.
    
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    
    var userGuess = +prompt("Guess the secret number (1-10):");
    
    if (userGuess === secretNumber) {
      alert("Bingo! Correct answer");
    } 
    else if (userGuess + 1 === secretNumber) {
      alert("Close enough to the correct answer");
    } 
    else {
      alert("Try again! The correct answer was " + secretNumber);
    }
    
    // 8.
    
    var num = +prompt("Enter a number: ");
    
    if (num % 3 === 0) {
    console.log("${num} is divisible by 3.");
    } else {
    console.log("${num} is not divisible by 3.");
    }
    
    // 9.
    var num = +prompt("Enter a number:");
    
    if (num % 2 === 0) {
      alert(num + " is an even number");
    } else {
      alert(num + " is an odd number");
    }
    
    // 10.
    
    var temperature = +prompt("Enter temperature:");
    
    if (temperature > 40) {
      alert("It is too hot outside.");
    } else if (temperature > 30) {
      alert("The Weather today is Normal.");
    } else if (temperature > 20) {
      alert("Today’s Weather is cool.");
    } else if (temperature > 10) {
      alert("OMG! Today’s weather is so Cool.");
    } else {
      alert("Invalid input. Please enter a valid temperature.");
    }
    
    
    // 10.
    var num1 = +prompt("Enter the first number: ");
    var num2 = +prompt("Enter the second number: ");
    var operation = prompt("Enter the operation (+, -, *, /, %): ");
    
    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "*") {
      result = num1 * num2;
    } else if (operation === "/") {
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        alert("Cannot divide by zero!");
      }
    } else if (operation === "%") {
      if (num2 !== 0) {
        result = num1 % num2;
      } else {
        alert("Cannot divide by zero!");
      }
    } else {
      alert("Invalid operation!");
    }
    
    // Display result
    if (result !== undefined) {
      console.log(`Result: ${num1} ${operation} ${num2} = ${result}`);
    }