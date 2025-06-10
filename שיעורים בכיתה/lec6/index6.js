function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let notresult = false
let isresult = true
const arrynumbers = [9,7,56,79,83,1,2,47,93]
const result = arrynumbers.map(isPrime)
console.log(result)



const numbers = [111111111,1,2,3,46,78,9,9,99999999]
let a = Math.max(...numbers);
console.log(a)


function shuffleArray(nums, n) {
   const arry1 = [1, 2, 3, 4, 5, 6]
   const arry2 =[] ;
   for(let i= 0; i<arry1.length;i++ ){
      arry2 [i] = arry2[i]
      
   }

}

console.assert(JSON.stringify(shuffleArray([1, 2, 3, 4, 5, 6], 3)) == JSON.stringify([1, 2, 3, 4, 5, 6]), "test failed on [1,2,3,4,5,6]")
console.assert(JSON.stringify(shuffleArray([1, 2, 3, 4, 4, 3, 2, 1], 4)) == JSON.stringify([1, 4, 2, 3, 3, 2, 4, 1]), "test failed on [1, 2, 3, 4, 4, 3, 2, 1]")
console.assert(JSON.stringify(shuffleArray([1, 1, 2, 2], 2)) == JSON.stringify([1, 2, 1, 2]), "test failed on [1, 1, 2, 2]")