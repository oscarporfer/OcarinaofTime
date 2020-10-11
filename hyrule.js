let readlineSync = require('readline-sync')

function intro() {
  let userName = readlineSync.question('Final level of Zelda Ocarina of Time. What is your login?\n');
  console.log(`Hello ${userName}, you must save princess Zelda and defeat Gannondorf!`);
  start(userName)
}


function start(userName) {
  let plot = ["Climb up Hyrule Castle to defeat Gannondorf.", "Runaway and let Gannondorf take over the world."]
  let index = readlineSync.keyInSelect(plot, "What do you want to do?");
  if (index == 0) {
    console.log(`${userName} , is on his way to defeat Gannondorf and save Zelda!`)
    fight(userName)
  }
  else if (index == 1) {
    playAgain(userName)
  };
}

function fight(userName) {
  let plotTwo = ["Fight Gannondorfs minions.", "Find an alternate route and conserve energy."]
  let index = readlineSync.keyInSelect(plotTwo, "What do you want to do?");
  if (index == 0) {
    console.log(`${userName}, you have defeated Gannondorfs minions! Keep going and save Zelda`)
    climbTower(userName)
  }
  else if (index == 1) {
    console.log(`${userName}, you found an alternate route and avoided wasting hearts on minions!`)
    climbWalls(userName)
  }
};

function climbTower() {
  let plotFour = ["Get to the final room and defeat Gannondorf", "Runaway and Gannondorf will rule the world"]
  let index = readlineSync.keyInSelect(plotFour, "What do you want to do?");
  if (index == 0) {
    console.log("You have faced Ganondorf and saved princess Zelda.")
    playAgain()
  }
  else if (index == 1) {
    console.log("Ganondorf has taken over the world, you have failed!")
    playAgain()
  }
}

function climbWalls() {
  let plotFour = ["Sneak up behind Gannondorf by climbing the walls", "Runawau and Gannondorf will rule the world"]
  let index = readlineSync.keyInSelect(plotFour, "What do you want to do?");
  if (index == 0) {
    console.log("You have defeated Gannondorf on a surprise attack!")
    playAgain()
  }

  else if (index == 1) {
    console.log("Gannondorf has take over the world, you have failed!")
    playAgain()
  }
}

function playAgain() {
  let play = readlineSync.question('Do you want to play again? y || n \n');
  play = play.toLowerCase();
  if (play === 'y') {
    intro()
  }
  else if (play === 'n') {
    console.log('Thanks for playing.\nGoodbye.')
  }

  else {
    console.log("Not valid answer choose y or n.")
    playAgain()
  }

};

intro()