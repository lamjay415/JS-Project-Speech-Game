// import GameObject from "./game_objects";
import FallingObject from "./falling_object";
import MainObject from "./main_object";
class Game{
    
    constructor(){
        this.DIMX = 600;
        this.DIMY = 800;
        this.objs = [];
        this.main_obj = new MainObject();
        this.objs.push(this.main_obj);
        this.checkInput();
    }

    randomPos(){
        let width = [60,180,300,420,540];
        let x = width[Math.floor(Math.random()*width.length)];
        let y = -this.DIMY * 1.5 * Math.random() + 100;
        return [x,y]
    }

    createObjs(count){
        for( ; count > 0 ; count--){
            this.objs.push(new FallingObject(this.randomPos(),5));
        }
    }

    resetPos(el){
        el.pos = this.randomPos();
    }
    moveObjects(){
        this.objs.forEach(el => el.move());
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
            // this.checkInput();
        },20);
        
    }

    checkInput(){
        document.addEventListener("keydown", (e) => {
            this.main_obj.move(e.key);
        });
    }

}
export default Game; 