import GameObject from "./scripts/game_object";
import Game from "./scripts/game";
// const GameObject = require("./scripts/game_objects");
// const Game = require("./scripts/game");

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('canvas');
  
    const ctx = canvasEl.getContext("2d");
    const game = new Game(ctx);
    // console.log(game.objs);
    // game.createObjs(3);
    game.startScreen();
});