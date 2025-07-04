// import dotenv module
require('dotenv').config() // to load environment variables

//import express
const express = require('express')

//import cors to connect with frontend
const cors = require('cors')

//import routes
const routes = require('./routes')

//import connection files 
require('./connection')







//create server
const dress_store_server = express()

//use cors to connect with frontend
dress_store_server.use(cors())

//parse the json data if data coming from front and backend
dress_store_server.use(express.json())

//to use routes
dress_store_server.use(routes)


//nammal upload cheytha images eppo Imageuploads folder ilanu ullath so athine frontendil kittenam athinu vendi
// express.static() method is used to export the folder from server 
dress_store_server.use('/imgUpload' , express.static('./Imageuploads'))

//setup port for the server
const PORT = 5000 || process.env.PORT

//listen to port
dress_store_server.listen(PORT , ()=> {
    console.log(`server running successfully at port number ${PORT}`);
    
})
