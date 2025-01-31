const express = require('express');// libary for the functionalities of server for the node modules
const app = express();// intializing the library functions
require('dotenv/config');// library containning the secret and confidential information of server or anything
const bodyParser= require('body-parser');// for the middleware understanding of obj between backend and frontend
const morgan = require('morgan');
const mongoose = require('mongoose');
//Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
//DATABAS
mongoose.connect(process.env.Connection)
.then(()=> {
    console.log("Database connection is made");
})
.catch((error) => {
    console.log(error);

})


const api= process.env. API_URL;
const port = 8010;
// get from the database and send it to the frontend through the server
// app.get(`${api}/product` ,(req, res)=> {
//     const product = {
//         Pid: 1, 
//         Pname: "Pencil",
//         Pimg: "Pencil Url",
//     }
//     res.send(product);
// })

app.post(`${api}/product`, (req, res)=> {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
})
app.listen(port, ()=> {
    console.log(api);
    console.log('server is listening to {port}');
})