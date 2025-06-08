// q3
// פונקציה המקבלת מספר ובודקת אם הוא זוגי או אי זוגי

function checkNumber(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkNumber(4));
console.log(checkNumber(7));





/*q4*/

function colorResponse(color) {
    switch (color) {
        case "red":
            return "Stop";
        case "green":
            return "Go";
        case "yellow":
            return "Wait";
        default:
            return "Unknown color";
    }
}

// דוגמאות לבדיקה
console.log(colorResponse("red"));    // "Stop"
console.log(colorResponse("green"));  // "Go"
console.log(colorResponse("yellow")); // "Wait"
console.log(colorResponse("blue"));   // "Unknown color"






/*q5*/
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}   
printNumbers(); // מדפיס את המספרים מ-1 עד 10







/*q6*/ 
function printNames(names){
    for(const name of names){
            console.log(name + " - " + name.length);
    }
}
// דוגמאות לבדיקה
printNames(["Alice", "Bob", "Charlie"]); // מדפיס את השמות עם האורך שלהם   




/*q7*/
function combineArrays(arr1, arr2) {
    let combined = [];
    for (let i = 0; i < arr1.length; i++) {
        combined.push(arr1[i]);
        
    }
    for (let i = 0; i < arr2.length; i++) {
    combined.push(arr2[i]);
  }
    return combined;
}   
// דוגמאות לבדיקה
console.log(combineArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6] 
console.log(combineArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]




// q8
const square = num => num * num;
// דוגמה:
console.log(square(5)); // 25


// q9

const person = {
  name: "יוסף",
  age: 25,
  isStudent: true
};
function describePerson(p) {
  if (p.isStudent) {
    return "Student: " + p.name;
  } else {
    return "Not a student: " + p.name;
  }
}
// דוגמה:
console.log(describePerson(person)); // "Student: יוסף"










// q10  
function maxNumber(arr){
   
    if(arr.length === 0) {
        return null; // אם המערך ריק, מחזירים null
    }   
    if(arr.length === 1) {
        return arr[0]; // אם יש רק מספר אחד, מחזירים אותו
        
    }
     let temp=arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > temp ) {
            temp = arr[i]; // אם המספר הנוכחי גדול מהמספר הזמני, מעדכנים אותו
        }
    }return temp; // מחזירים את המספר הגדול ביותר   
}