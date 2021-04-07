// from data.js
var tableData = data;

// YOUR CODE HERE!
// define and connect table body
var tableBody = d3.select('tbody');

//create function for the table body
function buildTable(ufo){
  tableBody.html("");
  ufo.forEach((row) => {
    var tRow = tableBody.append('tr');
    Object.values(row).forEach((value) => {
      let cell = tRow.append("td");
        cell.text(value);
    })
  });
}

// create function for filter
function runEnter() {
  var selectDate = d3.select('#datetime').property('value');
  let data = tableData;
  if (selectDate){
    data = data.filter(d => d.datetime === selectDate);
  }
  buildTable(data);
}

var button = d3.select("#filter-btn");
button.on("click", runEnter);

buildTable(tableData);
