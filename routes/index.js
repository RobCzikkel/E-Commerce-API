var express = require('express');
const { isHttpError } = require('http-errors');
var passport = require('passport');
var indexRouter = express.Router();

const userService = require('../services/user');

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

indexRouter.post('/register', async(req,res,next) => {
  try {
    const result = await userService.addUser(req.body);
    res.status(201).json(result);
  } catch(error) {
      res.status(404).send(error);
  }
});

indexRouter.post('/login',
  passport.authenticate('local'), 
  async(req,res,next) => {
    try {
      const user = await userService.login(req.body);
      res.status(200).json(user);
    } catch(error) {
      next(error)
    }
  }
);

// indexRouter.post('/login', async(req,res,next) => {
//   try {
//     const user = await userService.login(req.body);
//     res.status(200).json(user);
//   } catch(error) {
//     res.status(404).send(error);
//   }
// })
module.exports = indexRouter;
