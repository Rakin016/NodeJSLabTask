var express 			= require('express');
var login 				= require('./controller/login');
var company_app 		= express();

company_app.set('view engine', 'ejs');

company_app.use('/login', login);

company_app.listen(3000, function(){
	console.log('express http server started at...3000');
});