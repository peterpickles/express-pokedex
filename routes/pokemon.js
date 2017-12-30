var express = require('express');
var router = express.Router();
var db = require("../models");

// GET - return a page with favorited Pokemon
router.get('/', function(req, res) {
    // TODO: render favorites
	db.favorite.findAll().then(function(favorite) {
		res.render("./pokemon/index", {favorite:favorite});
	});
});

// POST - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
    db.favorite.create(req.body).then(function(createArticle){
    	res.redirect("/pokemon");
    });
});


module.exports = router;
