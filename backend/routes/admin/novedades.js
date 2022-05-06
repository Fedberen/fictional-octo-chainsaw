var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel'); // Me traigo el novedadesModel ya que es el archivo que contiene el select para traer las novedades de la bade de datos
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


/* Listar */
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'

      });
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });

  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades //La agrego aca pq el render lo q hace es como que "imprime lo que le traigo al hbs"
  });
});
//El insert de una novedad
router.get('/agregar', (req, res, next) => { //Porque la URL es /agregar y no mas extensa? Porque ya estamos en admin/novedades.. Solo hay q llamar al agregar

  res.render('admin/agregar', {
    layout: 'admin/layout'
    //La agrego aca pq el render lo q hace es como que "imprime lo que le traigo al hbs"
  });
});


router.post('/agregar', async (req, res, next) => {
  try {
    //console.log(req.body); esto lo podria hacer para ver en la consola que info me trae

    var img_id = ''; //Arranca vacio x no sabemos si va a usar una img o no en un principio la novedad
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
      });
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      });
    }
  } catch (error) { //Este para que ess? por si pasa algo como por ej: se me cae el server tonces para no confundirme de si se subio o no, me avisa
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true, message: 'No se cargo la novedad'
    });
  }
});

//Eliminar una novedad

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let novedad = await novedadesModel.getNovedadById(id);
  if (novedad.img_id) {
    await (destroy(novedad.img_id));
  }

  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades')
});

//Modificar una novedad

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadById(id);

  res.render('admin/modificar', {  //Yo al mandar la novedad al render me habilito que la novedad imprima en donde quiero que aparezca osea levanta los valores
    layout: 'admin/layout',
    novedad
  })
});


//Update de la modificacion de la novedad
router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await
          uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = { //Definimos al obj para que refiera al titulo, subtitulo y el cuerpo
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
    }
    await novedadesModel.modificarNovedadById(obj, req.body.id);  //Aca manda a modificar lo que figura en el parentesis trayendo tambien el id, y lo llamo por "body" porque en el formulario tiene un imput = hidden
    res.redirect('/admin/novedades');
  }
  catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true, message: 'No se modifico la novedad'
    })
  }
})




module.exports = router;
