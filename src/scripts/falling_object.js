import GameObject from "./game_object";

class FallingObject extends GameObject{

    constructor(pos,speed){
        super(pos,speed);
        this.color = "#000000";
        this.radius = 35;
    }

    move(){
        this.pos[1] += this.speed;
    }
}

export default FallingObject;