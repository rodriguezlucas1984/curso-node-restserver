const { Router } = require("express");
const { check } = require("express-validator");

const { login } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validadar-campos");

const router = Router();

router.post(
  "/login",
  [
    check("correo", "El correo es obligatorio").isEmail(),
    check("password", "La contarseña es obligatoria").notEmpty(),
    validarCampos,
  ],
  login
);

module.exports = router;
