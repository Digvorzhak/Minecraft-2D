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

let gameBoard = JSON.parse(JSON.stringify(world));
let inventory = [0, 0, 0, 0, 0, 0];
let blocks = ["", "removeddirt", "removedgrass", "removedwood", "removedplant", "nethergoldoreremoved", "stoneremoved"];
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
let currentItem = "";

// console.log(stone, nethergoldore, grass, dirt, wood, plant);

// console.log(shovel, axe, pickaxe);

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
  if (e.target.className !== "shovel-btn active-tool") {
    shovel.classList.toggle("active-tool");
    board.addEventListener("click", shovelMechanic);
  } else {
    shovel.classList.toggle("active-tool");
    board.removeEventListener("click", shovelMechanic);
  }
}

function axeTool(e) {
  if (e.target.className !== "axe-btn active-tool") {
    axe.classList.toggle("active-tool");
    board.addEventListener("click", axeMechanic);
  } else {
    axe.classList.toggle("active-tool");
    board.removeEventListener("click", axeMechanic);
  }
}

function pickaxeTool(e) {
  if (e.target.className !== "pickaxe-btn active-tool") {
    pickaxe.classList.toggle("active-tool");
    board.addEventListener("click", pickaxeMechanic);
  } else {
    pickaxe.classList.toggle("active-tool");
    board.removeEventListener("click", pickaxeMechanic);
  }
}

function shovelMechanic(e) {
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

function axeMechanic(e) {
  if (e.target.className === "wood") {
    e.target.classList.remove("wood");
    e.target.classList.add("removedwood");
    inventory[4]++;
    wood.innerHTML = `${inventory[4]}`;
  }
  if (e.target.className === "plant") {
    e.target.classList.remove("plant");
    e.target.classList.add("removedplant");
    inventory[5]++;
    plant.innerHTML = `${inventory[5]}`;
  }
}

function pickaxeMechanic(e) {
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

// function updateInventory(block) {
//   console.log(block);
//   console.log(inventory[inventory.length - 1].className);
//   console.log(inventoryShow.className);

//   if (inventoryShow.className !== `inventory-btn ${block.className}`) {
//     inventoryShow.classList.add(inventory[inventory.length - 1].className);
//   } else {
//     inventoryShow.classList.remove(inventory[inventory.length - 2].className);
//     inventoryShow.classList.add(inventory[inventory.length - 1].className);
//   }
//   // console.log(inventoryShow.className.slice(13));
// }

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

// function add(e){
//   if(stone)
// }

shovel.addEventListener("click", shovelTool);
axe.addEventListener("click", axeTool);
pickaxe.addEventListener("click", pickaxeTool);
newGame.addEventListener("click", revertChange);

stone.addEventListener("click", function (e) {
  currentItem = "stone";
  console.log(currentItem);
  board.addEventListener("click", function (e) {
    if (currentItem === "stone") {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[0] > 0) {
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
  console.log(currentItem);
  board.addEventListener("click", function (e) {
    if (currentItem === "nethergoldore") {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[1] > 0) {
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
  console.log(currentItem);
  board.addEventListener("click", function (e) {
    if (currentItem === "dirt") {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[2] > 0) {
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
  console.log(currentItem);
  board.addEventListener("click", function (e) {
    if (currentItem === "grass") {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[3] > 0) {
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
  console.log(currentItem);
  board.addEventListener("click", function (e) {
    if (currentItem === "wood") {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[4] > 0) {
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
  console.log(currentItem);
  board.addEventListener("click", function (e) {
    if (currentItem === "plant") {
      for (let i = 0; i < blocks.length; i++) {
        if (e.target.className === blocks[i]) {
          if (inventory[5] > 0) {
            e.target.classList.add("plant");
            inventory[5]--;
            plant.innerHTML = `${inventory[5]}`;
          }
        }
      }
    }
  });
});
