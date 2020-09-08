export const form = (nameBook, author) => {
  const error = { name: "", author: "" };
  if (!nameBook) {
    error.name = "Not a valid book";
  }
  if (!author) {
    error.author = "Not a valid author";
  }
  if (error.name || error.author) {
    return {
      hasError: true,
      error: error,
    };
  } else
    return {
      hasError: false,
    };
};
