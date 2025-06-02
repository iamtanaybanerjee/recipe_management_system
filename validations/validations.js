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
module.exports = { validateTitle, validateQueryParams };
