var mysql = require('mysql');

module.exports = {

	getSignUp : function(req, res, next){
		return res.render('users/signup', {title: 'CAT project - Registro'});
	},

	getSignIn : function(req, res, next){
		return res.render('users/signin', {title: 'CAT project - Iniciar Sesión'});
	},

	getSignUpEstudiante : function(req, res, next){
		return res.render('users/registroEstudiantes', {title: "Registro estudiantes"});
	},

	getSignUpInstitucion : function(req, res, next){
		return res.render('users/registroInstituciones', {title: "Registro empresas"});
	},

	postSignUp : function(){
		return;
	},

	postSingIn : function(){
		return;
	}

};