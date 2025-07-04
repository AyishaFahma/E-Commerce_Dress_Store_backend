

//router specific middleware - token verification for a perticular path

const jwt = require('jsonwebtoken')


const jwtMiddleware = (req, res, next)=>{

    const token = req.headers["authorization"].split(' ')[1]
    console.log(token);

    try {

        const jwtResponse = jwt.verify(token , process.env.JWTSECRETKEY)

        console.log(jwtResponse);

        next()
        
        
    } catch (error) {
        res.status(401).json("Authorization Failed!" , error)
    }
    

}

module.exports = jwtMiddleware

