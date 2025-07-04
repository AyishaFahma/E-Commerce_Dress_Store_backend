// to access the uploaded images
const multer = require('multer')


const storage = multer.diskStorage( {
    destination: (req, file , callback)=>{
        callback(null , './Imageuploads')
    },
    filename:(req, file , callback)=>{
        callback(null , `Image - ${file.originalname}`)
    }
})


const fileFilter = (req , file ,callback) =>{

    // in frontend the type key give the filetype but in backend mimetype give the typeof file

    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){

        //To accept the file pass `true`
        callback(null , true)
    }
    else{

        //To reject the file pass `false`
        callback(null , false)
        // pass an error statement why it accept
        return callback(new Error('Only accept png , jpg and jpeg files'))
    }
}



//configuration
const multerConfig = multer({
    storage,
    fileFilter
})

module.exports = multerConfig