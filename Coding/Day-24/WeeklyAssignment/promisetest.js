// const promise = new Promise ((resolve, reject) => {
//     resolve();
// });

// promise
//     .then(() => console.log('I ran'))
//     .then(() => { throw new Error('Help I am an error'))
//     .then(() => console.log('I did not run'))
//     .catch((err) => console.log('uh oh error', err));

// const axios = require ('axios') 

// axios.get("/users")
//     .then(res=> console.log(res))
//     .catch(err=> console.log(err));

const fs = require ('fs');

function readdir(path){
    return new Promise ((resolve,reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

module.exports = readdir();