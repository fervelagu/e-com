const router = require('express').Router();
const passport = require('passport');
const User = require('../models/User');

router.post('/signup', (req,res,next) => {
    User.register(req.body, req.body.password)
    .then(user => res.json(user))
    .catch(e => next(e))
})

router.post('/login', passport.authenticate('local'), (req,res,next) => {
    User.findById(req.user._id)
    .then(user => {
        res.json(user)
    })
})

module.exports = router;