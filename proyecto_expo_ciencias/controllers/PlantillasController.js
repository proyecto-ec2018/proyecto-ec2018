module.exports = {

  // Lo malo de por ahora es que debemos tener una renderarización por cada página

  plantilla_para_proyectos : function(req, res, next){
    return res.render('proyectos/plantilla_proyectos', {title: "Distribuciones muestrales"});
  },

  plantilla_para_retos : function(req, res, next){
    return res.render('retos/lista_retos', {title: "CAT - project | Retos"});
  },

  reto_1 : function(req, res, next){
    return res.render('retos/reto_1', {title: "Poda alfa-beta | retos"});
  },

  reto_2 : function(req, res, next){
    return res.render('retos/reto_2', {title: "Formulario | retos"});
  },

  reto_3 : function(req, res, next){
    return res.render('retos/reto_3', {title: "Centralizador | retos"});
  },

  plantilla_para_empresas : function (req, res, next){
    return res.render('instituciones-escuelas/plantilla_empresa', {title: "CAT - project | Empresas"})
  },

  plantilla_para_escuelas : function (req, res, next){
    return res.render('instituciones-escuelas/plantilla_escuela', {title: "Ciencias de la Computación"})
  },
  escuela_2 : function (req, res, next){
    return res.render('instituciones-escuelas/escuela_2', {title: "Lic. Matemáticas"})
  },
  escuela_3 : function (req, res, next){
    return res.render('instituciones-escuelas/escuela_3', {title: "Ing. Sistemas computacionales"})
  },
  escuela_4 : function (req, res, next){
    return res.render('instituciones-escuelas/escuela_4', {title: "COBACH: Villa de Seris"})
  },
  escuela_5 : function (req, res, next){
    return res.render('instituciones-escuelas/escuela_5', {title: "Cecytes: La manga"})
  },
  escuela_6 : function (req, res, next){
    return res.render('instituciones-escuelas/escuela_6', {title: "Maestría en Matemáticas"})
  },

  plantilla_lista_proyectos : function(req, res, next) {
    return res.render('proyectos/lista_proyectos', {title: "CAT - project | proyectos"});
  },

  plantilla_lista_escuelas : function(req, res, next) {
    return res.render('instituciones-escuelas/lista_escuelas', {title: "CAT - project | escuelas"});
  },

  plantilla_lista_empresas : function(req, res, next) {
    return res.render('instituciones-escuelas/lista_empresas', {title: "CAT - project | empresas"});
  },

  proyecto2 : function(req,res,next){
    return res.render('proyectos/proyecto_2', {title: "Números de seguridad en empresas"})
  },

  proyecto3 : function(req,res,next){
    return res.render('proyectos/proyecto_3', {title: "Gato81"})
  },

  proyecto4 : function(req,res,next){
    return res.render('proyectos/proyecto_4', {title: "CAT-Project"})
  },

  proyecto5 : function(req,res,next){
    return res.render('proyectos/proyecto_5', {title: "Introducción a Shiny de R con estadística"})
  },

  proyecto6 : function(req,res,next){
    return res.render('proyectos/proyecto_6', {title: "El doblaje"})
  },
  empresa_2 : function (req, res, next){
    return res.render('instituciones/empresa_2', {title: "TelTec"})
  },
  empresa_3 : function (req, res, next){
    return res.render('instituciones/empresa_3', {title: "Aliento"})
  },
  empresa_4 : function (req, res, next){
    return res.render('instituciones/empresa_4', {title: "Save D' World"})
  },
  empresa_5 : function (req, res, next){
    return res.render('instituciones/empresa_5', {title: "Micro-Macro"})
  },
  empresa_6 : function (req, res, next){
    return res.render('instituciones/empresa_6', {title: "CONT-Mex"})
  },

}
