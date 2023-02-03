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

const inventory = [];
const board = document.getElementById("game-board");
const shovel = document.querySelector(".shovel-btn");
const axe = document.querySelector(".axe-btn");
const pickaxe = document.querySelector(".pickaxe-btn");
const newGame = document.querySelector(".reset-btn");
console.log(shovel, axe, pickaxe);

function draw() {
  for (let i = 0; i < world.length; i++) {
    for (let j = 0; j < world[i].length; j++) {
      if (world[i][j] === 0) {
        world[i][j] = document.createElement("div");

        board.appendChild(world[i][j]);
      }
      if (world[i][j] === 1) {
        world[i][j] = document.createElement("div");
        world[i][j].classList.add("nethergoldore");
        board.appendChild(world[i][j]);
      }
      if (world[i][j] === 2) {
        world[i][j] = document.createElement("div");
        world[i][j].classList.add("dirthblock");
        board.appendChild(world[i][j]);
      }
      if (world[i][j] === 3) {
        world[i][j] = document.createElement("div");
        world[i][j].classList.add("grassblock");
        board.appendChild(world[i][j]);
      }
      if (world[i][j] === 4) {
        world[i][j] = document.createElement("div");
        world[i][j].classList.add("wood");
        board.appendChild(world[i][j]);
      }
      if (world[i][j] === 5) {
        world[i][j] = document.createElement("div");
        world[i][j].classList.add("plant");
        board.appendChild(world[i][j]);
      }
      if (world[i][j] === 6) {
        world[i][j] = document.createElement("div");
        world[i][j].classList.add("stone");
        board.appendChild(world[i][j]);
      }
    }
  }
}

draw();

function shovelTool(e) {
  board.addEventListener("click", function (e) {
    if (e.target.className === "dirthblock") {
      e.target.classList.remove("dirthblock");
      e.target.classList.add("removeddirth");
    }
    if (e.target.className === "grassblock") {
      e.target.classList.remove("grassblock");
      e.target.classList.add("removedgrass");
    }
    inventory.push(e.target);
  });
}

function axeTool(e) {
  board.addEventListener("click", function (e) {
    if (e.target.className === "wood") {
      e.target.classList.remove("wood");
      e.target.classList.add("removedwood");
    }
    if (e.target.className === "plant") {
      e.target.classList.remove("plant");
      e.target.classList.add("removedplant");
    }
    inventory.push(e.target);
  });
}

function pickaxeTool(e) {
  board.addEventListener("click", function (e) {
    if (e.target.className === "nethergoldore") {
      e.target.classList.remove("nethergoldore");
      e.target.classList.add("nethergoldoreremoved");
    }
    if (e.target.className === "stone") {
      e.target.classList.remove("stone");
      e.target.classList.add("stoneremoved");
    }
    inventory.push(e.target);
  });
}

function revertChange() {
  for (let i = 0; i < world.length; i++) {
    for (let j = 0; j < world[i].length; j++) {
      if (world[i][j].className === "removeddirth") {
        world[i][j].classList.add("dirthblock");
        world[i][j].classList.remove("removeddirth");
      }
      if (world[i][j].className === "removedgrass") {
        world[i][j].classList.add("grassblock");
        world[i][j].classList.remove("removedgrass");
      }
      if (world[i][j].className === "removedwood") {
        world[i][j].classList.add("wood");
        world[i][j].classList.remove("removedwood");
      }
      if (world[i][j].className === "removedplant") {
        world[i][j].classList.add("plant");
        world[i][j].classList.remove("removedplant");
      }
      if (world[i][j].className === "nethergoldoreremoved") {
        world[i][j].classList.add("nethergoldore");
        world[i][j].classList.remove("nethergoldoreremoved");
      }
      if (world[i][j].className === "stoneremoved") {
        world[i][j].classList.add("stone");
        world[i][j].classList.remove("stoneremoved");
      }
    }
  }
}

shovel.addEventListener("click", shovelTool);
axe.addEventListener("click", axeTool);
pickaxe.addEventListener("click", pickaxeTool);
newGame.addEventListener("click", revertChange);
