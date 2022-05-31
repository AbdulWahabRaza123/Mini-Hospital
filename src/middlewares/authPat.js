const jwt = require('jsonwebtoken');
const Patient = require('../models/Patients');
const auth = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token,"mynameisabdulwahabraza");
        const user = await Patient.findOne({ id: verifyUser.id });
        req.token = token;
        req.user = user;
        next();
    }catch(e) {
        res.status(401).send(e);
    }
}
module.exports = auth;