class Player{
    constructor(){

    }
    getCount(){
        var playerCountref=database.ref('playerCount');
   playerCountref.on("value",function (data){
        playerCount=data.val();
    }) 
    }
    updateCount(Count){
        database.ref('/').update({
            playerCount:Count
        })
    }
    update(name){
        var playerIndex="player"+ playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}