import GameObject from "./game_objects";

class Game{

    constructor(){
        this.DIMX = 600;
        this.DIMY = 800;
        this.objs = [];
    }

    randomPos(){
        let x = this.DIMX * Math.random();
        let y = -this.DIMY * 4 * Math.random();
        return [x,y]
    }

    createObjs(count){
        for( ; count > 0 ; count--){
            this.objs.push(new GameObject(this.randomPos(),5));
        }
    }

    resetPos(el){
        el.pos = this.randomPos();
    }
    moveObjects(){
        this.objs.forEach(el => el.fall());
    }

    draw(ctx){
        ctx.clearRect(0, 0, this.DIMX, this.DIMY);
        this.objs.forEach(el => {
            if(el.pos[1] < 900) {
                el.draw(ctx)
            }else{
                this.resetPos(el);
            }
        });
    }
    start(ctx){
        setInterval(() => {
            this.draw(ctx);
            this.moveObjects();
        },20);
        
    }
}
export default Game; 