/*
  Magic 8 Ball
  Name:
  Period:
*/

function askEightBall() {
  let userName = document.getElementById('nameInput').value;
  let userQuestion = document.getElementById('questionInput').value;

  console.log( userName, userQuestion);

  // Show the Question on side
  document.getElementById('questionOut').textContent = "You asked: "+ userQuestion;
  //Greet the user!
  let greeting 

  if (userName === ""){
    greeting = "Hello Mystery Person!"
  } else {
    greeting = `Hello, ${userName}!`
  }

  document.getElementById('greeting').textContent = greeting

  //check the question

  if (userQuestion === ""){
    document.getElementById('questionOut').textContent = "please ask a question";
    document.getElementById('answer').textContent = "8";
    document.getElementById('answerType').innerHTML = '';
    return;
  }

//get a random number

let randomNumber = Math.floor(Math.random() * 8);

//Get the Magic 8balls answer
//Show the 8ball answer type badge

let eightBall = '';
let badgeClass = '';
let badgeText = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

if (randomNumber === 0 || randomNumber === 1 || randomNumber === 7) {} else if (randomNumber === 2 || randomNumber === 3) {} else {
}
}

