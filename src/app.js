// Import required modules
const express = require("express");
const path = require("path");
const Subscriber = require("./models/subscribers");

// Create an instance of the Express application
const app = express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HOME PAGE
// Serve index.html file as the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// jsdoc comments for api documentation

// for defining schema of the api
/**
 * @swagger
 * components:
 *    schemas:
 *      Subscribers:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            description: Auto generated object id
 *          name:
 *            type: string
 *            description: Person name
 *          subscribedChannel:
 *            type: string
 *            description: Channels Person has Subscribed to
 *          subscribedDate:
 *            type: string
 *            description: Date the channel was subscribed on
 *        example:
 *          id: 65e9e1236abe03d47f6ee051
 *          name: John Doe
 *          subscribedChannel: freeCodeCamp.org
 *          subscribedDate: 2024-03-07T15:45:39.895Z
 */

// for adding a tag of Subscribers
/**
 * @swagger
 * tags:
 *  name: Subscribers
 *  description: Get Subscribers API
 */

// to make documentation of /subscribers route
/**
 * @swagger
 * /subscribers:
 *  get:
 *    summary: Return a list of subcribers
 *    tags: [Subscribers]
 *    responses:
 *      200:
 *        description: The list of the subscribers
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Subscribers'
 *      404:
 *        description: No Subscribers found
 */

// API to get all data of subscribers
app.get("/subscribers", async (req, res) => {
  try {
    let subscribers = await Subscriber.find();
    //Response data
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(404);
  }
});

// to make documentation of /subscribers/names route
/**
 * @swagger
 * /subscribers/names:
 *  get:
 *    summary: Return a list of subcribers with just names and subscribedChannels
 *    tags: [Subscribers]
 *    responses:
 *      200:
 *        description: The list of the subscribers
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Subscribers'
 *      404:
 *        description: No Subscribers found
 */

// API to get all subscribers by name and subscribedChannel
app.get("/subscribers/names", async (req, res) => {
  try {
    let subscribers = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    //Response data
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(404).send({
      // Error Message
      Error_message: "No Subscriber name.",
    });
  }
});

// to make documentation of /subscribers/:id route
/**
 * @swagger
 * /subscribers/{id}:
 *  get:
 *    summary: Get subscribers list from given id
 *    tags: [Subscribers]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id to get subscribers list
 *    responses:
 *      200:
 *        description: The list of the subscribers
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Subscribers'
 *      404:
 *        description: Given id not found
 */

// API to get subscribers by id
app.get("/subscribers/:id", async (req, res) => {
  try {
    let subscribers = await Subscriber.findById(req.params.id);
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = app;
