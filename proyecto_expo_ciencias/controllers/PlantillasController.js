module.exports = {
  
  // Lo malo de por ahora es que debemos tener una renderarización por cada página

  plantilla_para_proyectos : function(req, res, next){
    return res.render('proyectos/plantilla_proyectos', {title: "CAT - project | Proyectos"});
  },

  plantilla_para_retos : function(req, res, next){
    return res.render('retos/plantilla_retos', {title: "CAT - project | Retos"});
  },

  plantilla_para_empresas : function (req, res, next){
    return res.render('instituciones-escuelas/plantilla_empresa', {title: "CAT - project | Empresas"})
  },

  plantilla_para_escuelas : function (req, res, next){
    return res.render('instituciones-escuelas/plantilla_escuela', {title: "CAT - project | Empresas"})
  },

}