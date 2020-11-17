import React, { useState, useEffect, useRef } from "react";
import API from "../utils/API";

const Search = () => {
  const [book, setBook] = useState([]);
//   const textInput = useRef(null);

  useEffect(() => {
    API.findBook("Jung")
      .then((response) => {
        console.log(response.data.items);
        setBook(response.data.items);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }, []);

const handleChange = (e) => {
    API.findBook(e)
    .then((response) => {
      console.log(response.data.items);
      setBook(response.data.items);
    })
    .catch((err) => {
      if (err) throw err;
    });
}

const saveBook = (e) => {
    // textInput.current.focus();
    console.log(e);
    console.log("Clicked to save book");
}

  return (
    <div className="container fluid">
      <div className="row">
        <div className="col">
          <h2>TSearch for books</h2>
          <div className="search-bar row">
            <div className="col-sm-3" />
            <div className="col-sm-6 search-div">
              <input
                type="text"
                className="form-control input-search"
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Search for book or author"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div className="col-sm-3" />
          </div>
          <hr/>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Link</th>
              </tr>
            </thead>
            <tbody>
              {book.map((book) => {
                return (
                  <tr>
                    <th scope="row">
                      <img src={book.volumeInfo.imageLinks.smallThumbnail} />
                    </th>
                    <td key={book.volumeInfo.id}>{book.volumeInfo.title}</td>
                    <td>{book.volumeInfo.authors}</td>
                    <td>
                      <button onClick={(e) => saveBook(e.target.value)}>Save</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search;
