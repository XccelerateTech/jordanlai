const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const conversion = (num) => {
    console.log(num);
    return alphabet[num];


}


module.exports = conversion;


// module.exports = function (index) {
//     console.log(index);
//     return letters[index % 26];
// }

// console.log(letters);