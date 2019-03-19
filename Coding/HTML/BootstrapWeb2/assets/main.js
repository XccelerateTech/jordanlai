// var scopeup = document.getElementsByClassName('service-box');
// scopeup.onclick = function(){
//     alert('I was clicked');
// };

document.getElementsByClassName('service-box');
var myBox = document.getElementsByClassName('service-box');

console.log(myBox);

let b = myBox[0].children[0]

console.log(b)


// myBox[0].onclick = function(){
//     alert('I was clicked');
// };
// myBox[1].onclick = function(){
//     alert('I was clicked');
// };
// myBox[2].onclick = function(){
//     alert('I was clicked');
// };
// myBox[3].onclick = function(){
//     alert('I was clicked');
// };

let icons = document.getElementsByClassName('img-icon');

for(let icon of icons){
    icon.addEventListener('mouseenter', function(){
        this.style.height = "100px";
        this.style.width = "100px";
    });
    icon.addEventListener('mouseleave',function(){
        this.style.height = "100px";
        this.style.width = "100px";
    });
}

