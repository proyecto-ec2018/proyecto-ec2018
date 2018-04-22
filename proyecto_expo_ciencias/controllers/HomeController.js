module.exports = {
	
	index : function(req, res, next){
		res.render('home', {title: "CAT project"});
	},

	mision : function(req, res, next){
		res.render('extras/mision', {title: "CAT project - Misión"});
	},

	vision : function(req, res, next){
		res.render('extras/vision', {title: "CAT project - Visión"});
	},

	empresas : function(req, res, next){
		res.render('instituciones/empresas-preview', {title: "CAT project - empresas"});
	},

	escuelas : function(req, res, next){
		res.render('instituciones/escuelas-preview', {title: "CAT project - escuelas"});
	},
}