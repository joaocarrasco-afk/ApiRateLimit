const rateLimit = require("express-rate-limit");

const limiter = rateLimit(
  {
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // 5 requisições
  message: "Muitas requisições, tente novamente depois. João RGM 2417928"
}
);

module.exports = limiter;