const fs = require('fs');

//readdir
//stat.isDirectory
//stat.isFile
//fs.stat return error or stat

//want to scan everything inside directory. fs.readdir can see everything in directory. It can return all files in a string

console.log(__dirname); //gives you root directory

// fs.readdir(__dirname, function(err, files){
//     if (err){
//         throw err;
//     }
//     else {
//         console.log(err);
//         console.log(files);
//     }
// })


// //putting above method into a function

// function readdirPromise() {
//     fs.readdir(__dirname, function(err, files){
//         if (err){
//             throw err;
//         }
//         else {
//             console.log(err);
//             console.log(files);
//         }
//     }) 
// }

// readdirPromise();




// //add flexibility. You can pass whatever path you want because above can only pass directory name. This function I can put whatever directory name

// function readdirPromise(pathname) {
//     fs.readdir(pathname, function(err, files){
//         if (err){
//             throw err;
//         }
//         else {
//             console.log(err);
//             console.log(files);
//         }
//     }) 
// }

// readdirPromise(__dirname);









//next step in exercise


// function statPromise(result){
//     fs.stat(result, function(err, stat){
//     if (err) {
//     throw err;
//     }
//     else {
//         console.log(stat)
//         console.log(stat.isDirectory()) //if fs.stats object describes a file directory, will return true
//     }
// })
// }

// statPromise(__dirname + '/' + 'README.md');




// because of dirname input at the end, pathname gives full root directory path.

// function readdirPromise(pathname) {
//     fs.readdir(pathname, function(err, files){
//         if (err){
//             throw err;
//         }
//         else {
//             console.log(err);
//             console.log(files);
//             for (let i = 0; i < files.length; i++){
//                 console.log(files[i]);
//             console.log(pathname + '/' + files[i]);
//             }
//         }
//     }) 
// }

// readdirPromise(__dirname);





//next step in exercise - promise

// let bool = true;
// const promise = new Promise (function(resolve, reject){
//     if (bool === true){
//         resolve('Okay');
//     }
//     else {
//         reject('Not Okay');
//     }
// }) //promise uses callback function. This function must have resolve and reject

// //if resolve is good, then the .then wll console log Okay. .then has a callback function, only one parametere which is whatever you call. Just need to dedicate only a function with only one parameter. That parameter will take actual value from resolve will pass data inside the paraphrase that thcallback function resolve will pass 'okay' string to function

// .then(function(result){
//     console.log(result)
// })

// .catch(function(resultError) {
//     console.log(resultError);
// })

// .finally(function(){
//     console.log('the finish')
// })





//piecing all the functions together

//Tells whether path is file or directory

let fileCount = 0;
let directoryCount = 0;

function statPromise(path){
    return new Promise(function(resolve, reject){
        fs.stat(path, function(err, stat){
            if (err) {
            reject (err);
            }
            else {
                // console.log(stat)
                // console.log(stat.isDirectory()) //if fs.stats object describes a file directory, will return true
                resolve(stat)
            }
        })
    })
    .then(function(result){
        // console.log(result);
        if(result.isFile()){
            console.log('Is file');
            console.log(path);
            fileCount++;
        }
        if(result.isDirectory()){
            console.log('Is directory');
            console.log(path);
            readdirPromise(path);
            directoryCount++;
        }


        
    })
    .catch(function(){
        throw error;
    })
    .finally(function(){
        console.log('fileCount : ' + fileCount);
        console.log('directoryCount : ' + directoryCount);
    })
}

//sees what's inside the path
function readdirPromise(pathname) {
    return new Promise(function (resolve, reject) {
        fs.readdir(pathname, function (err, files) {
            if (err) {
                reject(err);
            }
            else {
                let fullPathArray = []
                for(let i = 0; i < files.length; i++){
                    fullPathArray.push(pathname + '/' + files[i]);
                }
                resolve(fullPathArray);
            }
        })
    })
    .then(function (result) {
        for (let i = 0; i < result.length; i++){
        // console.log(result[i]);
        statPromise(result[i]);
        }



    })
    .catch(function (error) {
        throw error;
    })
}
readdirPromise(__dirname);