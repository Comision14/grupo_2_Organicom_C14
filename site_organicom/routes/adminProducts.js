const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');
let {uploadFile} = require('../middleware/uploadFiles');
const {offSession, soloAdmin} = require("../middleware/sessionCheck");

const productValidator = require('../validations/productValidator');

let {
   adminProducts,
   agregarProducto,
   create,
   editarProducto,
   update,
   borrar,
} = require('../controllers/adminController');
const { busqueda } = require('../controllers/productController');

router
   .get('/', offSession, soloAdmin, adminProducts)

   /* GET muestra el formulario */
   .get('/agregar', offSession, soloAdmin, agregarProducto)

   /* POST carga los datos al formulario */
   .post('/agregarProducto', uploadFile.single('imagenes'), productValidator, create)

   .get('/editar/:id', offSession, soloAdmin, editarProducto)

   /* PUT actualiza los datos */
   .put(
      '/editarProducto/:id',
      uploadFile.single('imagenes'),
      productValidator,
      update
   )

   .delete('/delete/:id', borrar)

   .get('/resultadoBusqueda', busqueda)

module.exports = router;
