const currentPlayer = document.querySelector(".currentPlayer");
const winnerX = document.querySelector("#winnerX");
const winnerO = document.querySelector("#winnerO");
const clean = document.querySelector("#clean");
console.log(clean);
clean.addEventListener("click", cleanLS);
let winnerIX = 1;
let winnerIO = 1;
winnerX.innerHTML = `Player X:${localStorage.getItem("scoreStorageX")}`;
winnerO.innerHTML = `Player O: ${localStorage.getItem("scoreStorageO")}`;
console.log(winnerX);
console.log(winnerO);
let selected;
let player = "X";
const winPositions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7]
];
function start() {
    selected = [];
    currentPlayer.innerHTML = `PLAYER: ${player}`;
    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = '';
        item.addEventListener("click", newMove);
    });
}
start();
function newMove(e) {
    let clickedElement = e.target;
    console.log(clickedElement);
    const index = parseInt(clickedElement.getAttribute("data-i"));
    console.log(index);
    clickedElement.innerHTML = player;
    clickedElement.removeEventListener("click", newMove);
    selected[index] = player;
    console.log(selected[index]);
    setTimeout(() => {
        WINNER();
    }, 100);
    player = player === "X" ? "O" : "X";
    currentPlayer.innerHTML = `PLAYER: ${player}`;
}
let WINNER = function check() {
    let playerLastMove = player === "X" ? "O" : "X";
    const items = selected
        .map((item, i) => ([item, i]))
        .filter((item) => item[0] === playerLastMove)
        .map((item) => item[1]);
    console.log(items);
    for (let pos of winPositions) {
        if (pos.every((item) => items.includes(item))) {
            playerLastMove === 'X' ? winnerX.innerHTML = `Player X: ${winnerIX}` : winnerO.innerHTML = `Player O: ${winnerIO}`;
            save(playerLastMove);
            alert(`The winner is ${playerLastMove}`);
            start();
            return playerLastMove;
        }
        else if (selected.filter((item) => item).length === 9) {
            alert(`Not winners here`);
            start();
            return;
        }
    }
};
function save(winner) {
    if (winner === "X") {
        localStorage.setItem("scoreStorageX", JSON.stringify(winnerIX++));
        winnerX.innerHTML = `Player X:${localStorage.getItem("scoreStorageX")}`;
    }
    if (winner === "O") {
        localStorage.setItem("scoreStorageO", JSON.stringify(winnerIO++));
        winnerO.innerHTML = `Player O: ${localStorage.getItem("scoreStorageO")}`;
    }
}
function cleanLS() {
    localStorage.clear();
    winnerX.innerHTML = "Player X: 0";
    winnerO.innerHTML = "Player O: 0";
    location.reload();
    winnerIX = 0;
    winnerIO = 0;
}
