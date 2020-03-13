const axios = require("axios").default;
const API_KEY = process.env.GOOGLE_API_KEY;

getFromAPI = (req, res) => {
  const { q, author } = req.query;
  let queryStr = "";

  if (author)
    queryStr = `https://www.googleapis.com/books/v1/volumes?q=${q}+inauthor:${author}&key=${API_KEY}`;
  else
    queryStr = `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${API_KEY}`;

  axios
    .get(queryStr)
    .then(response => {
      res.json(response.data.items.map(projectBook));
    })
    .catch(err => res.json(err));
};

projectBook = item => {
  const { volumeInfo } = item;
  const { title, authors, description, imageLinks, previewLink } = volumeInfo;
  const newBook = {
    title: title,
    authors: authors,
    description: description,
    image: imageLinks.thumbnail,
    link: previewLink
  };
  return newBook;
};

module.exports = getFromAPI;
