class Form{
    constructor(){

    }
display(){
    var title=createElement('h3')
    title.html("Multiplayer Car  Game")
    title.position(200,20);
    var input = createInput("Name")
    var button =createButton('press me');
    input.position(300,300);
    button.position(350,350);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playerCount+=1
        player.update(name)
        player.updateCount(playerCount)
    var  greeting=createElement('h4');
    greeting.html("hi"+name);
    greeting.position(200,200);
    })

    
}
    
}