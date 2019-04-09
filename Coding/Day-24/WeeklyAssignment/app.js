//server
//Setting up express
//setting up routes
//setting up index page


// const express = require ('express'); //Read Express documnetation. Make 3 routes??
// const app = express();

// app.get('/', (req, res) => {

// }

const fs = require('fs');
const express = require ('express');
const bodyParser = require('body-parser');
const multer = require('multer'); //body object and a file or files object to the request object


const app = express();
const upload = multer();

const port = process.env.PORT || 4000;


//middleware for program. app.use bodyParser allows us to read data, fileUpload allows express to handle different files uploaded to server
app.use(bodyParser.urlendcoded({extended: false}));
app.use(fileUpload());

//uploadDirect = path to directory files where we will store cached files, path.sep provides the platform specific path segment separator
const uploadDirectory = __dirname + path.sep + 'files';

//code to serve folder files to the server - allow user access to the folder

app.use(express.static('files'))

//declare variable cache as object so it can store array of files
let caches = {};

//promise to read and write files to cache
//writeFile is function which takes name of file and body for storage - will write file to our uploadDirectory 'files

function writeFile(name, body){
    return(new Promise((resolve, reject) => {
        fs.writeFile(uploadDirectory + path.sep + name, body, (err) => {
            if (err){
                return reject(err);
            }
            resolve(name);
        });
    })).then(readFile);
}

//readFile takes file as input
function readFile(file){
    return (new Promise((resolve, reject) => {
        fs.readFile(uploadDirectory + path.sep + file, (err, body) => {
            if(err){
                return reject (err);
            }
            resolve(body);
        });
    }));
}

//when go to localhost 4000, this code serves index.html
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

//handle request to and from server
// the get request takes :name as parameter, looks for any file in directory 'files' with same name that pass through readFile function if there is no name with parameter, try to assign the file a name, otherwise get the file in array caches with name specified in our parameteres and return body, otherwise send an error message

app.get('/files/:name', (req,res) => {
    if(caches[req.params.names] == null){
        caches[req.params.name]
    }
    caches [req.params.name]
    .then((body) => res.send(body))
    .catch((e) => res.status(500).send (e.message));
});






app.get('/', (req,res) => {
    res.send('Express http server');
})

app.get('/welcome', function(req,res){
    res.send('Hello welcome to my http server');
});

app.use(function(req,res,next){
    res.status(404).send('sorry, that route doesnt exist')
});

app.listen(4000);


