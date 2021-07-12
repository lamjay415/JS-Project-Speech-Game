import GameObject from "./scripts/game_objects";
import Game from "./scripts/game";
// const GameObject = require("./scripts/game_objects");
// const Game = require("./scripts/game");

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('canvas');
  
    const ctx = canvasEl.getContext("2d");
    const game = new Game();
    console.log(game.objs);
    game.createObjs(30);
    game.start(ctx);
});