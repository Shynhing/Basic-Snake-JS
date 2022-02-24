var pg=document.getElementById("playground");
var ctx=pg.getContext("2d");
var s=true;
var nextmove="r";
ctx.fillStyle='black';
ctx.fillRect(0,0,pg.width,pg.height);
var pos=[{x:0,y:0},{x:10,y:0},{x:20,y:0}];
/*for(let i=0;i<pos.length;i++){
    ctx.fillStyle='red';
    ctx.fillRect(pos[i].x,pos[i].y,10,10);
}*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var ax=getRandomInt(40)*10;
var ay=getRandomInt(40)*10;

var apos={x:ax,y:ay};

document.addEventListener('keydown',function(event){
    switch(event.code){
        case "ArrowLeft":
            if(nextmove!="r"){
                nextmove="l";
            }
            break;
        case "ArrowRight":
            if(nextmove!="l"){
                nextmove="r";
            }
            break;                
        case "ArrowUp":
            if(nextmove!="d"){
                nextmove="u";
            }
            break;
        case "ArrowDown":
            if(nextmove!="u"){
                nextmove="d";
            }
            break;
        case "Space":
            nextmove="s";
            break;
        default:
            console.log("this doesn't exist");
            break;
    }
});
var gameover=false;
var newx,newy;
function play(){
    if(gameover!=true){
    ctx.fillStyle='black';
    ctx.fillRect(0,0,pg.width,pg.height);
    ctx.fillStyle='red';
    ctx.fillRect(apos.x,apos.y,10,10);
    switch(nextmove){
        case "r":
            newx=pos[pos.length-1].x+10;
            newy=pos[pos.length-1].y+0;
            if(newx>=400){
                newx=0;
            }
            break;
        case "d":
            newx=pos[pos.length-1].x;
            newy=pos[pos.length-1].y+10;
            if(newy>=400){
                newy=0;
            }
            break;
        case "l":
            newx=pos[pos.length-1].x-10;
            newy=pos[pos.length-1].y;
            if(newx<0){
                newx=390;
            }
            break;     
        case "u":
            newx=pos[pos.length-1].x;
            newy=pos[pos.length-1].y-10;
            if(newy<0){
                newy=390;
            }
            break;
        case "s":
            break;
    }
    pos.push({x:newx,y:newy});
    for(let i=0;i<pos.length;i++){
        ctx.fillStyle='green';
        ctx.fillRect(pos[i].x,pos[i].y,10,10);
    }
    pos.shift();
    if(pos[pos.length-1].x==apos.x && pos[pos.length-1].y==apos.y){
        apos.x=getRandomInt(40)*10;
        apos.y=getRandomInt(40)*10;
        pos.push({x:newx,y:newy});
    }
    console.log(pos);
    for(let i=0;i<pos.length-1;i++){
        if(pos[pos.length-1].x==pos[i].x && pos[pos.length-1].y==pos[i].y && i!=pos.length-2){
            alert("gameover");
            gameover=true;
        }
    }
    }
}

setInterval(play,200);