const { Router } = require("express");
const { check } = require("express-validator");

const { login, googleSingin } = require("../controllers/auth");
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

router.post(
  "/google",
  [check("id_token", "Es el id_token es necesario").notEmpty(), validarCampos],
  googleSingin
);

module.exports = router;
