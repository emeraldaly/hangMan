var prompt = require('prompt');
var Word = require('./word.js');

prompt.start();

var Game = {
  wordBank: ["Taj Mahal", "Machu Picchu", "Colosseum", "Petra", "Great Wall", "Chichen Itza", "Christ Redeemer", "Great Pyramids", "Colossus of Rhodes", "Hanging Gardens of Babylong", "Lighthouse of Alexandria", "Mausoleum at Halicarnassus", "Statue of Zeus at Olympia", "Temple of Artemis at Ephesus"]
  guessesRemaining: 10;
  currentWrd: null;
}

startGame = function(wrd){
  this.currentWrd = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
  this.currentWrd.getLets();
  this.keepPromptingUser();

  console.log(currentWrd);
},

keepPromptingUser = function(){
var self = this;

prompt.get(['guessLetter'], function (err, result){
console.log("The Letter or Space You Guessed is" + result.guessLetter);

var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

if (findHowManyOfUserGuess === 0){
console.log("You guess wrong :(")
self.guessesRemaining --;
}else{
  console.log("You guessed right!");


  if (self.currentWrd.didWeFindTheWord() === true){
  console.log("You Won!");
  return 1;
  }else{

    console.log ("Guesses remaining" + self.guessesRemaining);
    console.log(self.currentWrd.wordRender());
  }
}

if(self.guessesRemaining>0 && self.currentWrd.found === false){
  self.keepPromptingUser();
}else if(self.guessesRemaining === 0) {
  console.log('Game Over :(');
    console.log('The word was: ' + self.currentWrd.word);
}
});
}
}
game.startGame();