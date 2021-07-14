import GameObject from "./game_object";

class FlyingObject extends GameObject{

    constructor(pos){
        super(pos);
        this.color = "#000000";
        this.radius = 15;
        this.speed = 5;
        
        this.img = document.getElementById('leaf');
    }

    move(){
        this.pos[0] -= this.speed;
    }

    draw(ctx){
        // ctx.fillStyle = this.color;
        // ctx.beginPath();
        // ctx.arc(
        //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        //   );
        // ctx.fill();
        // const img = document.getElementById(`rock${randRock}`);
        ctx.drawImage(this.img,this.pos[0]-32,this.pos[1]-40,75,75);
        }

}

export default FlyingObject;