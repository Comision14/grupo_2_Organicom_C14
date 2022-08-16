let multer = require ("multer");
let path = require ("path")

const storageProducts = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/imgs/products_images'));
   },
   filename: (req, file, cb) => {
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
   },
});

const uploadFile = multer({ 
   storage : storageProducts
});

const storageUsers = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../public/imgs/users_images'));
   },
   filename: (req, file, cb) => {
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
   },
});
const uploadAvatar = multer({ 
   storage : storageUsers
});


module.exports = {
   uploadFile,
   uploadAvatar
}