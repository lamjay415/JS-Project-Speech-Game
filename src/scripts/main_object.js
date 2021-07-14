import GameObject from "./game_object";

class MainObject extends GameObject{
    
    static hippo_src = 'standing_hippo';
    static dir = 'left';

    constructor(){
        super();
        this.color = "#C8472B"
        this.radius = 50;
        this.pos = [300,700];
        this.speed = 120;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
          );
        ctx.fill();
        const img = document.getElementById(MainObject.hippo_src);
        ctx.drawImage(img,this.pos[0]-100,this.pos[1]-115,175,175);
    }

    move(dir){
        switch(dir){
            case 'a':
                if(this.pos[0] !== 60){
                    this.pos[0] -= this.speed;
                }
                MainObject.dir = 'left';
                document.getElementById('a').classList.add('pressed');
                setTimeout(()=>{
                    document.getElementById('a').classList.remove('pressed');
                },400)
                MainObject.hippo_src = 'left_hippo';
                setTimeout( this.switch_default_src, 300);
                break;
            case 'd':
                if(this.pos[0] !== 540){
                    this.pos[0] += this.speed;
                }
                MainObject.dir = 'right';
                document.getElementById('d').classList.add('pressed');
                setTimeout(()=>{
                    document.getElementById('d').classList.remove('pressed');
                },400)
                MainObject.hippo_src = 'right_hippo';
                setTimeout( this.switch_default_src, 300);
                break;
            case 's':
                if(this.pos[1] === 700){
                    this.pos[1] += 15;
                    setTimeout(()=> this.pos[1] -= 15, 500);
                }
                document.getElementById('s').classList.add('pressed');
                setTimeout(()=>{
                    document.getElementById('s').classList.remove('pressed');
                },400)
                if(MainObject.dir == 'left'){
                    MainObject.hippo_src = 'down_hippo';
                }else{
                    MainObject.hippo_src = 'down_hippo2'
                }
                setTimeout( this.switch_default_src, 300);
                break;
        }
    }
    switch_default_src(){
        if(MainObject.dir === 'left'){
            MainObject.hippo_src = 'standing_hippo';
        }else{
            MainObject.hippo_src = 'standing_hippo2'
        }
    }
}

export default MainObject;