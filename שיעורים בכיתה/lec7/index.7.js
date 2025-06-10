// JSON - javascript object notation 
// Js object has key value pairs

// Creating an object
let user = {};
const users = []

// Assigning properties
user.firstName = "Ben"
user.lastName = "Spector"
user.id = 1234
user.dob = "0000"
user.address = {
    city: "Kadima",
    zip: "0987654",
    number: "74746"
}

users.push(user)

// Assigning properties
user = {}
user.firstName = "Maayan"
user.lastName = "Spector"
user.id = 12322
user.dob = "0111"
user.address = {
    city: "Kadima",
    zip: "0987654",
    number: "74746"
}

users.push(user)

// finding props in an object
user.firstName // 1 

let user2 = {
    address1: {
        city: "netanya"
    },
    address2: {
        city: "hadera"
    },
    address3: {
        city: "tel-aviv"
    }
}

const addressNum = prompt("which address would you like to edit?")

if (typeof user2["address" + addressNum] == "object") {
    user2["address" + addressNum].city = "Ashkelon"
} else {
    user2["address" + addressNum] = { city: "" }
    user2["address" + addressNum].city = "Ashkelon"
}

console.log(user2)


addtothearray({
   let user6 : []
    firstName: 
    lastName: 
    id: 
    dob: 
    address: {
        city: 
        zip: 
        number: 
    }
})






