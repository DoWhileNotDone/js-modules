'use strict';

var _player = require('./player.js');

var _player2 = _interopRequireDefault(_player);

var _game = require('./game.js');

var game = _interopRequireWildcard(_game);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Starting Game');

document.getElementById('startGame').addEventListener('click', function () {
  (0, _player2.default)(document.getElementById('playername').value);
  game.printGame();
});

document.getElementById('calculate').addEventListener('click', function () {
  (0, _player2.default)(document.getElementById('playername').value);
  game.calculateScore();
});

document.getElementById('problemCount').value = game.getProblemCount();