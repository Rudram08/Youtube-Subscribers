const express = require("express");
const app = require("./src/app");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const cors = require("cors");
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// options for swagger ui docs
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Get Yotube Subcribers",
      version: "1.0.0",
      description:
        "A Minimal Express API To Get Youtube Subscribers by Rudram Raj Chakraborty",
    },
    servers: [
      {
        url: "https://ab-yt-subs.onrender.com/",
      },
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./src/app.js"],
};

const specs = swaggerJsDoc(options);
app.use("/", swaggerUI.serve, swaggerUI.setup(specs));

// enabling cors to get over CORS Restriction
app.use(cors());

// Connect to DATABASE
const DATABASE_URL =
  "mongodb+srv://rrudram128:chakraborty12345@subscribers.84vvf1g.mongodb.net/subscribers?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
