
function sayMyName(){
    console.log("H");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("T");
}


//sayMyName()

// function addTwoNumbers(number1, number2){

//      console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

//     let result = number1 + number2
//     return result
      return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a  username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hurat"))
//console.log(loginUserMessage("hurat"))

function calculateCartPrice(val1, val2, ...num1){
   return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
     username: "hurat",
     price: 199
}

function handleObject(anyobject){
    console.log(`Userename is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));