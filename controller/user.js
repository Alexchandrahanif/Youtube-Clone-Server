const { comparePassword, createAccessToken } = require("../helper/helper");
const { User } = require("../models/index");
class Controller {
  // Welcome
  static async welcome(req, res, next) {
    try {
      res.status(200).json({
        message: "Welcome Youtube Clone by Alex Chandra Hanif",
      });
    } catch (error) {
      next(error);
    }
  }

  // Register
  static async register(req, res, next) {
    try {
      const { username, email, password, address } = req.body;
      const dataUser = await User.create({
        username,
        email,
        password,
        address,
      });
      res.status(200).json({
        username: dataUser.username,
        email: dataUser.email,
      });
    } catch (error) {
      next(error);
    }
  }

  // Login
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      // cek email dlu
      const dataUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!email) {
        throw { name: "Email is required" };
      }

      if (!password) {
        throw { name: "Password is required" };
      }

      if (!dataUser) {
        throw { name: "Invalid email/password" };
      }

      if (!comparePassword(password, dataUser.password)) {
        throw { name: "Invalid email/password" };
      }

      const payload = {
        id: dataUser.id,
      };

      const access_token = createAccessToken(payload);

      res.status(200).json({
        access_token: access_token,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get All User
  static async getUsers(req, res, next) {
    try {
      const dataUser = await User.findAll();
      res.status(200).json({
        data: dataUser,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get User By Pk
  static async getUser(req, res, next) {
    try {
      const { id } = req.params;
      const data = await User.findByPk(id);
      if (!data) {
        throw { name: "User Not Found", id: id };
      }
      const dataUser = await User.findByPk(id);
      res.status(200).json({
        data: dataUser,
      });
    } catch (error) {
      next(error);
    }
  }

  // Edit User
  static async editUser(req, res, next) {
    try {
      const { id } = req.params;
      const { username, email, password, address } = req.body;
      const data = await User.findByPk(id);
      if (!data) {
        throw { name: "User Not Found", id: id };
      }
      const dataUser = await User.update(
        {
          username,
          email,
          address,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({
        message: `Updated data User with id ${id} successfully`,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete User
  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const data = await User.findByPk(id);
      if (!data) {
        throw { name: "User Not Found", id: id };
      }
      const dataUser = await User.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: `Delete data User with id ${id} successfully`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
