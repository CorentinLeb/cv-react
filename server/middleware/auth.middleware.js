const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodeToken) => {
            if (err) {
                res.locals.user = null;
                res.cookie('jwt', '', {maxAge: 1});
            } else {
                let user = await UserModel.findById(decodedToken);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports.requireAuth = (res, req, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err);
            } else {
                console.log(decodedToken.id);
                next();
            }
        });
    }
};