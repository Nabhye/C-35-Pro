//Create variables here
var dog, happyDog;
var database, foodS, foodStock;
var val;

function preload(){
  image = loadImage("sprites/Dog.png");
  image = loadImage("sprites/happydog.png");
}

function setup() {
  database = firebase.database(); 
	createCanvas(500, 500);
 // happyDog = createSprite(250,250,10,10);
 // dog.shapeColor = "red";
  var foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  fill("yellow");
  text("Caution: Press UP_ARROW key To Feed The Dog",200,50);
  textSize(32);
  


}
function readStock(data){
   foodS = data.val();
}
function writeStock(x){

  database.ref('/').update({
    Food:20
  })
}

