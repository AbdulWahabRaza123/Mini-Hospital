const jwt = require('jsonwebtoken');
const Docter = require('../models/docters');
const auth = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token,"mynameisabdulwahabraza");
        const user = await Docter.findOne({ id: verifyUser.id });
        req.token = token;
        req.user = user;
        next();
    }catch(e) {
        res.status(401).send(e);
    }
}
module.exports = auth;