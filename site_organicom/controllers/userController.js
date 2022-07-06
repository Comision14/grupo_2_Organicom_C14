const fs = require('fs');
const usuarios = require("./data/users.json")
let {guardarUser}= require("./data/dataFS")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator");


//armado de logica register Alex <3
module.exports = {
   register: (req, res, next) => {
      return res.render('users/register',{session : req.session});
   },
   processRegister : (req, res, next)=>{

      let lastId = 0;
      usuarios.forEach(user => {
          if (user.id > lastId) {
             lastId = user.id
          }
      });
      
      let {nombre, email, number, password} = req.body

      let newUser = {
         id : lastId + 1,
         nombre,
         email,
         number,
         password : bcrypt.hashSync(password, 10),
         rol : "user",
         avatar : "/assets/img/default.png"
      };
      usuarios.push(newUser);
      guardarUser(usuarios)

      res.redirect("/")
   //SI HAY DUDAS, REVISAR EL ADMINCONTROLLER PARA ENTENDER COMO FUNCIONA, PARA TENER UNA REFERENCIA <3
   //FALTAN COSAS POR AGREGAR PERO LAS SUBO DE A POCO
   //armado de logica register Alex <3
   },
   login : (req, res, next)=>{
      return res.render("users/login-lateral")
   },
   processLogin : (req, res, next)=>{
      let errors = validationResult(req)
      if (errors.isEmpty()) {
         let {id, nombre, email, password, avatar, rol} = usuarios.find(user => user.email === req.body.email)
         req.session.user = {
            id,
            nombre,
            email,
            password,
            avatar,
            rol
         }
         
         res.locals.user = req.session.user
         res.redirect("/")

      }else{
         res.send(errors)
      }
      next()
      //el next esta de mas
      //Logica del login consultas a Alex <3
      
   },
   logout : (req, res, ) => {
      req.session.destroy()
      res.redirect("/")
      //Logica del logout consultas a Alex <3
   },

   profile:(req,res) =>{
      let id = req.session.id
      const users = JSON.parse(fs.readFileSync('./controllers/data/users.json','utf-8'));
      const user = users.find(user => user.id === id);
      
      return res.render('users/profile',{
         user,
         session : req.session 
         
      })
   }
   
};
