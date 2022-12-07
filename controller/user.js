const { User } = require("../models/index");
class Controller {
  static async welcome(req, res, next) {
    try {
      res.status(200).json({
        message: "Welcome Youtube Clone by Alex Chandra Hanif",
      });
    } catch (error) {
      next(error);
    }
  }
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

  static async login(req, res, next) {
    try {
      res.status(200).json({
        message: "Login user",
      });
    } catch (error) {
      next(error);
    }
  }

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
  static async editUser(req, res, next) {
    try {
      const { id } = req.params;
      res.status(200).json({
        message: `Edit data User ${id}`,
      });
    } catch (error) {
      next(error);
    }
  }

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
