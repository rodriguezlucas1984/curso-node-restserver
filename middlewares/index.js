const validarCampos = require("../middlewares/validadar-campos");
const validarJWT = require("../middlewares/validar-jwt");
const validarRoles = require("../middlewares/validar-roles");

module.exports = {
  ...validarRoles,
  ...validarJWT,
  ...validarCampos,
};
