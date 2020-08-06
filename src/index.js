const express = require("express");
const app = express();
const morgan = require("morgan");

/* Settings */
app.set("port", process.env.PORT || 3000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); //permite leer datos de formularios
app.use(express.json()); //permite leer datos json

/* Routes */
app.use(require("./routes/index.js"));
app.use("/api/animes", require("./routes/animes.js"));
app.use("/api/users", require("./routes/users.js"));

/* Starting the server */
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
