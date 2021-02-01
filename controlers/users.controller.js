const User = require('../models/users.model');




class UserController {
    static async getAll(req, res) {
        const info = await User.find();
        let login = req.query.name;
        let pass = req.query.password;
        
        for(let i = 0; i < info.length; i++){
           if(info[i].name === login && info[i].password === pass){
              res.json(info[i]);
           }
        }
        
    }

    static async getOne(req, res){
        console.log(req.query,"3");
        const info = await User.findById(req.params.id);
        return info;
    }
    
    static async create(req, res) {
        console.log(req.body,"3");
        if(req.query.pass1===req.query.pass2 && req.query.name && req.query.lastname && req.query.email){
            const info = await User.create(req.query);
            console.log(req.query)
            res.json(info)
        }
        
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