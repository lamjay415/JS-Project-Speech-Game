import GameObject from "./game_object";

class FallingObject extends GameObject{

    constructor(pos){
        super(pos);
        this.color = "#000000";
        this.radius = 35;
        this.speed = 5;
    }

    move(){
        this.pos[1] += this.speed;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
          );
        ctx.fill();
        const img = document.getElementById('rock');
        ctx.drawImage(img,this.pos[0]-50,this.pos[1]-50,100,100);
        }
}

export default FallingObject;