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
app.get("/"  , ( request , response) => response.status(200).send(
    'hello world'
))
app.post("/payments/create" , async ( request , response) =>  {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total,
        currency : "usd"
    });

    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})
// -Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/db-54246/us-central1/api