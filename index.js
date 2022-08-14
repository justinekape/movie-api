const express = require('express');
    morgan = require('morgan'),
    fs = require('fs'),
    path = require('path');
const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})

app.use(morgan('combined', {stream: accessLogStream}));

app.use(express.static('public'));

let topMovies = [
    {
        title: 'The Lord of the Rings'
    },
    {
        title: 'Everything, Everywhere All at Once'
    },
    {
        title: 'Coda'
    },
    {
        title: 'Parasite'
    },
    {
        title: 'Joker'
    },
    {
        title: 'Shutter Island'
    },
    {
        title: 'Den of Thieves'
    },
    {
        title: 'The Wind Rises'
    },
    {
        title: 'V for Vendetta'
    },
    {
        title: 'Bridge to Terabithia'
    }
];

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send('What should I watch?');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oh no, something broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});
