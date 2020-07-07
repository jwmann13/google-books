const axios = require("axios").default;
const API_KEY = process.env.GOOGLE_API_KEY;

getFromAPI = async (req, res) => {
  try {
    const { q, author, title, publisher, subject, iter } = req.query;
    let options = "";

    if (author) options += `+inauthor:${author}`;
    if (title) options += `+intitle:${title}`;
    if (publisher) options += `+inpublisher:${publisher}`;
    if (subject) options += `+subject:${subject}`;

    let queryStr = `https://www.googleapis.com/books/v1/volumes?q=${q}${options}&maxResults=12&startIndex=${iter}&key=${API_KEY}`;

    const response = await axios.get(queryStr);
    const bookArray = response.data.items.map(projectBook);

    if (bookArray) {
      res.json(bookArray);
    } else {
      res.json(null);
    }
  } catch (err) {
    res.json(err);
  }
};

projectBook = item => {
  const { volumeInfo, id } = item;
  const { title, authors, description, imageLinks, previewLink } = volumeInfo;

  const newBook = {
    id: id,
    title: title,
    authors: authors,
    description: description,
    image: imageLinks.thumbnail,
    link: previewLink
  };
  if (newBook) {
    return newBook;
  } else {
    return;
  }
};

module.exports = getFromAPI;
