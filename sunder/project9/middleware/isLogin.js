const getToken = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  const token = getToken(req);
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.json({
      message: "Invalid/Expired token",
    });
  }
  next();
};
module.exports = isLogin;
