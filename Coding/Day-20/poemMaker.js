function genericPoemMaker(name, gender){
    console.log(name + " is finer than fine wine.");
    console.log("Alturistic and noble for the modern time");
    console.log("Always admirably adorned with the latest style");
    console.log("A " + gender + " of unfortunate tradegies who still manages a perpetual smile");
}

//const ES6 way of declaring function
const getUserInput = (firstName, lastName, gender, callback) => {
    var fullName = firstName + " " + lastName;
    if (typeof callback === " function"){ //if this parameter is a function... then we do something. This if statement is just doublechecking.
    callback(fullName, gender)
    }
}

const greetUser = (customerName, gender) => {
    var salutation = sex && sex == "Man" ? "Mr." : "Mrs";
    console.log("Hello, " + salutation + " " + customerName);
}
//if the sex = to man if that is true, the first will be output
//storing value of sex in salution. have to check, where && comes in whether or not we have a Man or not. If it is a mank if it evaluates to true, then the 1st will come out, if false, then 2nd one will come out. Trying to store varaible of sex. 


//Invoke getUserInput
getUserInput('Michael', 'Fassbender', 'man', genericPoemMaker);
