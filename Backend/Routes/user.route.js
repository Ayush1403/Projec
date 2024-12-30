const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user.con');
const authMiddleware = require('../middleware/user.auth.mid');

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
], userController.registerUser);

router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], userController.loginUser);

router.get('/profile', authMiddleware.authuser, userController.getProfile);

module.exports = router;