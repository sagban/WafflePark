exports = module.exports = {};
var Waffles = require('../models/Waffles');
var mid = require('node-machine-id')
var sid = mid.machineIdSync();

exports.home = (req, res) =>{
  res.render('index', { title: 'Waffle Park API service' });
};

exports.waffles = (req, res) =>{
  Waffles.find((err, waffles)=>{
    if(err){
      console.log(err);
    }
    else{
      // console.log(waffles);
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
      // console.log(waffle, "Waffle Demanded");
      res.send(waffle);
    }
  });

};


exports.addCart = (req, res) =>{

  var item = req.body;
  if(req.session['cart']){
    req.session['cart']['data'].push(item);
  }
  else{
    var c = [];
    c.push(item);
    req.session['cart'] = {
      uid : sid,
      data: c
    };
  }
  res.send(req.session['cart']['data']);


};

exports.fetchCart = (req, res) =>{

  if(!req.session['cart']){
    req.session['cart'] = {
      uid : sid,
      data: []
    };
  }
  res.send(req.session.cart);

};


exports.updateCart = (req, res) =>{

  var item = req.body;
  console.log(item, "jg");
  if(req.session['cart']){
    req.session['cart']['data'] = item;
    res.send("Done");
  }
  else res.send("Not Done");


};
