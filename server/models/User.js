var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let User = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  contact: {
    type: String
  },
  address:[{
    body : {
      type: String
    }

  }]
},
  { autoCreate: true});


module.exports = mongoose.model('User', User);
