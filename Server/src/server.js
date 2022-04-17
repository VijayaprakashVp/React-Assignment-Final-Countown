const app = require("./index");
require("dotenv").config();

const connect = require("./configs/db");

const port = process.env.port || 8080;

app.listen(port, async () => {
  try {
    await connect();
    console.log("I'm listening to Port 8080");
  } catch (e) {
    console.log(e.message);
  }
});
