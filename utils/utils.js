/** @format */

module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.setName = (user, fullName) => {
  var name = fullName.split(" ");
  user.firstName = name[0];
  user.lastName = name[1];
  return user;
};

module.exports.asyncAdd = (a, b, callBack) => {
  setTimeout(() => {
    callBack(a + b);
  }, 1000);
};
