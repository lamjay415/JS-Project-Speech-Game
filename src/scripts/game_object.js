class GameObject{

    constructor(pos,speed){
        this.speed = speed;
        this.pos = pos;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
          );
        ctx.fill();
    }
    
}

export default GameObject; 

