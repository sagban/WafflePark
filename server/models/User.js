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
    body : String
  }]

});


module.exports = mongoose.model('User', User, 'User');
