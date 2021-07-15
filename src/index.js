import GameObject from "./scripts/game_object";
import Game from "./scripts/game";
// const GameObject = require("./scripts/game_objects");
// const Game = require("./scripts/game");

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('canvas');
    const ctx = canvasEl.getContext("2d");
    const game = new Game(ctx);
    const audio = document.querySelector("audio");
    const button = document.querySelector("#play-audio");
    audio.loop = true;
    let audio_playing = false;
    button.addEventListener('click', e => {
        if(!audio_playing){
            audio.volume = 0.1;
            audio.play();
            audio_playing = true;
            button.style.backgroundImage = 'url("./src/png/pause_button.png")';
        }else{
            audio.pause();
            audio_playing = false;
            button.style.backgroundImage = 'url("./src/png/play_button.png")';
        }
    });
    game.startScreen();
});