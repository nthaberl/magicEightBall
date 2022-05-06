//Step 1
let userName = window.prompt("Enter your name: ");
    // alert("Your name is " + userName);

//Step 2
userName? console.log(`Hello, ${userName}`) : console.log("Hello!")

//Step 3
let userQuestion = window.prompt("What would you liked to ask the Magic 8 Ball? ")

//Step 4
console.log(`${userName} asked: ${userQuestion}`);

//Step 5
let randomNumber = Math.floor(Math.random() * 8) //random number between 0 - 7

//Step 6
let eightBall = "";

//Step 7
//not totally necessary to reassign eightball to output these answers but will do it to be thorough~
if (randomNumber === 0){
    eightBall = "It is certain";
    console.log("It is certain")
}
else if (randomNumber === 1){
    eightBall = "It is certain";
    console.log("It is decidedly so")
}
else if (randomNumber === 2){
    eightBall = "It is certain";
    console.log("Reply hazy try again")
}
else if (randomNumber === 3){
    eightBall = "It is certain";
    console.log("Cannot predict now")
}
else if (randomNumber === 4){
    eightBall = "It is certain";
    console.log("Do not count on it")
}
else if (randomNumber === 5){
    eightBall = "It is certain";
    console.log("My sources say no")
}
else if (randomNumber === 6){
    eightBall = "It is certain";
    console.log("Outlook not so good")
}
else if(randomNumber === 7){
    eightBall = "It is certain";
    console.log("Signs point to yes")
}

//Step 8
console.log(`The Magic 8 Ball reveals its answer: ${eightBall}`)
