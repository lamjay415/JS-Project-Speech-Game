import GameObject from "./game_object";

class MainObject extends GameObject{

    constructor(){
        super();
        this.color = "#C8472B"
        this.radius = 75;
        this.pos = [300,750];
        this.speed = 120;
    }

    move(dir){
        switch(dir){
            case 'a':
                if(this.pos[0] !== 60){
                    this.pos[0] -= 120;
                }
                break;
            case 'd':
                if(this.pos[0] !== 540){
                    this.pos[0] += 120;
                }
                break;
        }
    }
}

export default MainObject;