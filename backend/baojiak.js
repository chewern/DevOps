const database = require("./database");
const express = require("express");

router = express.Router();

// Get merchants by merchant_id
router.get("/baojia2", (request, response) => {
    database.connection.query(
        `select * from baojia_2`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Internal Server Error");
            } else {
                response.status(200).send(results);
            }
        }
    );
});

module.exports = { router };
