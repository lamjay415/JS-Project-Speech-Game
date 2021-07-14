// import GameObject from "./game_objects";
import FallingObject from "./falling_object";
import FlyingObject from "./flying_object";
import MainObject from "./main_object";
import SpeechListener from "./speech_listener";

class Game{
    static hit_pos = [];
    static hit = false;
    static voiceCounter = 0;
    static mode = '';
    static recognition = new SpeechListener();
    static level = 0;
    constructor(ctx){
        this.DIMX = 600;
        this.DIMY = 800;
        this.ctx = ctx;
        this.lives = 3;
        this.score = 0;
        this.objs = [];
        this.main_obj = new MainObject();
        this.objs.push(this.main_obj);
        this.createObjs(3);
    }

    randomPos(){
        let width = [60,180,300,420,540];
        let x = width[Math.floor(Math.random()*width.length)];
        let y = -this.DIMY * 1.5 * Math.random();
        return [x,y];
    }

    randomHorPos(){
        let y = 640;
        let x = Math.floor(Math.random() * 900 + 600);
        return [x,y];
    }

    createObjs(count){
        for( ; count > 0 ; count--){
            this.objs.push(new FallingObject(this.randomPos()));
        }
    }

    resetPos(el){
        el.pos = this.randomPos();
    }

    resetHorPos(el){
        el.pos = this.randomHorPos();
    }

    moveObjects(){
        this.objs.forEach(el => {
            el.move();
        });
    }

    draw(){
        this.ctx.clearRect(0, 0, this.DIMX, this.DIMY);
        this.objs.forEach(el => {
            if(el.pos[1] < 900) {
                if(el.pos[0] <= -200){
                    this.resetHorPos(el);
                }else{
                    el.draw(this.ctx);
                }
            }else{
                this.resetPos(el);
            }
        });
    }

    start(){
        let gameInterval = setInterval(() => {
            this.draw(this.ctx);
            this.moveObjects();
            this.checkCollision();

            if(Game.hit){
                this.hit_marker(Game.hit_pos);
                MainObject.hippo_src = 'hurt_hippo';
                setTimeout(()=>{
                    Game.hit = false;
                    MainObject.hippo_src = 'standing_hippo'
                },500);
            }
            if(this.gameOver()){
                clearInterval(gameInterval);
            }
        },20);

        
        let scoreInterval = setInterval(() =>{
            let doc_score = document.getElementById('score');
            // this.score++;
            doc_score.innerText = ++this.score;
            if(this.gameOver()){
                clearInterval(scoreInterval);
                this.gameOverDisplay();
            }
            if(this.score % 15 === 0){
                this.increaseDifficulty();
            }
        },1000)
    }

    checkKeyInput(){
        document.addEventListener("keydown", (e) => {
            this.main_obj.move(e.key);
        });
    }

    checkVoiceInput(){
        Game.recognition.start();
        let input = "";
        Game.recognition.onresult = (e) =>{
            if(typeof e.results[Game.voiceCounter] !== 'undefined'){
                let img = document.getElementById('voice_img');
                // img.removeAttribute('hidden');
                img.style.display = 'block';
                setTimeout( () => img.style.display = 'none', 750);
                input = e.results[Game.voiceCounter][0].transcript;
                console.log(input);
                let dir = Game.recognition.processInput(input);
                this.main_obj.move(dir);
                Game.voiceCounter++;
            }
        };
    }

    checkCollision(){
        if(!Game.hit){
            for(let i = 1; i < this.objs.length; i++){
                if(this.main_obj.collideWith(this.objs[i]) && this.objs[i].pos[1] <= 700){
                    Game.hit_pos = this.main_obj.pos;
                    Game.hit = true;
                    let canvas = document.getElementById('canvas');
                    canvas.classList.add('apply-shake');
                    setTimeout(() => {
                        canvas.classList.remove('apply-shake');

                    },750);
                    let rock = this.objs[i];
                    this.lives--;
                    // console.log(rock.pos);
                    this.resetPos(rock)
                    let doc_lives = document.getElementById('lives');
                    doc_lives.innerText = this.lives;
                    // this.main_obj.invul(1000);
                    return true;
                }
            }
        }
        return false;
    }

    hit_marker(pos){
        const img = document.getElementById('hit_marker');
        this.ctx.drawImage(img,pos[0]-55,pos[1]-145,100,100);
    }

    increaseDifficulty(){
        this.objs.push(new FallingObject(this.randomPos()));
        Game.level++;
        for(let i = 1; i < this.objs.length; i++){
            if(!typeof this.objs[i] === FlyingObject){
                this.objs[i].speed += 2;
            }
        }
        if(Game.level % 2 === 0){
            // console.log(Game.level);
            this.objs.push(new FlyingObject(this.randomHorPos));
        }
    }

    gameOver(){
        if(this.lives <= 0){
            if(Game.mode === 'voice'){
                Game.recognition.stop();
            }
            return true;
        }
        return false;
    }

    gameOverDisplay(){
        let doc_container = document.querySelector('.container');
        let scoreboard = document.createElement('div');
        scoreboard.setAttribute('id', 'scoreboard');
        let score = document.createElement('p');
        score.innerText = `GAME OVER! \n Final Score: ${this.score}`;
        let restartButton = document.createElement('button');
        restartButton.innerText = "Play Again"
        restartButton.setAttribute('id', 'restart');
        restartButton.addEventListener('click', (e) =>{
            this.resetGame();
            this.start();
        });
        scoreboard.append(score);
        scoreboard.append(restartButton);
        doc_container.append(scoreboard);
    }

    resetGame(){
        let scoreboard = document.getElementById('scoreboard');
        scoreboard.remove();
        if(Game.mode === 'voice'){
            Game.voiceCounter = 0;
            this.checkVoiceInput();
        }
        this.ctx.clearRect(0, 0, this.DIMX, this.DIMY);
        this.lives = 3;
        document.getElementById('lives').innerText = this.lives;
        this.score = 0;
        document.getElementById('score').innerText = this.score;
        this.objs = [];
        this.main_obj = new MainObject();
        this.objs.push(this.main_obj);
        this.createObjs(3);
    }

    startScreen(){
        let doc_container = document.querySelector('.container');
        let startScreen = document.createElement('div');
        startScreen.setAttribute('class', 'start');
        let voicePlay = document.createElement('button');
        let keyPlay = document.createElement('button');
        keyPlay.innerHTML = 'Keyboard'
        let pTag = document.createElement('p');
        pTag.innerHTML = 'or';

        voicePlay.innerHTML = 'Voice'
        keyPlay.addEventListener('click', (e) =>{
            Game.mode = 'key';
            this.checkKeyInput();
            this.start();
            startScreen.remove();
        });
        voicePlay.addEventListener('click', (e) =>{
            Game.mode = 'voice';
            this.checkVoiceInput();
            this.start();
            startScreen.remove();
        });
        startScreen.append(voicePlay);
        startScreen.append(pTag);
        startScreen.append(keyPlay);
        doc_container.append(startScreen);
    }
}
export default Game; 