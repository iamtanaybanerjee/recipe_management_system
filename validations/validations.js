const Recipe = require("../models/recipe.model");

const validateTitle = (title) => {
  let error;

  if (!title || typeof title !== "string")
    error = "Title is requied and should be a string";

  return error;
};

const validateQueryParams = (author, difficulty) => {
  let error;
  if (!author && !difficulty) error = "author and/or difficulty is required";
  return error;
};

const validateRecipeId = async (recipeId) => {
  let error;

  const recipe = await Recipe.findById(recipeId);
  console.log(recipe);
  if (!recipe) error = "Invalid recipeId";

  return error;
};

const validateBodyParams = async (body) => {
  let error;

  if (!body || Object.keys(body).length === 0) error = "Body param is required";

  return error;
};

const validateTitle2 = async (title) => {
  let error;

  const recipe = await Recipe.findOne({ title: title });
  console.log("recipe", recipe);

  if (!recipe) error = "Recipe not found with this title";

  return error;
};
module.exports = {
  validateTitle,
  validateQueryParams,
  validateRecipeId,
  validateBodyParams,
  validateBodyParams,
  validateTitle2,
};
