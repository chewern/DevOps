//main executes the functions

//to import the express library
const express = require("express");
const body_parser = require("body-parser"); //for reading data from client
const cors = require("cors"); // to enable frontend and backend to run from same compuer
//const merchants = require("./merchants");
const baojiak = require("./baojiak");

//
service = express();
service.use(cors());
service.use(body_parser.json());
//service.use(merchants.router);
service.use(baojiak.router);

//start the service on port 3000. API listener has started on port 3000
service.listen(2021);