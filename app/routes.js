//require express
var express= require('express');
var path = require ('path');

//create our router object
var router= express.Router();


//export our router
module.exports= router;

//route for our homepage
router.get ('/', function(req,res){
	res.render('pages/home');
});

//route for our about page
router.get ('/about', function(req,res){
	var users= [
	 {name: 'Jontoe', email: 'jontoearboleda@gmail.com', avatar: 'http://placekitten.com/600/900'},
	{name: 'Ariane', email: 'jontoearboleda@gmail.com', avatar: 'http://placekitten.com/400/500'},
	{name: 'Nikki', email: 'ikkinanne@gmail.com', avatar: 'http://placekitten.com/800/900'},
	{name: 'Yenyen', email: 'yenyen@gmail.com', avatar: 'http://placekitten.com/700/700'}];

	res.render('pages/about', {users: users});


});

router.get('/contact', function(req,res) {
	res.render('pages/contact');
});

router.post ('/contact', function(req,res) {
	// console.log (req.body.message);
	res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});