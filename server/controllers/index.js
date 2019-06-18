exports = module.exports = {};
var Waffles = require('../models/Waffles');


exports.home = (req, res) =>{
  res.render('index', { title: 'Waffle Park API service' });
};

exports.waffles = (req, res) =>{
  Waffles.find((err, waffles)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(waffles);
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
      console.log(waffle, "Waffle Demanded");
      res.send(waffle);
    }
  });

};


