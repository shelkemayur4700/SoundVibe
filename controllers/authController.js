const { handleCallback, getLoginUrl } = require("../services/authService");

const logIn = async (req, res, next) => {
  try {
    const loginUrl = getLoginUrl();
    res.redirect(loginUrl);
  } catch (error) {
    next(error);
  }
};

const callback = async (req, res, next) => {
  try {
    const tokens = await handleCallback(req.query.code);
    res.cookie("access_token", tokens.access_token, { httpOnly: true });
    res.redirect("/spotify");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  logIn,
  callback,
};
