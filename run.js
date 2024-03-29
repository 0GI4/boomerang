// Основной файл.
// Запускает игру.
const keypress = require('keypress');
const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

function moveBoomerangTowardsEnemy() {
  const boomerangPosition = game.boomerang.position;
  const enemyPosition = game.enemy.position;

  if (boomerangPosition < enemyPosition) {
    game.boomerang.moveRight();
  } else if (boomerangPosition > enemyPosition) {
    game.boomerang.moveLeft();
  } else if (boomerangPosition === enemyPosition) {
    game.enemy.skin = ' ';
    game.enemy.die();
    // while (boomerangPosition !== game.hero.position) {
    //   game.boomerang.moveLeft();
    // }
  }
}

// Запуск игры.
async function gg(ch, key) {
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
        moveBoomerangTowardsEnemy();
        await setInterval(moveBoomerangTowardsEnemy, 100);
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
    game.enemy.remove();
  }
}

game.play();

keypress(process.stdin);
process.stdin.on('keypress', gg);
process.stdin.setRawMode(true);
process.stdin.resume();

setInterval(moveEnemyTowardsHero, 1000);

// function moveBoomerangTowardsEnemy() {
//   const boomerangPosition = game.boomerang.position;
//   const enemyPosition = game.enemy.position;

//   if (boomerangPosition < enemyPosition) {
//     game.boomerang.moveRight();
//   } else if (boomerangPosition > enemyPosition) {
//     game.boomerang.moveLeft();
//   } else if (boomerangPosition === enemyPosition) {
//     game.enemy.die();
//     game.enemy.skin = '';
//     process.exit();
//   }
// }

// setInterval(moveBoomerangTowardsEnemy, 200);
