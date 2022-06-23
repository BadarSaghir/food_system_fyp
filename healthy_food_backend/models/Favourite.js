const mongoose = require('mongoose');
const { number } = require('@hapi/joi');

const MenuSchema = mongoose.Schema({
    
    // act as a forign key
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }



});


module.exports = mongoose.model('Menu', MenuSchema);