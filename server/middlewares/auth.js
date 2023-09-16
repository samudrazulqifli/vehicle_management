const { tokenVerifier } = require("../helpers/jsonwebtoken");

const auth = (req, res, next) => {
  const access_token = req.headers.access_token;
  if (access_token) {
    try {
      const verifyToken = tokenVerifier(access_token);
      req.userData = verifyToken;
      next();
    } catch (err) {
      res.status(401).json({
        status: false,
        message: "Token Not Authenticated",
      });
    }
  } else {
    res.status(404).json({
      status: false,
      message: "Access Token not Found!",
    });
  }
};

module.exports = auth