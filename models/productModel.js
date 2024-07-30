

const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter Product Name"]
        },
        quantity: {
            type: number,
            required: true,
            default: 0,
        },
        price: {
            type: number,
            require: true,
        },
        image: {
            type: String,
            required: false,
        },

    },
    {
        timestamps: true,
    }
);


// collection name is product 
const product = mongoose.model("product", productSchema);
module.exports = product;


/* index.js > app route ________:
// import model
const Product = require('./productModel')

// post route
app.post("/product", async(req, res)=> {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product)
    }catch(error){
            console.log(error.message);
            res.status(500).json({message: error.message})
        }
    })

    // get route
app.get('/products', async(req, res)=> {
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(error){
            console.log(error.message)
            res.status(500).json({message: error.message})
        }
    })

    // single product get route
app.get('/products/:id', async(req, res)=> {
    try{
        const id = req.params; 
        const product = await Product.findById(id)
        res.status(200).json(product)
    }catch(error){
            console.log(error.message)
            res.status(500).json({message: error.message})
        }
    })

    // update product route 
    app.put('product/:id', async(req, res)=> {
        try{
            const id = req.params; 
            const product = await Product.findByIdAndUpdate(id, req.body);
            // if product not found 
            if(!product){
            res.status(404).json({message: "can't find any product "})
                }
            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct)
        }catch(error){
            console.log(error.message)
            res.status(500).json({message: error.message})
            }
        })
*/