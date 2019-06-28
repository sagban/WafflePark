exports = module.exports = {};
var Waffles = require('../models/Waffles');
var Cart = require("../models/Cart");
var User = require("../models/User");
var Login = require("../models/login");
var bCrypt = require('bcrypt-nodejs');

function dbError(err) {
  return {
        message: "ERROR",
        status: 500,
        error: err
      };
}

function sendStatus(msg, status = 0, err = false){
  return {
        message: msg,
        status: status,
        error: err
  };
}

function generateHash(password){
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
}


function checkPhone(str){
  var p = new RegExp("^[6-9]{1}[0-9]{9}$");
  return p.test(str);
}

function checkName(str){
  var p = new RegExp("^([a-zA-Z ]){2,60}$");
  return p.test(str);
}


exports.home = (req, res) =>{
  res.render('index', { title: 'Waffle Park API service' });
};

exports.waffles = (req, res) =>{

  Waffles.find((err, waffles)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(waffles);
    }
  });

};

exports.waffle = (req, res) =>{

  console.log(req.params.id);
  Waffles.findOne({_id: req.params.id} ,  (err, waffle)=>{
    if(err){
      res.send(dbError(err));
    }
    else{
      res.send(waffle);
    }
  });

};


exports.addCart = (req, res) =>{

  var item = req.body;

  var cart = new Cart(req.session['cart']? req.session['cart']: {});
  cart.add(item, item.id);
  req.session['cart'] = cart;
  res.send(sendStatus("ITEM_ADDED_SUCCESS", 1));


};

exports.fetchCart = (req, res) =>{

  var cart = new Cart(req.session['cart']? req.session['cart']: {});
  var c = cart.getList();
  res.send(c);

};


exports.updateCart = (req, res) =>{

  var item = req.body;
  var cart = new Cart({});
  cart.update(item);
  req.session['cart'] = cart;
  res.send(sendStatus("UPDATE_SUCCESS", 1));
};

exports.signup = (req, res) =>{


  var body = req.body;
  var email = body.email;
  var contact = body.contact;
  var name = body.name;
  var pass = body.password;

  if(!req.session['email']){

    if(email && contact && name && pass){

      if(pass.length < 8){
        res.send(sendStatus("Minimum length of 8 is required for password",0));
      }
      else if(!checkPhone(contact)){
        res.send(sendStatus("Kindly enter the valid mobile number",0));
      }
      else if(!checkName(name)){
        res.send(sendStatus("Kindly enter the valid name",0));
      }
      else {
        User.findOne({ email: email}, (err, user) =>{
          // console.log(req.body, "body");

          if(user){
            res.send(sendStatus("Email already exist", 0));
          }

          else if(err) {
            res.send(dbError(err));
          }
          else {

            var newUser = new User({
              email : email,
              name : name,
              contact: contact
            });

            newUser.save((err, r) =>{
              if(err){
                res.send(dbError(err));
              }
              var newLogin = new Login({
                email: email,
                password: generateHash(pass)
              });
              newLogin.save(function(err, r){
                if(err){
                  res.send(dbError(err));
                }
                req.session['email'] = email;
                res.send(sendStatus("NEW_USER_CREATED", 1));
              });
            });
          }
        });
      }

    }
    else{
      res.send(sendStatus("Kindly enter all the valid details", 0));
    }

  }
  else{
    res.send(sendStatus("Kindly logout first", 0));
  }

};

exports.login = (req, res) =>{
  var body = req.body;
  var email = body.email;
  var pass = body.password;
  if(!req.session['email']){
    if(email && pass){
      Login.findOne({ email: email}, (err, login) =>{

        if(!login){
          //Check in User
          //if found ask for verify email id
          // Else return not found
          res.send(sendStatus("Email is not registered", 0));
        }
        else if(err) {
          res.send(dbError(err));
        }
        else{
          var passwordCheck =  bCrypt.compareSync(pass, login.password);
          if(passwordCheck && login){
            req.session['email'] = email;
            res.send(sendStatus("LOGIN_SUCCESS", 1));
          }
          else{
            res.send(sendStatus("Incorrect Password", 0));
          }
        }
      });
    }
    else{
      res.send(sendStatus("Kindly enter all the valid details", 0));
    }
  }
  else{
    res.send(sendStatus("Already login", 0));
  }

};


exports.logout = (req, res) =>{
  delete req.session['email'];
  delete req.session['cart'];
  req.send(sendStatus("LOGOUT_DONE", 1));
};
