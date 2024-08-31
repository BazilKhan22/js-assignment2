var num1 = 20; 
var num2 = 4;  

// Perform arithmetic operations
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modulus = num1 % num2;

// Display the results using document.write
document.write("<h1>Arithmetic Operations Results</h1>");
document.write("<p>The result of adding " + num1 + " and " + num2 + " is " + sum + ".</p>");
document.write("<p>The result of subtracting " + num2 + " from " + num1 + " is " + difference + ".</p>");
document.write("<p>The result of multiplying " + num1 + " and " + num2 + " is " + product + ".</p>");
document.write("<p>The result of dividing " + num1 + " by " + num2 + " is " + quotient + ".</p>");
document.write("<p>The result of the modulus of " + num1 + " by " + num2 + " is " + modulus + ".</p>");

// 3.
var variable;

document.write("<p>Value after variable declaration is: " + variable + "</p>");

variable = 5;


document.write("<p>Initial value: " + variable + "</p>");

variable++;

document.write("<p>Value after increment is: " + variable + "</p>");

variable += 7;

document.write("<p>Value after addition is: " + variable + "</p>");

variable--;

document.write("<p>Value after decrement is: " + variable + "</p>");

var remainder = variable % 3;

document.write("<p>The remainder is: " + remainder + "</p>");


// 4.
   
 var ticketPrice = 600; // Cost of one ticket in PKR
 var numberOfTickets = 5;
 var totalCost = ticketPrice * numberOfTickets;

    document.write("<h1>Movie Ticket Cost Calculation</h1>");
     document.write("<p>Cost of one movie ticket: " + ticketPrice + " PKR</p>");
     document.write("<p>Number of tickets to buy: " + numberOfTickets + "</p>");
     document.write("<p>Total cost for " + numberOfTickets + " tickets: " + totalCost + " PKR</p>")

// 5.

var number = 4; 

document.write("<h1>Multiplication Table of " + number + "</h1>");

        for (var i = 1; i <= 10; i++) {
            var result = number * i;
            document.write("<p>" + number + " x " + i + " = " + result + "</p>");
        }

// 6.

var celsius = 25; // Store Celsius temperature
var fahrenheit = (celsius * 9/5) + 32; // Convert Celsius to Fahrenheit
document.write("<p>" + celsius + "°C is " + fahrenheit + "°F</p>");

var fahrenheitTemp = 77; // Store Fahrenheit temperature
var celsiusTemp = (fahrenheitTemp - 32) * 5/9; // Convert Fahrenheit to Celsius
document.write("<p>" + fahrenheitTemp + "°F is " + celsiusTemp.toFixed(2) + "°C</p>");

// 7.

var priceItem1 = 150; // Price of item 1
var priceItem2 = 200; // Price of item 2
var quantityItem1 = 3; // Ordered quantity of item 1
var quantityItem2 = 2; // Ordered quantity of item 2
var shippingCharges = 50; // Shipping charges

// Compute the total cost
var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;
var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

// Show the receipt in the browser
document.write("<h1>Receipt</h1>");
document.write("<p>Price of item 1: " + priceItem1 + " PKR</p>");
document.write("<p>Quantity of item 1: " + quantityItem1 + "</p>");
document.write("<p>Total cost for item 1: " + totalCostItem1 + " PKR</p>");
document.write("<p>Price of item 2: " + priceItem2 + " PKR</p>");
document.write("<p>Quantity of item 2: " + quantityItem2 + "</p>");
document.write("<p>Total cost for item 2: " + totalCostItem2 + " PKR</p>");
document.write("<p>Shipping charges: " + shippingCharges + " PKR</p>");
document.write("<p><b>Total cost: " + totalCost + " PKR</b></p>");

// 8.
var totalMarks = 500; // Total marks
        var marksObtained = 400; // Marks obtained

        // Compute the percentage
        var percentage = (marksObtained / totalMarks) * 100;

        document.write("<h1>Student Marks</h1>");
        document.write("<p>Total Marks: " + totalMarks + "</p>");
        document.write("<p>Marks Obtained: " + marksObtained + "</p>");
        document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

// 9.


// 10.
var initialNumber = 8; 

        // Perform all calculations in a single expression
        var result = ((initialNumber + 5) * 10) / 2;
        document.write("<h1>Arithmetic Operations Result</h1>");
        document.write("<p>Initial number: " + initialNumber + "</p>");
        document.write("<p>Result after adding 5, multiplying by 10, and dividing by 2: " + result + "</p>");

// 11.
var currentYear = 2024; 
var birthYear = 2003; 


var ageThisYear = currentYear - birthYear;
var ageLastYear = ageThisYear - 1;

document.write("<h1>Age Calculator</h1>");
document.write("<p>They are either " + ageLastYear + " or " + ageThisYear + " years old.</p>");

// 12.
var radius = 5; 

// Define the value of π
var pi = 3.142;

// Calculate the circumference of the circle
var circumference = 2 * pi * radius;

// Calculate the area of the circle
var area = pi * radius * radius;

// Output the results to the screen
document.write("<h1>Circle Properties</h1>");
document.write("<p>The circumference is " + circumference.toFixed(2) + "</p>");
document.write("<p>The area is " + area.toFixed(2) + "</p>")

