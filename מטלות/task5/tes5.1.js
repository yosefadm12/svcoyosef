//Q1
function isValidIDFormat(id) {
    return /^[0-9]{9}$/.test(id);
}
//Q2
function isPrime(num){
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}
//Q3
function addSpaceBeforeUppercase(str){
    let result = "";
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            result += " ";
        }
        result += char;
    }
    return result.trim(); 
}
//Q4
function countOccurrences(longStr, shortStr) {
    if (shortStr.length === 0) return 0;
    
    let count = 0;
    let index = longStr.indexOf(shortStr); 

    while (index !== -1) {
        count++;
        index = longStr.indexOf(shortStr, index + 1); 
    }

    return count;
}

//Q6
function chekString(){
    const str = "test"
    if(str.includes("*")){
      console.log(str.replace("*",""))
    }
    else if(str.includes("@")){
        console.log('*'+str+'*')
        console.log('*'.concat(str).concat('*'))
    }else if(str.includes("$")){
        console.log("new dolar")
    }
}