
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const Player = function(name, health, damage){
    this.name = name;
    this.health = health;
    this.damage = damage;
}

Player.prototype.attackmyself = function (){
    this.health -= this.damage
    console.log(this.health);
}

Player.prototype.attack =  function(opponent){
    opponent.health -= this.damage
    console.log(opponent.health);
            console.log(`${this.name} attacked ${opponent.name}`)

}

// Player.prototype.heal = function(){
//     this.health += 5;
// }


const jordan = new Player ('Jordan', 500 , 70); // Jordan | 500hp | 70atk

const timmy = new Player ('Timmy', 80, 9); // Timmy is a noob with only 80 hp and 9 atk


while (jordan.health > 0 && timmy.health > 0){ //ensures loop is running as long as both are still alive
    const turn = getRandomInt(2)
    console.log(turn)
    if (turn == 0){
        jordan.attack(timmy);
    } else if (turn == 1){
        timmy.attack(jordan);
    }
}




// // Player.prototype.turn = function(){
// //     getRandomInt(
// // }

// // jordan.attackmyself();
// // jordan.attack();
