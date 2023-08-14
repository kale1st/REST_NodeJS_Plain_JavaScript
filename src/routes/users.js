const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('../controllers/users')

const router = express.Router();
router.use(bodyParser.json())

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router