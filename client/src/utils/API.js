import axios from "axios";

export default {
  getBooks() {
    return axios.get("/api/books/");
  },
  getSearch(searchQuery) {
    const { q } = searchQuery;
    return axios.get(`/api/search/?q=${q}`);
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
