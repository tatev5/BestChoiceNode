var express = require('express');
var router = express.Router();
const UserController = require('../controlers/users.controller');

 
/* GET users listing. */
router.post('/',UserController.create);
router.post('/login', UserController.getOne); 
router.put('/:id', UserController.update);
router.delete('/:id', UserController.remove);

module.exports = router;
