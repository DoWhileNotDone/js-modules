define(['./player', './game'], function(player, game) {

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
});
