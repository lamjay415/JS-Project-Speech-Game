class GameObject{

    constructor(pos,speed){
        this.color = "#000000";
        this.speed = speed;
        this.pos = pos;
        this.radius = 10;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
          );
        ctx.fill();
    }

    fall(){
        this.pos[1] += this.speed;
    }
    
}

export default GameObject; 

