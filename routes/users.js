var express = require('express');
var router = express.Router();
const UserController = require('../controlers/users.controller');
const Product = require('../Product/product');
 
/* GET users listing. */
router.post('/',UserController.create);
router.post('/login', UserController.getOne); 
router.put('/:id', UserController.update);
router.delete('/:id', UserController.remove);

/* GET product listing. */
router.get('/', Product.getOne);

module.exports = router;
