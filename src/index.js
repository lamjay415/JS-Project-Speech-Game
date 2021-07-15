// import GameObject from "./scripts/game_object";
import Game from "./scripts/game";
// const GameObject = require("./scripts/game_objects");
// const Game = require("./scripts/game");

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('canvas');
    const ctx = canvasEl.getContext("2d");
    const game = new Game(ctx);
    let audio = document.getElementById("chill");
    let bgm = 'chill';
    const play_button = document.querySelector("#play-audio");
    const next_button = document.querySelector("#next-audio");
    audio.loop = true;
    let audio_playing = false;
    play_button.addEventListener('click', e => {
        if(!audio_playing){
            audio.volume = 0.2;
            audio.play();
            audio_playing = true;
            play_button.style.backgroundImage = 'url("./src/png/pause_button.png")';
        }else{
            audio.pause();
            audio_playing = false;
            play_button.style.backgroundImage = 'url("./src/png/play_button.png")';
        }
    });
    next_button.addEventListener('click', e=>{
        audio.pause();
        if(bgm === 'chill'){
            audio = document.getElementById("epic");
            bgm = 'epic';
            audio.volume = 0.1;
        }else{
            audio = document.getElementById("chill");
            bgm = 'chill';
            audio.volume = 0.1;
        }
        audio.play();
    });
    game.startScreen();
});