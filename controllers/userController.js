module.exports = {
   register: (req, res, next) => {
      return res.render('register');
   },
   login: (req, res, next) => {
      return res.render('login');
   },
};
