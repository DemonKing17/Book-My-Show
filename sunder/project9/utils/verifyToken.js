const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "anyKey", (err, decoded) => {
      if (err) {
        reject({
          status: "failed",
          msg: "invalid token or token expired",
        });
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = verifyToken;
