function teststring(){
    
        const str = "test"
        if(str.includes("*")){
          console.log(str.replace("*",""))
        }

}
function calac(a,b){
    return a+b
}
function fizzBuzz(num){
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
fizzBuzz(3)
fizzBuzz(15)
fizzBuzz(26)
fizzBuzz(5)


console.log(calac(7,8))
console.log(window)
 


function fizzBuzz1(lim){
 const lim =  prompt("what is yore gess")
 for(let i = 0 ; i< lim;i++){
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
