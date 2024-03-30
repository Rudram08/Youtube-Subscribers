# AlmaBetter Backend Project

## Get_Youtube_Subscribers

This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.

Web Deployment : https://ab-get-youtube-subscribers-zf71.onrender.com

## API Endpoints

1. **"/ "** -> This default route will render the "index.html file" when the app launches.

![Main](https://github.com/zainab3702/AB_Get_Youtube_Subscribers/issues/1#issue-2190195625)

2. https://ab-yt-subs.onrender.com/api-docs#/ -> This route for Swagger Docs.

![Swagger](https://github.com/Belalirshad/AB-YT-Subs/assets/101103105/a1ba420f-aec1-44f8-bfb3-ca3b5eb81eae)

3. **"/subscribers "** -> This endpoint returns an array of all subscribers in the database. https://ab-yt-subs.onrender.com/subscribers

![Subscribers](https://github.com/Belalirshad/AB-YT-Subs/assets/101103105/110dd844-7354-49dd-a06b-aaa1a5ca2249)

4. **"/subscribers/names "** -> This endpoint returns an array of subscribers with only two fields, their name and subscribed channel. https://ab-yt-subs.onrender.com/subscribers/names

![Names](https://github.com/Belalirshad/AB-YT-Subs/assets/101103105/cdfb7176-138f-48b0-9b04-346241e4944b)

5. **"/subscribers/:id "** -> This returns the details of subscriber whose Id is provided in endpoint. https://ab-yt-subs.onrender.com/subscribers/:id

![Id](https://github.com/Belalirshad/AB-YT-Subs/assets/101103105/7c455a22-3e01-4a71-bab7-48508bb9a905)

## Application Folder Structure

1. [src/app.js] -> For handling requests and responses.

2. [src/index.js] -> To connect and start the server.

3. [src/createDatabase.js] -> To create database on MongoDB.

4. [src/data.js] -> Data that has to be connnected to a database.

5. [src/models/subscribers.js] -> For the schema.
6. [src/index.html] -> The home page for the application.

```
├── src/
│   ├── app.js
│   ├── createDatabase.js
│   ├── data.js
│   ├── index.html
│   └── models/
│       ├── subscribers.js
├── db.test.js
├── index.js
├── {} package-lock.json
└── {}package.json
```

## Installation

You'll need to have **Node.js** and **MongoDB** installed on your computer in order to begin working on the project.

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install <packageName>**.

Start the server by **node index.js**

## Dependencies

Following dependencie are needed to run this application:

1. express

2. mongoose

3. nodemon
