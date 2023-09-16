const bcrypt = require("bcrypt")
const saltRound = 5

const encryptPwd = (data) => {
return bcrypt.hashSync(String(data),saltRound)
}

const decryptPwd = (data, hash) => {
return bcrypt.compareSync(String(data), hash)
}

module.exports = {
    encryptPwd, decryptPwd
}