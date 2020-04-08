/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _player = __webpack_require__(1);

	var _player2 = _interopRequireDefault(_player);

	var _game = __webpack_require__(2);

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

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.logPlayer = logPlayer;
	exports.default = setName;
	exports.getName = getName;
	var playerName = '';

	function logPlayer() {
	    console.log('The current player is ' + playerName);
	}

	function setName(newName) {
	    playerName = newName;
	}

	function getName() {
	    return playerName;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getProblemCount = exports.setProblemCount = exports.calculateScore = exports.printGame = undefined;

	var _player = __webpack_require__(1);

	var player = _interopRequireWildcard(_player);

	var _scoreboard = __webpack_require__(3);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
	        if (i * factorElement.value == answer) {
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
	    (0, _scoreboard.addResult)(result);
	    (0, _scoreboard.updateScoreboard)();

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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

	exports.addResult = addResult;
	exports.updateScoreboard = updateScoreboard;

/***/ }
/******/ ]);