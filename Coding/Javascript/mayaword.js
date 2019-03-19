var code= {
    "6":"a", "1":"b", "7":"d", "4":"e",
    "3":"i", "2":"l", "9":"m", "8":"n",
    "0":"o", "5":"t"
}

function wordPlease(x){
    if (x < 100 || x > 999999) {
        throw new Error("Invalid Number!");
    }

    var numberString = x.toString();
    var result = "";

    for (var numberChar of numberString) {
        result += code[numberChar];
    }
    console.log (result);
}
wordPlease(239845);