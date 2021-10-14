
mongoose = require('mongoose'),
  Task = require('../api/models/todoListModel'), //created model loading here
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); //connection string

