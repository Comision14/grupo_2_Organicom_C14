const {check, body}= require("express-validator")

module.exports = [
    check("nombre")
        .notEmpty().withMessage("debes otorgarle un nombre")
        .isLength({min:2})("debe tenes como minimo 2 caracteres"),
    check("marca")
        .notEmpty().withMessage("debes ingresar una marca"),
    check("categoria")
        .notEmpty().withMessage("debes ingresar una categoria"),
    check("origen")
        .notEmpty("debes ingresar un origen"),
    check("precio")
        .notEmpty().withMessage("debes ingresar un precio")
]