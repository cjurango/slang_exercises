var cpr = require('cpr');
cpr("src", "testJs", {
  deleteFirst: true,
  overwrite: true,
  filter : (f) => f.match(/css|json|jpe?g|png|less/),
}, function (err) {
  if (err) {
    return console.error(err);
  }
});