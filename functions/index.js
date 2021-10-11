const functions = require("firebase-functions");
const  express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JZ1ycKGIJkkC9mHxZvAxIESn1m2Bj8nrWCiUQ7BpYnEisjO94TU5hBr1PDm6AYduzECSzBYDncYnsSj6nnM1jYY00AuWesXIy");

//API

//App Config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/"  , (req , res) => res.status(200).send(
    'hello world'
))

// -Listen command
exports.api = functions.https.onRequest(app);

