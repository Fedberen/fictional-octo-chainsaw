var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { layout: 'admin/layout' });
});

router.get('/logout', function(req, res, next) {  //Un logout para destruir sessiones
  req.session.destroy(); //Destruye la session
  res.render('admin/login', 
  { layout: 'admin/layout' 
  });
});



var usuariosModel = require('./../../models/usuariosModel');

router.post('/', async (req, res, next) => {
 try {

  var usuario = req.body.usuario;
  var password = req.body.password;
  var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) { //Es decir, que consiguio data de alguien, lo redirecciona en la sentencia DE ABAJO a novedades
      req.session.id_usuario = data.id; //Esto es lo que me guarda la info en una variable de sesion
      req.session.nombre = data.usuario; //Esto hace que cuando ingrese me tome el nombre que ingreso, para por ej decir: Hola usuario1
       res.redirect('/admin/novedades');
    }
    else { //Ahora si no lo encuentra, lo devuelve al Login
     res.render('admin/login', {
      layout: 'admin/layout',
       error: true //Esto es que, al fallar el Login pone como true a la accion de enviar un error
    });
  }
} catch (error) {
console.log(error);
  }
})


module.exports = router;