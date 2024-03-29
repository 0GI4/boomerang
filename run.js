// Основной файл.
// Запускает игру.
const keypress = require('keypress');
const Game = require('./src/Game');
const readline = require('readline');
const Boomerang = require('./src/game-models/Boomerang');
const Enemy = require('./src/game-models/Enemy');
const Hero = require('./src/game-models/Hero');

// Инициализация игры с настройками.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Запуск игры.
function gg(ch, key) {
  if (key && key.name) {
    switch (key.name) {
      case 'a':
        game.hero.moveLeft();
        break;
      case 'd':
        game.hero.moveRight();
        break;
      case 'space':
        game.attack();
        break;
      case 'c':
        process.exit();
        break;
      default:
        break;
    }
  }
}

function moveEnemyTowardsHero() {
  const heroPosition = game.hero.position;
  const enemyPosition = game.enemy.position;

  if (heroPosition < enemyPosition) {
    game.enemy.moveLeft();
  } else if (heroPosition === enemyPosition) {
    game.hero.die();
  }
}

game.play();

keypress(process.stdin);
process.stdin.on('keypress', gg);
process.stdin.setRawMode(true);
process.stdin.resume();

setInterval(moveEnemyTowardsHero, 500);
