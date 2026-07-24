'use strict';

let mainGame = document.querySelector('.game-block'),
gameWrapper = document.querySelector('.game-wrap'),
startBtn = document.querySelector('.start-btn'),
endBtn = document.querySelector('.end-btn'),
btnAnwers = document.querySelectorAll('.answer'),
blockQuestion = document.querySelectorAll('.question'),
helpBtns = document.querySelectorAll('.hints-help'),
winBlock = document.querySelectorAll('.wins-block'),
helpFifty = document.querySelector('.fifty-fifty'),
helpHall = document.querySelector('.hall-help'),
helpFriend = document.querySelector('.call-friend'),
helpAI = document.querySelector('.ai-help'),
game = document.querySelector('.game')

///////////////=============>

let changedQuestion = document.getElementById('hintBox')
let extraQuestion = document.getElementById('extra')
let flagExtra = true

