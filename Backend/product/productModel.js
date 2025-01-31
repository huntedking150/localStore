import mongoose, { Schema } from "mongoose";
//set rules
const productSchema = new Schema({
    name: String,
    image: String, 
    countInStock: Number

});

// create table 
const Product = mongoose.model('product', productSchema);

export default Product;