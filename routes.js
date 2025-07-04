//import express to set routes - a class called router which helps to setup path
const express = require('express')

const multerConfig = require('./middleware/multerMiddleware')

// import controllers to use
const userController = require('./controllers/userController')

//import product controller
const productController = require('./controllers/productController')

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



//export routes
module.exports = routes