// 11.3.1 GETTING STARTED WITH JAVASCRIPT FUNCTIONS
// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var today = d3.select("tbody");

// 11.3.2 SIMPLE JAVASCRIPT FUNCTIONS
console.log(addition(4,5));

// Functions can call other functions
function doubleAddition(c,d) {
    var total = addition(c,d) * 2;
    return total;
}

//11.3.3 FROM SIMPLE FUNCTIONS TO ARROW FUNCTIONS
// Original addition function
function addition(a, b) {
    return a + b;
  }
//Converted to an arrow function
addition = (a,b) => a+b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
// Converted to an arrow function (I think?)
=> addition(c,d) * 2;

//11.4.1 USE A JAVASCRIPT FOR LOOP
let friends = ["Sarah", "Greg", "Cindy", "Jeff"]; //type this into console on google chrome

// Creating a for loop to iterate through each name in JavaScript
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]); //type this to console too but result -> "underfined"
    }
 }

 // 11.4.2 PRACTICE USING FOR LOOPS IN JAVASCRIPT
 var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 for (var i = 0; i < vegetables.length; i++) {
     console.log("I love " + vegetables[i]);
 }

 for (var i =0; i < 5; i++) {
     console.log("I am" + i);
 }

 // 11.5.1 INTRODUCTION TO DYNAMIC TABLES
 function buildTable(data) {
    tbody.html("");
  }

  // 11.5.2 Add forEach to Your Table
  function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }