"use strict";

const world = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
  [0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
  [0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
  [0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 11
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 12
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6], // 13
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6], // 14
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // 15
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 16
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 17
  [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 18
  [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 19
];

const board = document.getElementById("game-board");
const shovel = document.querySelector(".shovel-btn");
const axe = document.querySelector(".axe-btn");
const pickaxe = document.querySelector(".pickaxe-btn");
const newGame = document.querySelector(".reset-btn");
const inventoryShow = document.querySelector(".inventory-btn");
const stone = document.querySelector(".stone");
const nethergoldore = document.querySelector(".nethergoldore");
const grass = document.querySelector(".grassblock");
const dirt = document.querySelector(".dirtblock");
const wood = document.querySelector(".wood");
const plant = document.querySelector(".plant");
const startModal = document.getElementById("start-modal");
const startButton = document.getElementById("start-button");
const tools = document.querySelector(".tools");
const buttons = document.querySelectorAll(".tools button");
let gameBoard = JSON.parse(JSON.stringify(world));
let inventory = [0, 0, 0, 0, 0, 0];
let blocks = ["", "removeddirt", "removedgrass", "removedwood", "removedplant", "nethergoldoreremoved", "stoneremoved"];
let currentItem = "";
let currentTool = "";

function draw() {
  for (let i = 0; i < world.length; i++) {
    for (let j = 0; j < world[i].length; j++) {
      if (world[i][j] === 0) {
        gameBoard[i][j] = document.createElement("div");

        board.appendChild(gameBoard[i][j]);
      }
      if (world[i][j] === 1) {
        gameBoard[i][j] = document.createElement("div");
        gameBoard[i][j].classList.add("nethergoldore");
        board.appendChild(gameBoard[i][j]);
      }
      if (world[i][j] === 2) {
        gameBoard[i][j] = document.createElement("div");
        gameBoard[i][j].classList.add("dirtblock");
        board.appendChild(gameBoard[i][j]);
      }
      if (world[i][j] === 3) {
        gameBoard[i][j] = document.createElement("div");
        gameBoard[i][j].classList.add("grassblock");
        board.appendChild(gameBoard[i][j]);
      }
      if (world[i][j] === 4) {
        gameBoard[i][j] = document.createElement("div");
        gameBoard[i][j].classList.add("wood");
        board.appendChild(gameBoard[i][j]);
      }
      if (world[i][j] === 5) {
        gameBoard[i][j] = document.createElement("div");
        gameBoard[i][j].classList.add("plant");
        board.appendChild(gameBoard[i][j]);
      }
      if (world[i][j] === 6) {
        gameBoard[i][j] = document.createElement("div");
        gameBoard[i][j].classList.add("stone");
        board.appendChild(gameBoard[i][j]);
      }
    }
  }
}

draw();

function shovelTool(e) {
  currentTool = "shovel";
  board.addEventListener("click", shovelMechanic);
}

function axeTool(e) {
  currentTool = "axe";
  board.addEventListener("click", axeMechanic);
}

function pickaxeTool(e) {
  currentTool = "pickaxe";
  board.addEventListener("click", pickaxeMechanic);
}

function shovelMechanic(e) {
  if (currentTool === "shovel" && shovel.className.includes("active-item")) {
    if (e.target.className === "dirtblock") {
      e.target.classList.remove("dirtblock");
      e.target.classList.add("removeddirt");
      inventory[2]++;
      dirt.innerHTML = `${inventory[2]}`;
    }
    if (e.target.className === "grassblock") {
      e.target.classList.remove("grassblock");
      e.target.classList.add("removedgrass");
      inventory[3]++;
      grass.innerHTML = `${inventory[3]}`;
    }
  }
}

function axeMechanic(e) {
  if (currentTool === "axe" && axe.className.includes("active-item")) {
    if (e.target.className === "wood") {
      e.target.classList.remove("wood");
      e.target.classList.add("removedwood");

      inventory[4]++;
      wood.innerHTML = `${inventory[4]}`;
    }
    // if(e.target.className === remo)
    if (e.target.className === "plant") {
      e.target.classList.remove("plant");
      e.target.classList.add("removedplant");
      inventory[5]++;
      plant.innerHTML = `${inventory[5]}`;
    }
  }
}

function pickaxeMechanic(e) {
  if (currentTool === "pickaxe" && pickaxe.className.includes("active-item")) {
    if (e.target.className === "nethergoldore") {
      e.target.classList.remove("nethergoldore");
      e.target.classList.add("nethergoldoreremoved");
      inventory[1]++;
      nethergoldore.innerHTML = `${inventory[1]}`;
    }
    if (e.target.className === "stone") {
      e.target.classList.remove("stone");
      e.target.classList.add("stoneremoved");
      inventory[0]++;
      stone.innerHTML = `${inventory[0]}`;
    }
  }
}

function revertChange() {
  inventory = [0, 0, 0, 0, 0, 0];
  wood.innerHTML = "0";
  plant.innerHTML = "0";
  stone.innerHTML = "0";
  nethergoldore.innerHTML = "0";
  grass.innerHTML = "0";
  dirt.innerHTML = "0";
  for (let i = 0; i < world.length; i++) {
    for (let j = 0; j < world[i].length; j++) {
      if (world[i][j] === 0) {
        gameBoard[i][j].className = "";
      }
      if (world[i][j] === 1) {
        gameBoard[i][j].className = "nethergoldore";
      }
      if (world[i][j] === 2) {
        gameBoard[i][j].className = "dirtblock";
      }
      if (world[i][j] === 3) {
        gameBoard[i][j].className = "grassblock";
      }
      if (world[i][j] === 4) {
        gameBoard[i][j].className = "wood";
      }
      if (world[i][j] === 5) {
        gameBoard[i][j].className = "plant";
      }
      if (world[i][j] === 6) {
        gameBoard[i][j].className = "stone";
      }
    }
  }
}

startButton.addEventListener("click", function () {
  startModal.style.display = "none";
  board.style.display = "grid";
  tools.style.display = "flex";
});

shovel.addEventListener("click", shovelTool);
axe.addEventListener("click", axeTool);
pickaxe.addEventListener("click", pickaxeTool);
newGame.addEventListener("click", revertChange);

stone.addEventListener("click", function (e) {
  currentItem = "stone";
  board.addEventListener("click", function (e) {
    if (currentItem === "stone" && stone.className.includes("active-item")) {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[0] > 0) {
            e.target.className = "";
            e.target.classList.add("stone");
            inventory[0]--;
            stone.innerHTML = `${inventory[0]}`;
          }
        }
      }
    }
  });
});

