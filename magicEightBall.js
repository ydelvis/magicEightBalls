/* This Project generates predefined random responses to a user question.
    Practicing Decisions in Programming using 'Switch cases' and 'if-else if -else'
                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/


let userName ='Elvis';    //Name of User
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');  // Greetings

let userQuestion = 'Will Ghana qualify for the 2022 World cup?';   // user's quesiton
console.log(userQuestion);  // displaying user's question

let randomNumber = Math.floor(Math.random() * 8);  // generating a random number between 0 and 7

let eightBall = '';   // Magic variable to store random responses

switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  
  case 1:
    eightBall = 'It is decidedly so';
    break;
  
  case 2:
    eightBall = 'Reply hazy, try again';
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
    eightBall = 'Outlook not so good'
    break;
  
   case 7:
    eightBall = 'Signs point to yes';
    break;
  
  default:
    eightBall = 'Undefined!';
    break
}

console.log(eightBall);  // log response to console.




/* 
---------------------------------------------------------------------------------------- 
Implenting the Project using 'if-else if-else'
-------------------------------------------------------------

let userName ='Elvis';    //Name of User
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');  // Greetings

let userQuestion = 'Will Ghana qualify for the 2022 World cup?';   // user's quesiton
console.log(userQuestion);  // displaying user's question

let randomNumber = Math.floor(Math.random() * 8);  // generating a random number between 0 and 7

let eightBall = '';   // Eightball Variable to store random responses

if (randomNumber === 0){
  eightBall = 'It is certain';
}

else if (randomNumber ===1){
  eightBall = 'It is decidedly so';
}

else if(randomNumber ===2){
  eightBall = 'Reply hazy, try again';
}

else if (randomNumber ===3){
  eightBall = 'Cannot predict now';
}

else if (randomNumber === 4){
  eightBall = 'Do not count on it';
}

else if (randomNumber === 5){
  eightBall = 'My sources say no';
}

else if (randomNumber === 6){
  eightBall = 'Outlook not so good';
}

else if (randomNumber === 7){
  eightBall = 'Signs point to yes';
}

else {
  eightBall = 'Undefined!';
}

console.log(eightBall);  // display to console


End of code. */

