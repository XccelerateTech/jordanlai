var randomLetter = require ('./alphabet');
var randomNumber = require ('./number');

function inputNumber(number){
    let  str = ''; //concatinate values add random letters into the string

    for (let i = 0; i < number; i ++){
        str += randomLetter(randomNumber());
        console.log(str)

    // += operator allows to add new letter onto a string. 

    }
    return str
}

module.exports = inputNumber;