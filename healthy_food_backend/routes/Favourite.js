const express = require('express');
const Order = require('../models/Order');
const Menu = require('../models/Menu');
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const auth = require('../middlewares/auth');
const Favourite = require('../models/Favourite');



const router = express.Router();


router.get('/:id', auth, async (req, res) => {
try{
    const id=req.params.id
    const uid = req.user.id
    is_fav = await Favourite.exists({
        user_id:uid,
        product_id:pid

    })
    res.send({is_fav:is_fav})
}catch{
    res.send({is_fav:false})
}
    
});

router.post('/:id', auth, async (req, res) => {

    const id=req.params.id
    const uid = req.user.id
    is_fav = await Favourite.exists({
        user_id:uid,
        product_id:pid

    })
    if(is_fav){

    Favourite.remove({
            user_id:uid,
            product_id:pid
    }).exec()
    res.send({is_fav:false})
}else{
    fav=Favourite({
        user_id:uid,
        product_id:pid
    })
    res.send({is_fav:true})
}

    
    
});

module.exports = router;