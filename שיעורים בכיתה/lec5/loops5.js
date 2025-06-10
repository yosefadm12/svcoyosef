function fizzBuzz(limit){
  
    for(let num=0;num<=limit;num++){
        if(num%3==0&&num%5==0){
            console.log("fizzbuzz")
          
        }else if(num%5==0){
            console.log("buzz")
            
          }else if(num%3==0){
            console.log("fizz")
            
          }else{
            console.log(num)
          }
    }
  
   
  }
  fizzBuzz(120)
  
function gameR(){
  const random = 5//Math.floor(Math.random() * 50);
  let suc = false
  for(let i = 0 ; i< 5;i++) {
    const guss= prompt("what is yore gess")
    if(guss==random){
       suc = true
      break
    }
  }
  return suc
  

}
function StartGame(){
 const sucses = gameR() 
 if(sucses){
  const answer = confirm("god game you wont try again")
  if(answer){gameR()}else{alert("coll")}
 }else{

  const answer = confirm("losser..  you wont try again")
  if(answer){gameR()}else{alert("boo")}
 }
}

/*
// let id = prompt("enter a valid id: ")
// while (true) {
//     if (isNaN(id)) {
//         id = prompt("enter a valid id: ")
//     } else {
//         break
//     }
// }

// guessing game
// choose a random number between 0 and 50
// the user has 5 guesses for the number
// if he succeeds, ask if he wants to play again, if yes, restart game
// if he fails,  ask if he wants to play again, if yes, restart game
// if no, display an alert ("boo, loser...")
// ONLY USE FUNCTIONS AND LOOPS

function guesses() {
    const random = Math.round(Math.random() * 50)
    let success = false

    for (let index = 0; index < 5; index++) {
        const guess = prompt("what is your guess: ")
        if (guess == random) {
            success = true
            break
        }
    }

    return success
}


function startGame() {
    let success = guesses()
    let play = true
    let message = "cool"
    let answer = true

    while (play) {

        if (success == true) {
            answer = confirm("good game, do you want to try AGAIN?")
        } else {
            message = "you loser, booo..."
            answer = confirm("you loser, do you want to try AGAIN?")
        }

        if (answer == true) {
            success = guesses()
        } else {
            play = false
            alert(message)
        }

    }
}

// function fizzBuzz(limit) {

//     for (let num = 0; num <= limit; num++) {
//         if (num % 3 == 0 && num % 5 == 0) {
//             console.log("fizzbuzz")
//         } else if (num % 5 == 0) {
//             console.log("buzz")
//         } else if (num % 3 == 0) {
//             console.log("fizz")
//         } else {
//             console.log(num)
//         }
//     }

// }

// fizzBuzz(120)

*/









  