var express 			= require('express');
var bodyParser 			= require('body-parser');
var login 				= require('./controller/login');
var admin 				= require('./controller/admin');
var company_app 		= express();

company_app.set('view engine', 'ejs');


company_app.use(bodyParser());
company_app.use('/login', login);
company_app.use('/admin', admin);

company_app.get('/', function(req, res){
	res.send("This is Home page!<br> <a href='/login'>Click here to login</a> ");
});

company_app.listen(3000, function(){
	console.log('express http server started at...3000');
});