class Person{
    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
    }
    hi(){
        console.log(`Hello, my name is ${this.name}, I am ${this.weight} kg`);
    }
};

const tommy = new Person('Tommy', 5000); //inputs for your function hi

tommy.hi()