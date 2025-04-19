var mario = document.getElementById("mario");
var left = 0;
var top1 = 52;
console.log(mario);
function moveUp(){
    console.log("up");
    if(top1 >=460){
        return
    }
        top1 = top1 +10;
        mario.style.bottom= top1 + 'px';
    console.log(top1)
}
function moveDown(){
    console.log("down");
    if(top1 <=1){
        return
    }
        top1 = top1 -10;
        mario.style.bottom= top1 + 'px';
    console.log(top1)
}
function moveLeft(){
    console.log("left");
    if(left <= 0){
        return
    }
    left = left -10;
    mario.style.left = left +'px';
}
function moveRight(){
    console.log("right");
    if(left > 760){
        return
    }
    left = left +10;
    mario.style.left = left +'px';
    console.log(mario.style.left);
}