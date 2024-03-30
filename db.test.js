const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./src/createDatabase"); // Assuming your Express application is in app.js

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Subscribers API", () => {
  // Test the home page
  describe("GET /", () => {
    it("should return the home page", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          done(); // Call done() when the test is complete
        });
    });
  });

  // Test listing all subscribers
  describe("GET /subscribers", () => {
    it("should return all subscribers", (done) => {
      chai
        .request(app)
        .get("/subscribers")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done(); // Call done() when the test is complete
        });
    });
  });

  // Test listing subscriber names
  describe("GET /subscribers/names", () => {
    it("should return names of all subscribers", (done) => {
      chai
        .request(app)
        .get("/subscribers/names")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done(); // Call done() when the test is complete
        });
    });
  });

  // Test getting subscriber details by ID
  describe("GET /subscribers/:id", () => {
    it("should return details of a subscriber by ID", (done) => {
      const subscriberId = "65faa371bfd42927baf776d7"; // Provide an existing subscriber ID for testing
      chai
        .request(app)
        .get(`/subscribers/${subscriberId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("subscribedChannel");
          done(); // Call done() when the test is complete
        });
    });
  });

  // Test handling unwanted requests
  describe("Handling unwanted requests", () => {
    it("should return 404 for unknown routes", (done) => {
      chai
        .request(app)
        .get("/unknown-route")
        .end((err, res) => {
          res.should.have.status(404);
          done(); // Call done() when the test is complete
        });
    });
  });
});
