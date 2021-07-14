import GameObject from "./game_object";

class FallingObject extends GameObject{

    constructor(pos){
        super(pos);
        this.color = "#000000";
        this.radius = 30;
        this.speed = 5;
        let randRock = "rock" + Math.floor(Math.random() * 5 + 1).toString();
        this.img = document.getElementById(randRock);
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
        // const img = document.getElementById(`rock${randRock}`);
        ctx.drawImage(this.img,this.pos[0]-75,this.pos[1]-75,150,150);
        }


}

export default FallingObject;