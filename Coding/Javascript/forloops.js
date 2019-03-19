var i;
const logger = (aRandomArray) => {
    for (i=0; i < aRandomArray.length; i++){
        console.log(aRandomArray[i])
    }
}

const reverseLogger = (input) => {
    for (i = input.length -1; i >= 0; i--){
        console.log(input[i])
    }
}

const array = ['Dog', 'Cat', 'Shark', 'Rabbit']

logger(array);
console.logger(array[0]);
reverseLogger(array);