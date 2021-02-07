const jwt = require('jsonwebtoken');
const users = require("../models/users.model");


async function authorizat (req, res, next) {
  try {
    const token = req.body.authorization;
    const decoded = jwt.verify(token, '123asdasd');
    console.log(decoded);
    const user = await users.findOne({email: decoded.email});
    if (user) {
      res.json(user);
      return next();
    }
    return res.status(403).json({message: "Not Verified User"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }

}

module.exports = authorizat;
