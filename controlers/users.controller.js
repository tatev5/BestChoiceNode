const User = require('../models/users.model');
const fs =require('fs');
const jwt = require('jsonwebtoken'); 

class UserController {
    static async getAll(req, res) {
        const info = await User.find();
        return info;
    }
static async getOne(req, res) {
        let login = req.body.email;
        let pass = req.body.password;
        if(login && pass){
            const info = await User.findOne({ email: login });
            if(info && pass === info.password){
                const token = jwt.sign({ email: info.email, name: info.name }, '123asdasd');
               return res.json({toke: token, message: 'okey' });
            }
        }
        return res.status(400).json({message: "Incorrect login or password"});
    }
    static async create(req, res) {
       const { name, lastname, email, password} = req.body;
       const UserInfo = await User.findOne({ email: email });
       if(UserInfo){
            return res.status(400).json({message: "Incorrect login or password"});
       }
       else if(name && lastname && email && password){
        const newUser = await User.create(req.body);
            return console.log(req.body);
       }
       return res.status(400).json({message: "Incorrect login or password"})
    }
    static async update(req, res) {
        const info = await User.findByIdAndUpdate(itemId, data);
        return info;
    }
    static async remove(req, res) {
        const info = await User.findByIdAndRemove(itemId);
        return info;
    }
}
module.exports = UserController;
