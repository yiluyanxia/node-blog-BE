const express = require('express');

const router = express.Router();

const userController = require('./userController.js')

router.post('/reg', userController.reg);
router.post('/login', userController.login);


export default router
