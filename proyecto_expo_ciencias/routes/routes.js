var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

router.get('/', controllers.HomeController.index);
router.get('/mision', controllers.HomeController.mision);
router.get('/vision', controllers.HomeController.vision);
router.get('/empresas-vistazo', controllers.HomeController.empresas);
router.get('/escuelas-vistazo', controllers.HomeController.escuelas);


router.get('/registro/instituciones', controllers.UserController.getSignUpInstitucion);
router.get('/registro/estudiantes', controllers.UserController.getSignUpEstudiante);

router.get('/registro', controllers.UserController.getSignUp);
/*router.post('/registro', controllers.UserController.postSignUp);*/

router.get('/inicio-sesion', controllers.UserController.getSignIn);
/*router.post('/inicio-sesion', controllers.UserController.postSignIn);*/


router.get('/proyectos/proyecto_1', controllers.PlantillasController.plantilla_para_proyectos);
router.get('/proyectos/proyecto_2', controllers.PlantillasController.proyecto2);
router.get('/proyectos/proyecto_3', controllers.PlantillasController.proyecto3);
router.get('/proyectos/proyecto_4', controllers.PlantillasController.proyecto4);
router.get('/proyectos/proyecto_5', controllers.PlantillasController.proyecto5);
router.get('/proyectos/proyecto_6', controllers.PlantillasController.proyecto6);


router.get('/retos', controllers.PlantillasController.plantilla_para_retos);
router.get('/empresas/empresa_1', controllers.PlantillasController.plantilla_para_empresas);
router.get('/escuelas/escuela_1', controllers.PlantillasController.plantilla_para_escuelas);
router.get('/escuelas/escuela_2', controllers.PlantillasController.escuela_2);
router.get('/escuelas/escuela_3', controllers.PlantillasController.escuela_3);
router.get('/escuelas/escuela_4', controllers.PlantillasController.escuela_4);
router.get('/escuelas/escuela_5', controllers.PlantillasController.escuela_5);
router.get('/escuelas/escuela_6', controllers.PlantillasController.escuela_6);


router.get('/proyectos', controllers.PlantillasController.plantilla_lista_proyectos);
router.get('/escuelas', controllers.PlantillasController.plantilla_lista_escuelas);
router.get('/empresas', controllers.PlantillasController.plantilla_lista_empresas);


module.exports = router;
