const mongoose = require('mongoose');

const ClientsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
    phone: {
    type: String,
  },
});

const Clients = mongoose.model('Clients', ClientsSchema);
module.exports = Clients;
