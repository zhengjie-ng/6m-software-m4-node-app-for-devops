// This is the only function that will be called by the endpoint.
function print(req, res) {
  res.send("Hello world!!!");
}

function home(req, res) {
  res.send("This is the home page");
}

function user(req, res) {
  const { name, email } = req.body;
  res.json({ name, email });
}

module.exports = { print, home, user };
