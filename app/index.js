const express = require('express');
const app = express();
const loremipsum = require('lorem-ipsum');

app.get('/', function (req, res) {
    res.send(`You are at the home page. Go to <a href="./lorem">/lorem</a> to generate a random lorem-ipsum sentence.`);
});

app.get('/lorem', function (req, res) {
    res.send(loremipsum());
});

app.get('/lorem/:sentencecount', function(req, res) {
    let response = "";
    let count = parseInt(req.params["sentencecount"]);
    for(var i = 0; i < count; i++) {
        response += loremipsum() + " ";
    }
    
    res.send(response);
})

app.get('/lorem/:sentencecount/:paragraphcount', function (req, res) {
    let response = "";
    let scount = parseInt(req.params["sentencecount"]);
    let pcount = parseInt(req.params["paragraphcount"]);
    for (var x = 0; x < pcount; x++) {
        let paragraph = "<p>"
        for (var i = 0; i < scount; i++) {
            paragraph += loremipsum() + " ";
        }
        paragraph += "</p>";
        response += paragraph;
    }

    res.send(response);
})

app.listen(3000, function () {
    console.log("Express application started successfully. Listening on port 3000.");
});
