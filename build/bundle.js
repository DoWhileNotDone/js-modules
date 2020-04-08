(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const player = require('./player.js');
const game = require('./game.js');

console.log(`Starting Game`);

document.getElementById('startGame').addEventListener('click', function() {
  player.setName(document.getElementById('playername').value);
  game.printGame();
});

document.getElementById('calculate').addEventListener('click', function() {
  player.setName(document.getElementById('playername').value);
  game.calculateScore();
});

document.getElementById('problemCount').value = game.getProblemCount();

},{"./game.js":2,"./player.js":3}],2:[function(require,module,exports){
var player = require('./player.js');
var scoreboard = require('./scoreboard.js');

var factorElement = document.getElementById('factor');
var problemsPerGame = 3; // set default value

function printGame() {

    player.logPlayer();

    // determine the number of problems to show
    setProblemCount(document.getElementById('problemCount').value);

    // create the html for the current game
    var gameForm = '';
    for (var i = 1; i <= problemsPerGame; i++) {
        gameForm += '<div class="form-group">';
        gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
        gameForm += factorElement.value + ' x ' + i + ' = </label>';
        gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
        gameForm += '</div>';
    }

    // add the new game to the page
    var gameElement = document.getElementById('game');
    gameElement.innerHTML = gameForm;

    // enable the calculate score button
    document.getElementById('calculate').removeAttribute('disabled');
}

function calculateScore() {

    var problemsInGame = getProblemCount();
    var score = 0;

    // loop through the text boxes and calculate the number that are correct
    for (var i = 1; i <= problemsInGame; i++) {
        var answer = document.getElementById('answer' + i).value;
        if(i * factorElement.value == answer) {
            score++;
        }
    }

    // create a new result object to pass to the scoreboard
    var result = {
        name: player.getName(),
        score: score,
        problems: problemsInGame,
        factor: factorElement.value
    };

    // add the result and update the scoreboard
    scoreboard.addResult(result);
    scoreboard.updateScoreboard();

    // disable the calculate score button
    document.getElementById('calculate').setAttribute('disabled', 'true');
}

function setProblemCount(newProblemCount) {
    problemsPerGame = newProblemCount;
}

function getProblemCount() {
    return problemsPerGame;
}

exports.printGame = printGame;
exports.calculateScore = calculateScore;
exports.setProblemCount = setProblemCount;
exports.getProblemCount = getProblemCount;

},{"./player.js":3,"./scoreboard.js":4}],3:[function(require,module,exports){
var playerName = '';

function logPlayer() {
    console.log(`The current player is ${playerName}`);
}

function setName(newName) {
    playerName = newName;
}

function getName() {
    return playerName;
}

exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;

},{}],4:[function(require,module,exports){

var results = []; // array to store result of every game

function addResult(newResult) {
    results.push(newResult);
}

function updateScoreboard() {

    var output = '<h2>Scoreboard</h2>';

    // loop over all results and create the html for the scoreboard
    for (var index = 0; index < results.length; index++) {
        var result = results[index];
        output += '<h4>';
        output += result.name + ': ' + result.score + '/' + result.problems + ' for factor ' + result.factor;
        output += '</h4>';
    }

    // add the updated scoreboard to the page
    var scoresElement = document.getElementById('scores');
    scoresElement.innerHTML = output;
}

module.exports = {
   addResult,
   updateScoreboard
};

},{}]},{},[1]);
