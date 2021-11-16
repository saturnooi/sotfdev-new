const mongoose = require('mongoose')
mongoose.Promise = require("bluebird");
mongoose.connect('mongodb+srv://Zen:1212312121@cluster0.bhkn9.mongodb.net/soft-dev?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'))