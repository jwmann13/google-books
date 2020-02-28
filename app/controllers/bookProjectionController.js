const axios = require("axios").default;

getFromAPI = (req, res) => {
  const { q, author } = req.query;
  let queryStr = "";

  if (author)
    queryStr = `https://www.googleapis.com/books/v1/volumes?q=${q}+inauthor:${author}&key=AIzaSyDglSy-LE_wHdT5Xv44AGCYINrsSQ_1e3A`;
  else
    queryStr = `https://www.googleapis.com/books/v1/volumes?q=${q}&key=AIzaSyDglSy-LE_wHdT5Xv44AGCYINrsSQ_1e3A`;

  axios
    .get(queryStr)
    .then(response => {
      // console.log(response.data.items.map(projectBook));
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
