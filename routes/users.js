var express = require('express');
var router = express.Router();
const UserController = require('../controlers/users.controller');
 
/* GET users listing. */
router.get('/', UserController.getAll);

router.post('/',UserController.create);

router.get('/:id', UserController.getOne);

router.put('/:id', UserController.update);

router.delete('/:id', UserController.remove);

module.exports = router;
