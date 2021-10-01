const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://deepak1999:shopproject@cluster0.pogwi.mongodb.net/Shop?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connect;
