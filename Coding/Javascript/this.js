// var dog ={
//     nickname: "Benji",
//     call(){
//         console.log("Come here " + this.nickname);
//     }
// };
// dog.call(); // logs Come here Benji

// var dog = {
//     nickname: "Benji",
//     whatIsThis(){  // we're inside the object declaration
//         console.log(this);
//     },
//     call() { // also inside the object declaration
//         console.log(this.nickname);
//     }
// };
// dog.whatIsThis() // { nickname: 'Benji', call: [Function: call] } 
// dog.call() // 'Benji'

// var obj = {
//     exampleProperty: 10,
//     exampleMethod() { // here we're inside the object declaration
//         function exampleFunction() { // we're outside of the object declaration
//             console.log(this === global); // as a result 'this' refers to the global object
//         }
//         exampleFunction();
//     }
// }
// exampleFunction() // true, this is equal to the global object





// --------------------------------------------------------------------------------------

//Exercise A

// class Person{
//     constructor(name, weight, height){
//         this.name = name;
//         this.weight = weight;
//     }
//     hi(){
//         console.log(`Hello, my name is ${this.name}, I am ${this.weight} kg`);
//     }
// };

// const tommy = new Person('Tommy', 5000); //inputs for your function hi

// tommy.hi()

// function Food(type){
//     this.food = type;
// }

// Food.prototype.taste = 'tasty';

// var candy = new Food ('candy');
// var noodles = new Food ('noodles');

// candy.taste; //tasty
// noodles.taste; //tasty

// Food.prototype.taste = 'awful';

// candy.taste; //awful
// noodles.taste; //awful  

// function Player (name){
//     this.name = name;
//     this.energy = 100;
//     this.attack = function attack(opponent){
//         opponent.energy -= 10;
        
//     };
// }

// var odysseus = new Player ('Odysseus');
// var cyclopses = new Player ('Cyclopses');

// cyclopses.attack(odysseus);
// console.log(`Odysseus has ${odysseus.energy} hp remaining!`);

// //add a new method using a prototype

// Player.prototype.revenge = function(opponent){
//     opponent.energy -= 80
// };


// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }


// console.log(getRandomInt(80));



// Exercise B on different file


//Exercise C

// class Car {
//     constructor(options) {
//         this.type = options.type;
//         this.color = options.color;
//     }

//     drive() {
//         console.log ('vroom')
//     }
// }

// const car = new Car({ type: 'pickup', color: 'red' });
// car.drive() // 'vroom'
// console.log(car.color); // 'pickup'

// class Car {
//     constructor (options) {
//         this.type = options.type;
//     }

//     drive(){
//         console.log('vroom');
//     }

// }

// class Toyota extends Car {
//     constructor (options){
//         super(options);
//         this.color = options.color;
//     }
//     honk () {
//         console.log('beep');
//     }
// }

// const toyota = new Toyota({color: 'blue', type: 'pickup'});
// toyota.honk();
// toyota.drive();
// console.log(toyota.color);


// class Monster {
//     constructor(){
//         this.name = option.name
//         this.health = option.health
//     }
//     wound(damage){

//     }
// }

// const demon = new Monster ('')


// class Monster{
//     constructor(option){
//         this.name=option.name;
//         this.health=100;
//     }

//     wound(damage){
//         this.health -= Math.min(this.health, damage);
//         console.log(this.name + ' lost' + 'damage' + 'hp, only' + this.health + 'remaining!')
//         if(this.health <= 0){
//             console.log('Monster is dead!')
//         }
//     }

// }

// let hero = function(monster){
//     let damage = Math.floor(Math.random()* (20 - 5 + 1) + 5)
//     monster.wound(damage);
// }

// var monster = new Monster({name: 'garbage pouch'})

// while(monster.health > 0){
//     hero(monster)
// }



class Person{
    constructor(option){
        this.name=option.name;
        this.age=option.age;
    }

    info(){
        console.log('The person is called '+ this.name+ ' and is ' + this.age + ' years old');
        return `The person is called ${this.name} and is ${this.age} years old`
    }
    

}

const person = new Person ({name: 'Tom', age: 44});

person.info()