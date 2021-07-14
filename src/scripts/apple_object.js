import FallingObject from "./falling_object";

class AppleObject extends FallingObject{

    constructor(){
        super();
        this.color = "red";
        this.img = document.getElementById('apple');
    }


}

export default AppleObject