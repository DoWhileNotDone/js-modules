import assignPlayerName from './player.js';
import * as game from './game.js';

console.log(`Starting Game`);

document.getElementById('startGame').addEventListener('click', function() {
  assignPlayerName(document.getElementById('playername').value);
  game.printGame();
});

document.getElementById('calculate').addEventListener('click', function() {
  assignPlayerName(document.getElementById('playername').value);
  game.calculateScore();
});

document.getElementById('problemCount').value = game.getProblemCount();
