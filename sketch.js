 var garden , gardenImg;
 var cat, cat1 , cat2 , cat3 , cat4;
 var mouse , mouse1 , mouse2 , mouse3 , mouse4;
 var catImg , cat1Img , cat2Img , cat3Img , cat4Img ;
 var mouseImg , mouse1Img , mouse2Img , mouse3Img , mouse4Img ;
 var catsGroup , mousesGroup ; 

function preload() {
    //load the images here
   garden.loadImage("images/garden.png");

   cat1Img.loadAnimation("images/cat1.png");
   cat2Img.loadAnimation("images/cat2.png");
   cat3Img.loadAnimation("images/cat3.png");
   cat4Img.loadAnimation("images/cat4.png");

   mouse1Img.loadAnimation("images/mouse1.png");
   mouse2Img.loadAnimation("images/mouse2.png");
   mouse3Img.loadAnimation("images/mouse3.png");
   mouse4Img.loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    if (frameCount%80===0){
        cat = createSprite(400,200,20,20) ;
        cat.scale=0.2;
         //cat.debug=true;
         rand= Math.round(random(1,4)); switch(rand){
         
           case 1:cat.addImage(cat1Img);
                   break;
           case 2:cat.addImage(cat2Img);
                   break;
           case 3:cat.addImage(cat3Img);
                   break;
           case 4:cat.addImage(cat4Img);
                   break;
           default: break;
         }
        
         cat.y = Math.round(random(50,340));
         cat.velocityX = -(8+(score/10));
         cat.lifetime = 100;
         catsGroup.add(cat);



         if (frameCount%80===0){
            mouse = createSprite(400,200,20,20) ;
            mouse.scale=0.2;
             //mouse.debug=true;
             rand= Math.round(random(1,4)); switch(rand){
             
               case 1:mouse.addImage(mouse1Img);
                       break;
               case 2:mouse.addImage(mouse2Img);
                       break;
               case 3:mouse.addImage(mouse3Img);
                       break;
               case 4:mouse.addImage(mouse4Img);
                       break;
               default: break;
             }
            
             mouse.y = Math.round(random(50,340));
             mouse.velocityX = -(8+(score/10));
             mouse.lifetime = 100;
             mousesGroup.add(mouse);



           

    mousesGroup = createGroup();
    catsGroup   = createGroup();



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
