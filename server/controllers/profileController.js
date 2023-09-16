const { profiles } = require("../models");
const { tokenGenerator } = require("../helpers/jsonwebtoken");
const { encryptPwd, decryptPwd } = require("../helpers/bcrypt");
class profilesController {
  static async getProfiles(req, res) {
    try {
      const result = await profiles.findAll();
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        eror: err,
      });
    }
  }
  static async findProfile(req, res) {
    try {
      const id = req.params.id;
      const result = await profiles.findOne({ where: { id } });
      if (result !== null) {
        res.status(200).json({
          status: true,
          data: result,
        });
      } else {
        res.status(404).json({
          status: true,
          message: "Profile not found",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }
  static async addProfile(req, res) {
    try {
      const { email, password, name, role, vehicleId } = req.body;
      const result = await profiles.create({
        email,
        password,
        name,
        role,
        vehicleId,
      });
      if (result !== null) {
        res.status(201).json({
          status: true,
          message: "Profile has been added",
          data: result,
        });
      } else {
        res.status(400).json({
          status: false,
          message: "Profile can't added in list",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        eror: err,
      });
    }
  }
  static async editProfile(req, res) {
    try {
      const id = req.params.id;
      const { email, password, name, role, vehicleId } = req.body;

      const result = await profiles.update(
        {
          email,
          password,
          name,
          role,
          vehicleId,
        },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }

  static async deleteProfile(req, res) {
    try {
      const id = req.params.id;
      const result = await profiles.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }

  static async register(req, res) {
    try {
      const { email, name, password, confirmPassword, role } = req.body;
      if (password === confirmPassword) {
        const checkEmail = await profiles.findOne({ where: { email } });
        if (checkEmail === null) {
          const result = await profiles.create({
            email,
            name,
            role,
            password: encryptPwd(password),
          });
          console.log(result);
          if (result !== null) {
            res.status(201).json({
              status: true,
              message: `${email} has been created!`,
              data: result,
            });
          } else {
            res.status(400).json({
              status: false,
              message: "account failed to created!",
            });
          }
        } else {
          res.status(400).json({
            status: false,
            message: "email not available",
          });
        }
      } else {
        res.status(400).json({
          status: false,
          message: "password and confirm password not match!",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        error: err,
      });
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await profiles.findOne({ where: { email } });
      console.log(result);
      if (result !== null) {
        if (decryptPwd(password, result.password)) {
          const access_token = tokenGenerator(result);
          console.log(access_token);
          res.status(202).json({
            status: true,
            message: "login succesful",
            data: {
              id: result.id,
              email: result.email,
              name: result.name,
              role: result.role,
              vehicleId: result.vehicleId,
              access_token: access_token,
            },
          });
        } else {
          res.status(400).json({
            status: false,
            message: "invalid password!",
          });
        }
      } else {
        res.status(404).json({
          status: false,
          message: `${email} was not registered!`,
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        error: err,
      });
    }
  }
}

module.exports = profilesController;
