var studentNamesLiteral = [];
console.log(studentNamesLiteral );

var studentNamesObject = new Array();
console.log(studentNamesObject);

var stringsArray = ["Ahmed", "Ali", "Sara"];
console.log(stringsArray );

var numbersArray = [10, 20, 30, 40];
console.log(numbersArray);

var booleanArray = [true, false, true];
console.log(booleanArray);

var mixedArray = ["Ahmed", 25, true];
console.log(mixedArray);

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Qualifications:</h2>");
for (var i = 0; i < qualifications.length; i++) {
  document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

var students = ["Ahmed", "Ali", "Sara"];
var scores = [420, 380, 450];
var totalMarks = 500;

document.write("<h2>Student Scores:</h2>");
for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  document.write("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}

var colors = ["Red", "Green", "Blue"];
document.write("<h2>Colors:</h2>" + colors + "<br>");
var addBegin = prompt("Enter a color to add at beginning:");
colors.unshift(addBegin);
document.write("After adding at beginning: " + colors + "<br>");

var addEnd = prompt("Enter a color to add at end:");
colors.push(addEnd);
document.write("After adding at end: " + colors + "<br>");

colors.unshift("Purple", "Orange");
document.write("After adding two colors at beginning: " + colors + "<br>");

colors.shift();
document.write("After deleting first color: " + colors + "<br>");

colors.pop();
document.write("After deleting last color: " + colors + "<br>");

var indexAdd = +prompt("Enter index to add color:");
var colorName = prompt("Enter color name:");
colors.splice(indexAdd, 0, colorName);
document.write("After adding color at index: " + colors + "<br>");

var indexDelete = +prompt("Enter index to delete color(s):");
var deleteCount = +prompt("How many colors to delete:");
colors.splice(indexDelete, deleteCount);
document.write("After deleting colors: " + colors + "<br>");

var studentScores = [320, 230, 480, 120];
studentScores.sort(function(a, b) { return a - b; });
var studentScoresz = [320, 230, 480, 120]
document.write("<h2>Sorted Scores:</h2>" + "Scores of students:" + studentScoresz + "<br>");
document.write("Ordered Scores of students:" + studentScores);

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
console.log(cities);
console.log(selectedCities);

var arr = ["This","is","my","cat"];
console.log(arr.join(","))

var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");

document.write("<h2>FIFO:</h2>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");

var lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");

document.write("<h2>LIFO:</h2>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h2>Phone Manufacturers</h2>");
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");

document.write("<center>Open console log--></center>");