nethergoldore.addEventListener("click", function (e) {
  currentItem = "nethergoldore";
  board.addEventListener("click", function (e) {
    if (currentItem === "nethergoldore" && nethergoldore.className.includes("active-item")) {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[1] > 0) {
            e.target.className = "";
            e.target.classList.add("nethergoldore");
            inventory[1]--;
            nethergoldore.innerHTML = `${inventory[1]}`;
          }
        }
      }
    }
  });
});

dirt.addEventListener("click", function (e) {
  currentItem = "dirt";
  board.addEventListener("click", function (e) {
    if (currentItem === "dirt" && dirt.className.includes("active-item")) {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[2] > 0) {
            e.target.className = "";
            e.target.classList.add("dirtblock");
            inventory[2]--;
            dirt.innerHTML = `${inventory[2]}`;
          }
        }
      }
    }
  });
});

grass.addEventListener("click", function (e) {
  currentItem = "grass";
  board.addEventListener("click", function (e) {
    if (currentItem === "grass" && grass.className.includes("active-item")) {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[3] > 0) {
            e.target.className = "";
            e.target.classList.add("grassblock");
            inventory[3]--;
            grass.innerHTML = `${inventory[3]}`;
          }
        }
      }
    }
  });
});

wood.addEventListener("click", function (e) {
  currentItem = "wood";
  board.addEventListener("click", function (e) {
    if (currentItem === "wood" && wood.className.includes("active-item")) {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[4] > 0) {
            e.target.className = "";
            e.target.classList.add("wood");
            inventory[4]--;
            wood.innerHTML = `${inventory[4]}`;
          }
        }
      }
    }
  });
});

plant.addEventListener("click", function (e) {
  currentItem = "plant";
  board.addEventListener("click", function (e) {
    if (currentItem === "plant" && plant.className.includes("active-item")) {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[5] > 0) {
            e.target.className = "";
            e.target.classList.add("plant");
            inventory[5]--;
            plant.innerHTML = `${inventory[5]}`;
          }
        }
      }
    }
  });
});

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (button.classList.contains("reset-btn")) {
      return;
    }
    buttons.forEach((button) => button.classList.remove("active-item"));
    button.classList.add("active-item");
  })
);
