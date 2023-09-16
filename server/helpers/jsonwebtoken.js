const jwt = require("jsonwebtoken");
const secretCode = process.env.SECRET_CODE || "vehicleManagement";

const tokenGenerator = (data) => {
  const { id, name, email, role, vehicleId } = data;
  return jwt.sign(
    {
      id,
      email,
      name,
      role,
    },
    secretCode
  );
};
const tokenVerifier = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
