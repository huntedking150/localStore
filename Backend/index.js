import  Product from './product/productModel.js';
import express from 'express';// libary for the functionalities of server for the node modules
const app = express();// intializing the library functions
import 'dotenv/config';// library containning the secret and confidential information of server or anything
import bodyParser from 'body-parser';// for the middleware understanding of obj between backend and frontend
import morgan from 'morgan';
import mongoose  from 'mongoose';
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
    const product = new Product({
        id: req.body.Pid,
        name: req.body.name,
        brand: req.body.brand,
        image: req.body.image
    })
    //? save it to the database
product.save()
.then((createdProduct => {
    res.status(201).json(createdProduct);
}))
.catch((err)=> {
    res.status(500).json({
        error: err, 
        success: false
    })
})

})

app.listen(port, ()=> {
    console.log(api);
    console.log('server is listening to {port}');
})