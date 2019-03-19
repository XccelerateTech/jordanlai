//  function informMe (endpoint, value, callback){
//         var http = new XMLHttpRequest(); //new request, class instance

// http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`); 
// //targetting a specific file location to get information from . but not sent
// //use of backticks to access variable inputs

// http.onreadystatechange = function() {
//     if(http.readyState != XMLHttpRequest.DONE){ 
//         return;
//     } else if(http.status == 200) {
//         // console.log(http.responseText);

//         let data = http.responseText


//         callback(data);


//     } else {
//         console.log('error occurred' + http.status);
//     }
//     }

//   http.send();  //after http.open. 
// }
// // onreadystatechange should be before http.send()

// // informMe(`currency`, `eur`, function(data){
// //     console.log('wow much data '+data);
// // });


// informMe(`name`, `gb`, function(data){
//     console.log('wow much data '+data);
// });


function whoIsInSpace (callback){
    var http = new XMLHttpRequest(); //new request, class instance

http.open('GET', `http://api.open-notify.org/astros.json`); 
//targetting a specific file location to get information from . but not sent
//use of backticks to access variable inputs

http.onreadystatechange = function() {
if(http.readyState != XMLHttpRequest.DONE){ 
    return;
} else if(http.status == 200) {
    // console.log(http.responseText);

    let data = http.responseText


    callback(data);


} else {
    console.log('error occurred' + http.status);
}
}

http.send();  

}


whoIsInSpace(function(data){
console.log('wow much data '+data);

//extract names from data. push them into array. console log array

});
