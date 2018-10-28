const jwt       = require('jsonwebtoken')
const mongoose  = require('mongoose')
const config    = require('../config/config')
const User      = require('../app/model/user')


const verifyTokenMiddleware = function (req, res, next) {
    let token = req.query.token || req.body.token || req.params.token || req.headers['x-access-token'];

    if (token) {

        jwt.verify(token, config.SECRETKEY, (err, decoded) => {
            if (err) {
                return res.send({ 
                    error: true, 
                    message: "Invalid Token" 
                })
            }

            else {
                User.findById(mongoose.Types.ObjectId(decoded))
                .select('-password')
                .exec((err, docs) => {
                    if (err) {
                        return res.send({ error: true })
                    }
                    else if (!docs) {
                        return res.send({ error: true, message: "Invalid Token" })
                    }
                    else { 
                        req.decoded = docs
                        req.token   = token
                        return next();
                    }
                })
            }
        })
    } 
    
    else {
        return res.json({
            error: true,
            message: "Sign in to continue"
        })
    }
}


module.exports = verifyTokenMiddleware;