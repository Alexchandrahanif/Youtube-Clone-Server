const handleError = (err, req, res, next) => {
  let code = 500;
  let message = "Internal Server Error";
  console.log(err);
  if (
    err.name === "SequelizeValidationError" ||
    err.name == "SequelizeUniqueConstraintError"
  ) {
    code = 400;
    message = [];
    err.errors.forEach((el) => {
      message.push(el.message);
    });
  } else if (err.name === "Invalid email/password") {
    code = 401;
    message = "Invalid email/password";
  } else if (err.name === "Invalid access_token") {
    code = 401;
    message = "Unauthorized";
  } else if (err.name === "Password is required") {
    code = 400;
    message = "Password is required";
  } else if (err.name === "Email is required") {
    code = 400;
    message = "Email is required";
  } else if (err.name === "JsonWebTokenError") {
    code = 401;
    message = "Invalid token";
  } else if (err.name === "Forbidden") {
    code = 403;
    message = "You are not authorized";
  } else if (err.name === "User Not Found") {
    (code = 400), (message = `User with id ${err.id} Not Found`);
  }
  res.status(code).json({
    message: message,
  });
};

module.exports = handleError;
