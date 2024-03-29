const keypress = require('keypress');
const Boomerang = require('./src/game-models/Boomerang');
const Hero = require('./src/game-models/Hero');
const Enemy = require('./src/game-models/Enemy');

const hero1 = new Hero({ position: 0 });
const enemy1 = new Enemy();
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

process.stdin.on('keypress', (ch, key) => {
  console.log(hero1.skin, enemy1.skin);
  if (key.name == 'a') {
    hero1.moveLeft();
  } else if (key.name == 'p') {
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

// пробел стрелять
