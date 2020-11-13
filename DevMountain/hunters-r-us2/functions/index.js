const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require('express');
const stripe =  require("stripe")('sk_test_51Hn8xtLdQDXoO1YkcjXQHh5DQwFYqKPQzFuIBRKWcpzBCV0NTtQhVJokkiXIhAcwYDpPueLEG45Z5IpelORboIro00QCKqGBJX')


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());


app.get('/', (request, response) => response.status(200).send('Yo lets hope this works'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment req received,', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


exports.api = functions.https.onRequest(app)

///http://localhost:5001/hunters-r-us2/us-central1/api