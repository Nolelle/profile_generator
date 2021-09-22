const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! ",
];

let answers = [];
let i = 0;
const recursiveRLCall = (question) => {
  rl.question(question, (answer) => {
    if (i === questions.length) {
      console.log(
        `Hi all I\'m ${answers[0]}. I like to do ${answers[1]} in my free time.\nI listen to ${answers[2]} while I do that.\nMy favorite meal of the day is ${answers[3]}, and I like to eat ${answers[4]} for that meal.\nMy favorite sport is ${answers[5]}.\nIf I had to describe a superpower for myself I would say ${answers[6]}`
      );
      return rl.close();
    }
    answers.push(answer);
    // console.log(answers);
    i++;
    console.log(i);
    recursiveRLCall(questions[i]);
  });
};

//Intial call of function
recursiveRLCall(questions[i]);
