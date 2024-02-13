require("dotenv").config();
const mongoose = require("mongoose");
const Mongo_URI = process.env.MONGODB_URI;

const connectToMongo = () => {
  mongoose
    .connect(Mongo_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log("> Connected...");
      return res;
    })
    .catch((err) =>
      console.log(`> Error while connecting to MongoDB: ${err.message}`)
    );
};

module.exports = connectToMongo;