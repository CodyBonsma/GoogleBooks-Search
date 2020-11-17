const express = require("express");
const router = require("router");
const db = require("../models");

// route to get all books
router.get("/", (req, res) => {
    db.Book.find({}).then((resonse) => {
        console.log(response);
        res.json(reponse)
    }).catch((err) =>{
        res.status(500).json({
            error: true,
            data: null,
            message: "Failed to retrieve all books."
        })
    })
})