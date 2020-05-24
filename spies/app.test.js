/** @format */

const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app.js");

describe("App", () => {
  var db = {
    saveUser: expect.createSpy(),
  };

  app.__set__("db", db);
  it("Should call the spy correctly", () => {
    var spy = expect.createSpy();

    spy("Gaurav", 26);

    expect(spy).toHaveBeenCalledWith("Gaurav", 26);
  });

  it("should call save user with user obj", () => {
    var email = "a@b.com";
    var password = "124";
    app.handleSignup(email, password);

    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
