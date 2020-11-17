const express = require("express");
const router = require("router");
const db = require("../models");

// route to get all books
router.get("/api/books", (req, res) => {
  db.Book.find({})
    .then((resonse) => {
      console.log(response);
      res.json(reponse);
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to retrieve all books.",
      });
    });
});

router.post("/api/books", (req, res) => {
  console.log("SAVE THIS BOOK", req.body);
  db.Book.create({

  })
    .then((newBook) => {
      console.log(newBook);
    })
    .then((err) => {
      if (err) throw err;
    });
});

router.delete("/api/books/:id", (req, res) => {
    console.log(req.body);
    // create delete functionality
})

export default router;
