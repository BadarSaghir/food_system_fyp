const express = require('express');
const Order = require('../models/Order');
const Menu = require('../models/Menu');
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const auth = require('../middlewares/auth');
const Favourite = require('../models/Favourite');
const User = require('../models/User');



const router = express.Router();


router.get('/', auth, async (req, res) => {
try{
    const user=await User.find({_id:req.user.id})
    console.log(user.fav)
    res.send({is_fav:user.fav})
}catch{
    res.send({is_fav:false})
}
    
});

router.post('/:id', auth, async (req, res) => {



    
    
});

module.exports = router;