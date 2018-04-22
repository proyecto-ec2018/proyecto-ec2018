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

module.exports = router;
