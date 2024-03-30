// Import necessary modules
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

// Import database schema/model
const schema = require("./models/subscribers");

// Create Express application
const app = express();

// Parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the database
mongoose
  .connect(
    "mongodb+srv://rrudram128:chakraborty12345@subscribers.84vvf1g.mongodb.net/subscribers?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1); // Exit the application if unable to connect to the database
  });

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Handle route for retrieving all subscribers
app.get("/subscribers", async (req, res, next) => {
  try {
    let subscribers = await schema.find();
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(400);
    next(err);
  }
});

// Handle route for retrieving subscriber names
app.get("/subscribers/names", async (req, res, next) => {
  try {
    let subscribers = await schema.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(400);
    next(err);
  }
});

// Handle route for retrieving subscriber details by ID
app.get("/subscribers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ message: "No ID provided" });
      return;
    }
    const subscriber = await schema.findById(id);
    if (!subscriber) {
      res.status(404).json({ message: "Subscriber not found" });
      return;
    }
    res.send(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Error - Route not found" });
});

// Export the Express application
module.exports = app;
