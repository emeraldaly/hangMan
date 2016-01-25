var prompt = require('prompt');
var Word = require('./word.js');

prompt.start();

var Game = {
  wordBank: ["Taj Mahal", "Machu Picchu", "Colosseum", "Petra", "Great Wall", "Chichen Itza", "Christ Redeemer", "Great Pyramids", "Colossus of Rhodes", "Hanging Gardens of Babylong", "Lighthouse of Alexandria", "Mausoleum at Halicarnassus", "Statue of Zeus at Olympia", "Temple of Artemis at Ephesus"]
  guessesRemaining: 10;
  currentWrd: null;
}

var startGame = function(wrd){

var Word = wordBank [Math.floor(Math.random() * words.length)];
currentWrd = new Word;
.getLets(currentWrd);
.keepPromptingUser()

console.log(currentWrd);
}

var keepPromptingUser = function();
var self = this;
prompt.get(['guessLetter', ()], function (err, result))
console.log("The Letter of Space You Guessed is" + result.guessLetter);

var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter);
if findHowManyOfUserGuess = 0;
console.log("You guess wrong :(")
guessesRemaining -= 1;
{else
  console.log("You guessed right!");
}

  if currentWrd.didWeFindTheWord() = true;
  console.log("You Won!");
  {else console.log ("Guesses remaining" + guessesRemaining)
  console.log(wordRender(currentWrd);)
}

}