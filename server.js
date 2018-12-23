var express = require("express");

var app = express();

var PORT = process.env.PORT || 3210;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// *** Listener
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
  console.log(`Server listening on: http://localhost:${PORT}`);
});