
var ctx =new fabric.Canvas("myCanvas");
var superhero_width =40;
var superhero_height =60;
var superhero_x=10;
var superhero_y=10;
var superhero=" ";
var image="";
function avengers(){
    fabric.Image.fromURL("player.png",function(Img){
        superhero=Img;
        superhero.scaleToWidth(150);
        superhero.scaleToheight(100);
        superhero.set({
            top:superhero_y,left:superhero_x
        });
        ctx.add(superhero);
    });
}
function img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        image=Img;
        image.scaleToWidth(superhero_width);
        image.scaleToheight(superhero_height);
        image.set({
            top:superhero_y,left:superhero_x
        });
        ctx.add(image);
    });
}