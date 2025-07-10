//import express to set routes - a class called router which helps to setup path
const express = require('express')

const multerConfig = require('./middleware/multerMiddleware')

// import controllers to use
const userController = require('./controllers/userController')

//import product controller
const productController = require('./controllers/productController')

//import sell controller
const sellController = require('./controllers/sellController')

//import jwtmiddleware
const jwt = require('./middleware/jwtMiddleware')

// instance for the class Router
const routes = new express.Router()







//path to Register a user / admin
routes.post('/register' , userController.registerController)

//path to login
routes.post('/login' , userController.loginController)


//path to view a perticular product in both admin and user
routes.get('/view-product/:id' , productController.viewSingleProductController)



// ----------------------ADMIN----------------------

//path to add a new product/dress
routes.post('/add-product' ,multerConfig.array("uploadImages" , 3) , productController.addProductController)

//path to view all product
routes.get('/view-product', productController.viewAllProductController)

//path to delete a product
routes.delete('/delete-product/:id' , productController.deleteProductController)


//path to view all user selled products
routes.get('/view-alluser-product' , sellController.getAllUserItemsController)


//path to view single product selled by the user when modal opens
routes.get('/view-single-useritems/:id' , sellController.getSingleItemsController)


//path to approve a product
routes.put('/approve-product/:id' , sellController.approveProductController)


//path to reject product
routes.put('/reject-product/:id' , sellController.rejectProductController)




//---------------------------USER----------------------------

//path to get all product in shopall path
routes.get('/view-allproduct-user' , jwt, productController.getAllProductsUserController)


//path to get single category
routes.get('/view-single-category' ,jwt, productController.getSingleCategoryController)


//path to add a product for selling
routes.post('/addto-sell-products' , jwt , multerConfig.array('uploadImages' , 3) , sellController.sellProductController)


//path to get all selled product status
routes.get('/view-selled-product', jwt ,sellController.getAllSelledItemsController)


//path to delete a selled product
routes.delete('/delete-sell-product/:id' , sellController.removeProductController)



//export routes
module.exports = routes