

const sells = require('../model/sellModel')


//---------------------------USER-------------------


//to sell a product by user
exports.sellProductController = async(req, res)=>{

    const { title, size, category, color, condition, material, description, price, dprice } = req.body

    console.log(req.body);


    //here if only one uploaded content then it will be file
    console.log('uploaded files' , req.files);

    console.log(req.payload);
    
    // res.status(200).json('req received')
    const userMail = req.payload;


    try {
    const existingProduct = await sells.findOne({ title, userMail });

    if (existingProduct) {
      console.log('Product Already Selled to Shop');
      return res.status(402).json('Product Already Selled to Shop');
    }

    const newProduct = new sells({
      title,
      size,
      category,
      color,
      condition,
      material,
      description,
      price,
      dprice,
      uploadImages: req.files,
      userMail
    });

    await newProduct.save();

    console.log('Product saved successfully');
    return res.status(200).json(newProduct); 

  } catch (error) {
    console.log('catch error');
    return res.status(500).json(error); 
  }

};


exports.getAllSelledItemsController = async(req, res)=>{

  const userMail = req.payload
  console.log(userMail);
  

    try {

        const allItems = await sells.find( {userMail} ).sort( {_id:-1})
        res.status(200).json(allItems)
        
    } catch (error) {
        res.status(500).json(error)
    }
}


//to delete a perticular product by user
exports.removeProductController = async(req, res)=>{

    const {id} = req.params
    console.log(id);
    

    try {

        await sells.findByIdAndDelete({_id:id})
        res.status(200).json('Deleted')
        
    } catch (error) {
        res.status(500).json(error)
    }

}


//----------------------ADMIN----------------


// logic to get all selled products in user side for approval

exports.getAllUserItemsController = async(req, res)=>{

    try {

        const allItems = await sells.find().sort({_id:-1})
        res.status(200).json(allItems)
        
    } catch (error) {
        res.status(500).json(error)
    }
}



//logic to get single product details of user selled items

exports.getSingleItemsController = async(req, res)=>{

  const {id} = req.params
  console.log(id);

  try {

    const singleItem = await sells.findOne( {_id:id} )
    res.status(200).json(singleItem)
    
  } catch (error) {
    res.status(500).json(error)
  }
  
}


//logic to approve a product
exports.approveProductController = async(req, res)=>{

  const {id} = req.params
  console.log(id);
  
  try {

    const existingProduct = await sells.findOne({_id:id}) 

    const updatedProduct = await sells.findByIdAndUpdate( {_id:id} , {


      title:existingProduct.title,
      size:existingProduct.size,
      category:existingProduct.category,
      color:existingProduct.color,
      condition:existingProduct.condition,
      material:existingProduct.material,
      price:existingProduct.price,
      dprice:existingProduct.dprice,
      uploadImages:existingProduct.uploadImages,
      description:existingProduct.description,
      status:'Approved',
      BroughtBy:existingProduct.BroughtBy,
      userMail:existingProduct.userMail


    },{new:true})

    res.status(200).json(updatedProduct)
    
  } catch (error) {
    res.status(500).json(error)
  }
}



// logic to reject product
exports.rejectProductController = async(req, res)=>{

  const {id} = req.params
  console.log(id);

  try {

    const existingProduct = await sells.findOne({_id:id}) 

    const updatedProduct = await sells.findByIdAndUpdate( {_id:id} , {


      title:existingProduct.title,
      size:existingProduct.size,
      category:existingProduct.category,
      color:existingProduct.color,
      condition:existingProduct.condition,
      material:existingProduct.material,
      price:existingProduct.price,
      dprice:existingProduct.dprice,
      uploadImages:existingProduct.uploadImages,
      description:existingProduct.description,
      status:'Rejected',
      BroughtBy:existingProduct.BroughtBy,
      userMail:existingProduct.userMail


    },{new:true})

    res.status(200).json(updatedProduct)
    
  } catch (error) {
    res.status(500).json(error)
  }
  
}