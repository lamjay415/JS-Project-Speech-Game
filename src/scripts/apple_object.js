import FallingObject from "./falling_object";

class AppleObject extends FallingObject{

    constructor(pos){
        super(pos);
        this.radius = 20;
        this.color = "red";
        this.img = document.getElementById('apple');
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
          );
        ctx.fill();
        ctx.drawImage(this.img,this.pos[0]-25,this.pos[1]-25,50,50);
    }
}

export default AppleObject