/** @format */

const expect = require("expect");
const utils = require("./utils");

describe("Utils", () => {
  describe("#add", () => {
    it("should add two number", () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA("number");
    });
  });

  describe("#sum", () => {
    it("should asyncAdd two numbers", (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA("number");
        done();
      });
    });
  });
  describe("#sum", () => {
    it("should add square a number", () => {
      var res = utils.square(6);

      expect(res).toBe(36).toBeA("number");
    });
  });

  describe("#setName", () => {
    it("should set firstName and lastName", () => {
      user = {
        age: 26,
      };
      res = utils.setName(user, "Gaurav Bagul");

      expect(res).toInclude({
        firstName: "Gaurav",
        lastName: "Bagul",
      });

      expect(user).toEqual(res);
    });
  });
});

// it("should expect some values", () => {
//   //   expect({ name: "Gaurav" }).toEqual({ name: "Gaurav" });
//   //   expect([1, 2, 3]).toInclude(2);
//   //   expect([1, 2, 3]).toExclude(5);

//   expect({
//     name: "gaurav",
//     age: 25,
//     location: "Nasik",
//   }).toExclude({
//     age: 13,
//   });
// });
