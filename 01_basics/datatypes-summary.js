// primitive

// 7 types : String, Number, Boolean, null undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456543576654354356754n


// Reference (Non primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hurat",
    age: 22,
}

const myFunction = function(){
  console.log("hello world");
}

console.log(typeof anotherId);





// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myYoutubename = "huratashrafdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hurat@google.com"

console.log(userOne.email);
console.log(userTwo.email);