const express = require('express');
    morgan = require('morgan'),
    fs = require('fs'),
    path = require('path');
    bodyParser = require('body-parser');
     uuid = require('uuid');
const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})

app.use(morgan('combined', {stream: accessLogStream}));

app.use(express.static('public'));
app.use(bodyParser.json());

let users = [
    {
        id: 1,
        name: "Kim",
        favoriteMovies: ['Venom']
    },
    {
        id: 2,
        name: 'Harry',
        favoriteMovies: ['V for Vendetta', 'Parasite']
    },
]

let topMovies = [
    {
        "title": 'The Lord of the Rings',
        "genre": {
            "name": 'high fantasy',
            "description": 'High fantasy, or epic fantasy, is a subgenre of fantasy defined by the epic nature of its setting or by the epic stature of its characters, themes or plot.'
        },
        "director": {
            "name": 'Peter Jackson',
            "bio": 'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter and producer.',
            "birth year": 'October 31, 1961'
        }
    },
    {
        "title": 'Everything, Everywhere All at Once'
    },
    {
        "title": 'Coda'
    },
    {
        "title": 'Parasite'
    },
    {
        "title": 'Joker'
    },
    {
        "title": 'Shutter Island'
    },
    {
        "title": 'Den of Thieves'
    },
    {
        "title": 'The Wind Rises'
    },
    {
        "title": 'V for Vendetta'
    },
    {
        "title": 'Bridge to Terabithia'
    }
];

// CREATE
app.post('/users', (req, res) => {
    const newUser = req.body;

    if (newUser.name) {
        newUser.id = uuid.v4();
        users.push(newUser);
        res.status(201).json(newUser)
    } else {
        res.status(400).send('users need names')
    }
})

// UPDATE
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    let user = users.find( user => user.id == id );

    if (user) {
        user.name = updatedUser.name;
        res.status(200).json(user);
    } else {
        res.status(400).send('no such user');
    }
})


// CREATE
app.post('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params;

    let user = users.find( user => user.id == id );

    if (user) {
        user.favoriteMovies.push(movieTitle);
        res.status(200).send(`${movieTitle} has been added to ${user.name}'s favorites`);
    } else {
        res.status(400).send('no such user');
    }
})

// DELETE
app.delete('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params;

    let user = users.find( user => user.id == id );

    if (user) {
        user.favoriteMovies = user.favoriteMovies.filter(title => title !== movieTitle);
        res.status(200).send(`${movieTitle} has been removed from ${user.name}'s favorites`);
    } else {
        res.status(400).send('no such user');
    }
})

// DELETE
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    let user = users.find( user => user.id == id );

    if (user) {
        users = users.filter(user => user.id != id);
        res.status(200).send(`${user.name} has been deleted`);
    } else {
        res.status(400).send('no such user');
    }
})

// READ
app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send('What should I watch?');
});



// READ
app.get('/movies', (req, res) => {
    res.status(200).json(movies);
})

// READ
app.get('/movies/:title', (req, res) => {
    const { title } = req.params;
    const movie = topMovies.find( movie => movie.title === title );

    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(400).send('no such movie')
    }
})

// READ
app.get('/movies/genre/:genreName', (req, res) => {
    const { genreName } = req.params;
    const genre = topMovies.find( movie => movie.genre.name === genreName ).genre;

    if (genre) {
        res.status(200).json(genre);
    } else {
        res.status(400).send('no such movie')
    }
})

// READ
app.get('/movies/directors/:directorName', (req, res) => {
    const { directorName } = req.params;
    const director = topMovies.find( movie => movie.director.name === directorName ).director;

    if (director) {
        res.status(200).json(director);
    } else {
        res.status(400).send('no such director')
    }
})




// ERROR HANDLING CODE
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oh no, something broke!');
});


app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});
