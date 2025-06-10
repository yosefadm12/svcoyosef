//Q1
const http = require('http');
const port = 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('I remember how to do it'); 
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
//Q2
function getEvenNumbers(arr) {
    return arr.filter(function(num) {
      return num % 2 === 0;
    });
  }
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
//Q3
function getPassedStudents(students) {
    let passedNames = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].grade >= 60) {
        passedNames.push(students[i].name);
      }
    }
    return passedNames;
  }
    const students = [
    { name: "Dan", grade: 85 },
    { name: "Lee", grade: 54 },
    { name: "Noa", grade: 92 }
  ];
  console.log(getPassedStudents(students)); // ["Dan", "Noa"]
//Q4
function toUpperCaseArray(arr) {
    return arr.map(function(str) {
      return str.toUpperCase();
    });
  }
  console.log(toUpperCaseArray(["apple", "banana"])); // ["APPLE", "BANANA"]
//Q5
function checkNumber(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  console.log(checkNumber(5));   // "Positive"
  console.log(checkNumber(-3));  // "Negative"
  console.log(checkNumber(0));   // "Zero"
//Q6    
function delayMessage(message, delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log(message); 
        resolve();            
      }, delay);
    });
  }
  delayMessage("Hello after 2 seconds", 2000);
  
  