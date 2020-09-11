const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    creator:{
        type: String,
        required: true,
        max: 60,
        min: 4
    },
    name:{
        type: String,
        required: true,
        max: 60,
        min: 4
    },
    description:{
        type: String,
        required: true,
    },
    url: {
        type: String,
    },
    ingredients: [{
        ingredient:{
            type: String
        },
        measurement:{
            type: String
        }
    }],
    directions:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Recipe',recipeSchema);