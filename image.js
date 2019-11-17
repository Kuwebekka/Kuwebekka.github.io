var image = new Image();
image.src = "hearth.jpg"
image.onload= function(){
    setInterval(move,100);
};
var x = 10;
function move(){
    if (x<200) x+=5; else x=10;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(image,x,10,128,128);
}