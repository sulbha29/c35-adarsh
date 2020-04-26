var gameState=0,database;
var playerCount;
var player,form,game;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
    drawSprites();

}

