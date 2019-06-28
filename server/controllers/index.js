exports = module.exports = {};
var Waffles = require('../models/Waffles');
var Cart = require("../models/Cart");
var User = require("../models/User");


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
      console.log(err);
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
  res.send({
    status: "Item Added"
  });


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
  res.send({
    status: "Updated"
  });
};

exports.signup = (req, res) =>{
  console.log(req.body);
};

exports.login = (req, res) =>{

};
