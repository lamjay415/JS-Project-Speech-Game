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
    
    collideWith(obj){
        let distBetween = GameObject.dist(this.pos,obj.pos);
        return distBetween < (this.radius + obj.radius); 
    }

    static dist(pos1, pos2) {
        return Math.sqrt(
          Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    }
}

export default GameObject; 

