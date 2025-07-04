const products = require("../model/productModel");


// add a product by admin
exports.addProductController = async(req , res) => {
    const { title,size,category,color,condition,material,bust,waist,hip,sku,rating,frontlength,backlength,price,dprice } = req.body

    //console.log( title,size,category,color,condition,material,bust,waist,hip,sku,rating,frontlength,backlength,price,dprice );

    console.log(req.body);
    console.log(req.files);

    try {

        const existingProduct = await products.findOne({title,sku})

        if(existingProduct){
            res.status(401).json('Product Already exist')
        }
        else{
            const newProduct = new products( {
                title,
                size,
                category,
                color,
                condition,
                material,
                bust,
                waist,
                hip,
                sku,
                rating,
                frontlength,
                backlength,
                price,
                dprice,
                uploadImages:req.files
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }


        
    } catch (error) {
        res.status(500).json(error)
        
    }
       
}

//to view all products in admin side
exports.viewAllProductController = async(req, res)=>{
    try {
        const allProducts = await products.find().sort({_id:-1})
        res.status(200).json(allProducts)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

// logic to view a perticular product both admin and user
exports.viewSingleProductController = async(req, res)=>{

    const {id} = req.params
    console.log(id);

    try {
        const specificProduct = await products.findOne( {_id:id})
        res.status(200).json(specificProduct)
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}


// logic to delete a product
exports.deleteProductController = async(req,res)=>{

    const {id} = req.params
    console.log(id);

    try {
        await products.findByIdAndDelete( {_id:id})
        res.status(200).json('Deleted')
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}


//logic for get all products in user side
exports.getAllProductsUserController = async(req,res)=>{

    try {

        const allProductsUser = await products.find().sort({_id:-1})
        res.status(200).json(allProductsUser)
        
    } catch (error) {
        res.status(500).json(error)
    }
}