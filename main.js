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
}
if (randomNumber === 1){
    eightBall = "It is decidedly so";
}
if (randomNumber === 2){
    eightBall = "Reply hazy try again";
}
if (randomNumber === 3){
    eightBall = "Cannot predict now";
}
if (randomNumber === 4){
    eightBall = "Do not count on it";
}
if (randomNumber === 5){
    eightBall = "My sources say no";
}
if (randomNumber === 6){
    eightBall = "Outlook not so good";
}
if(randomNumber === 7){
    eightBall = "Signs point to yes";
}

//Step 8
console.log(`The Magic 8 Ball reveals its answer: ${eightBall}`)
