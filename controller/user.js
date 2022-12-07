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
      res.status(200).json({
        message: "Register data user",
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
      res.status(200).json({
        message: "Daftar nama user",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getUser(req, res, next) {
    try {
      const { id } = req.params;
      res.status(200).json({
        message: `Daftar nama user ${id}`,
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
      res.status(200).json({
        message: `Menghapus data User ${id}`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
