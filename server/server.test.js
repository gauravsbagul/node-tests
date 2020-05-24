/** @format */

const request = require("supertest");
const expect = require("expect");
const app = require("./server").app;

describe("Server", () => {
  describe("#/", () => {
    it("should return hello world response", (done) => {
      request(app)
        .get("/")
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: "Page not found.",
          });
        })
        .end(done);
    });
  });

  describe("#user", () => {
    it("should return array of object with name and age prop", (done) => {
      request(app)
        .get("/user")
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: "a",
            age: 25,
          });
        })
        .end(done);
    });
  });
});
