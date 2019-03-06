


var classCount;

function classCheck(classCount){
if(classCount < 12){
    classCount + 1;
    console.log(classCount);
    classCheck();

} else {
    console.log ("Let Start")
}
}

classCheck();