import React, { useState, useEffect } from "react";
import API from "../utils/API";

const Search = () => {
  const [book, setBook] = useState([]);

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

  return (
    <div className="container fluid">
      <div className="row">
        <div className="col">
          <h2>This will be the search page</h2>
          <div className="search-bar row">
            <div className="col-sm-3" />
            <div className="col-sm-6 search-div">
              <input
                type="text"
                className="form-control input-search"
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Search for employee"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div className="col-sm-3" />
          </div>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Link</th>
                {/* <th scope="col">Age</th> */}
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
                      <a href="">link</a>
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
