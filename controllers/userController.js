//logic to register

const users = require("../model/userModel");

const jwt = require('jsonwebtoken')

exports.registerController  = async (req, res) =>{
    //logic
    const { username , email , password } = req.body
    console.log(username , email , password);
    
    try {
        const existingUser = await users.findOne({email})

        if(existingUser){
            res.status(406).json('User Already Exist')
        }
        else{
            const newUser = new users( {
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

        
    } catch (error) {
        res.status(500).json(error)
    }
    
}


exports.loginController = async(req, res) => {
    const {email , password} = req.body
    console.log(email,password);

    try {

        const existingUser = await users.findOne( {email})

        if(existingUser){
            if(existingUser.password == password){
                // here jwt token is used to create sign method is used

                const token = jwt.sign( {userMail:existingUser.email} , process.env.JWTSECRETKEY)

                res.status(200).json({existingUser , token})
            }
            else{
                res.status(406).json('Invalid Credentials')
            }

        }
        else{
            res.status(401).json('User Does not Exist ! Please Register ')
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}