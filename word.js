
var Letter = require('./letter.js');

var Word = function(wrd) {
    this.word = wrd;
    this.lets = [];
    this.found = false;

    this.getLets = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.lets.push(new Letter(this.word[i]));
        }
    };

    this.didWeFindTheWord = function() {
        this.found = this.lets.every(function(curLet) {
            return curLet.appear;
        });
        return this.found;
    };

    this.wordRender = function() {
        var str = "";
        for (var i = 0; i < this.word.let; i++) {
            this.letterRender.push(new str)
            return this.str;
        }

    }
    this.checkIfLetterFound = function(guessLetter)
}

module.exports = Word;