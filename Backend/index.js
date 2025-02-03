import  Product from './product/productModel.js';
import express from 'express';// libary for the functionalities of server for the node modules
const app = express();// intializing the library functions
import 'dotenv/config';// library containning the secret and confidential information of server or anything
import bodyParser from 'body-parser';// for the middleware understanding of obj between backend and frontend
import morgan from 'morgan';
import mongoose  from 'mongoose';
import productsRoute from './product/product.router.js';

const api= process.env. API_URL;
//Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(`${api}/product`, productsRoute)
//DATABAS
mongoose.connect(process.env.Connection)
.then(()=> {
    console.log("Database connection is made");
})
.catch((error) => {
    console.log(error);

})



const port = 8010;




app.listen(port, ()=> {
    console.log(api);
    console.log('server is listening to {port}');
})