const router = require('express').Router();
const verify = require('./verifyToken');
const Recipe = require('../model/Recipe');

router.post('/add', verify, async (req,res) => {
    //create new recipe
    const recipe = new Recipe({
        creator: req.user._id,
        name: req.body.name,
        description: req.body.description,
        url: req.body.url,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    });
    try{
        const savedRecipe = await recipe.save();
        res.send("Success");
    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/register', async (req,res) => {
       //create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;