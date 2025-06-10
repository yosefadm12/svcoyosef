let random = Math.random()*7
let random1 =Math.round(random)
// random=Math.round(random)
function bet(){
    let ges = prompt (" what is your ges :")
    console.log(random1)
    if ( ges==random1 ) {
        alert("you win")
        return true
    }
    else if(ges>random1){
        alert("to bige, loser")
        return false
    }
    else{
        alert("to lowo, loser")
        return false
    } 
    
}
function StartGame(){
     if(bet()){
        return
     }
     if(bet()){
        return
     }
     if(bet()){
        return
     }
     if(bet()){
        return
     }
     if(bet()){
        return
     }
}
