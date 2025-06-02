const express = require("express");
const cors = require("cors");
const initializeDB = require("./db/db.connect");
const recipeRoutes = require("./routes/recipe");
const { addRecipe } = require("./controllers/recipeControllers");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/recipe", recipeRoutes);
//app.post("/recipe", addRecipe);

initializeDB();

app.listen(3000, () => {
  console.log("server is listening to port 3000");
});
