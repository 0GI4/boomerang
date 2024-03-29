// Основной файл.
// Запускает игру.
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

function askNickname() {
  return new Promise((resolve) => {
    rl.question('Назовите себя: ', (nickname) => {
      resolve(nickname);
    });
  });
}

function chooseSkin() {
  return new Promise((resolve) => {
    console.log('Выберите свой облик:');
    console.log('1. 🦬 - Буйвол');
    console.log('2. 🦔 - Еж');
    console.log('3. 🐬 - Дельфин');
    rl.question('Введите номер облика: ', (skin) => {
      let skinName;
      switch (skin) {
        case '1':
          skinName = '🦬';
          console.log('Вы выбрали бойвола');
          break;
        case '2':
          skinName = '🦔';
          console.log('Вы выбрали ежа');
          break;
        case '3':
          skinName = '🐬';
          console.log('Вы выбрали дельфина');
          break;
        default:
          console.log('Вы не выбрали облик. Вам достается бойвол');
          skinName = '🦬';
      }
      resolve(skinName);
    });
  });
}

function chooseWeapon() {
  return new Promise((resolve) => {
    console.log('Выберите оружие:');
    console.log('1. 🪃 - Бумеранг');
    // console.log('2. 💣 - Бомба');
    rl.question('Введите номер оружия: ', (weaponNumber) => {
      let weapon;
      switch (weaponNumber) {
        case '1':
          weapon = new Boomerang();
          console.log('Вы выбрали бумеранг');
          break;
        // case '2':
        //   weapon = new Bomb();
        //   console.log('Вы выбрали бомбу');
        //   break;
        default:
          console.log('Вы не выбрали оружие. Остается только бежать, а лучше возьмите начальный weapon');
          weapon = new Boomerang();
      }
      resolve(weapon);
    });
  });
}

async function gameInit() {
  try {
    const nickname = await askNickname();
    const skin = await chooseSkin();
    const weapon = await chooseWeapon();
    // saveHero(nickname, weapon, skin);
    const hero = new Hero({ nickname, position: 0, weapon, skin });
    const game = new Game({ hero, trackLength: 30 });
    rl.close();
    game.play();
  } catch (error) {
    console.log(error);
  }
}

gameInit()


// Запуск игры.
