import axios from "axios";

export default {
  getBooks() {
    return axios.get("/api/books/");
  },
  getSearch(searchQuery, iter) {
    const { q, author, title, subject, publisher } = searchQuery;
    let queryStr = "";

    queryStr += `q=${q}`;
    if (author) queryStr += `&author=${author}`;
    if (title) queryStr += `&title=${title}`;
    if (publisher) queryStr += `&publisher=${publisher}`;
    if (subject) queryStr += `&subject=${subject}`;

    return axios.get(`/api/search/?${queryStr}&iter=${iter}`);
  },
  createUser(newUser) {
    return axios.post("/api/user/", newUser);
  },
  login(userCredentials) {
    return axios.post("/api/user/login/", userCredentials);
  },
  logout() {
    return axios.get("/api/user/logout/");
  },
  currentUser() {
    return axios.get("/api/user/current/");
  }
};
