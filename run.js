// Основной файл.
// Запускает игру.
const keypress = require('keypress');
const Game = require('./src/Game');
const View = require('./src/View');
const Boomerang = require('./src/game-models/Boomerang');
const Hero = require('./src/game-models/Hero');
const Enemy = require('./src/game-models/Enemy');
const runInteractiveConsole = require('./src/keyboard');

const hero1 = new Hero(0);

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
  hero: hero1,
  enemy: new Enemy(),
  view: new View(),
});

// Запуск игры.
game.play();
game.view.render();
game.hero.moveRight();