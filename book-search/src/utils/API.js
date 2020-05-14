import axios from "axios";

export default {
  // retrieves all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // ID
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // deletes book of given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // saves book
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  searchBooks: function(bookData){
    console.log("https://www.googleapis.com/books/v1/volumes?q="+bookData);
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+bookData);
  }
};