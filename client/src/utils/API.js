import axios from "axios";

const GoogleSearchAPI = `https://www.googleapis.com/books/v1/volumes?q=`;

export default {
    findBook: function(book) {
        return axios.get(GoogleSearchAPI + book);
    },
    saveBook: function(book) {
        return axios.post("api/books", book);
        console.log("SAVE", book)
    },

}
