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
        _id: ObjectId("630e5694940711d7c924621e"),
        Username: 'hilo',
        Password: '1234',
        Email: 'kaulhilo@yahoo.com',
        Birthday: ISODate("1987-01-01T00:00:00.000Z"),
        FavoriteMovies: [
        ObjectId("630e702373d830bca8fd52ac"),
        ObjectId("630e4bcb940711d7c9246218"),
        ObjectId("630e4ab9940711d7c9246217")
        ]
  },
  {
        _id: ObjectId("630e56a7940711d7c924621f"),
        Username: 'shae',
        Password: '5678',
        Email: 'kaulshae@ymail.com',
        Birthday: ISODate("1989-01-01T00:00:00.000Z"),
        FavoriteMovies: [
        ObjectId("630e6ff073d830bca8fd52aa"),
        ObjectId("630e5292940711d7c924621c")
        ]
  },
  {
        _id: ObjectId("630e56b3940711d7c9246220"),
        Username: 'anden',
        Password: '0987',
        Email: 'emoryanden@gmail.com',
        Birthday: ISODate("1990-01-01T00:00:00.000Z"),
        FavoriteMovies: [
        ObjectId("630e6ff073d830bca8fd52aa"),
        ObjectId("630d22c5f9d2709917d1faf7")
        ]
  },
  {
        _id: ObjectId("630e56be940711d7c9246221"),
        Username: 'Lan',
        Password: '4321',
        Email: 'kaullan@outlook.com',
        Birthday: ISODate("1980-01-01T00:00:00.000Z"),
        FavoriteMovies: [
        ObjectId("630e703873d830bca8fd52ad"),
        ObjectId("630e4bcb940711d7c9246218")
        ]
  }
]


let topMovies = [
    {
        _id: ObjectId("630d22c5f9d2709917d1faf7"),
        Title: 'Silence of the Lambs',
        Description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
        Genre: {
          Name: 'Thriller',
          Description: 'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.'
        },
        DIrector: {
          Name: 'Jonathan Demme',
          Bio: 'Robert Jonathan Demme was an American director, producer, and screenwriter.',
          Birth: '1944',
          Death: '2017'
        },
        ImagePath: 'silenceofthelambs.png',
        Featured: true
      },
      {
        _id: ObjectId("630e49a3940711d7c9246216"),
        Title: 'Mean Girls',
        Description: 'Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.',
        Genre: {
          Name: 'Comedy',
          Description: 'Comedy is a genre of film in which the main emphasis is humor.'
        },
        Director: {
          Name: 'Mark Waters',
          Bio: 'Mark Stephen Waters is an American Filmmaker known for 500 Days of Summer, Vampire Academy and Ghosts of Girlfriends Past.',
          Birth: '1964',
          Death: '-'
        },
        ImagePath: 'https://www.imdb.com/title/tt0377092/mediaviewer/rm3978398720/?ref_=ext_shr_lnk',
        Featured: true
      },
      {
        _id: ObjectId("630e4ab9940711d7c9246217"),
        Title: 'Prey',
        Description: 'The origin story of the Predator in the world of the Comanche Nation 300 years ago. Naru, a skilled warrior, fights to protect her tribe against one of the first highly-evolved Predators to land on Earth.',
        Genre: {
          Name: 'Horror',
          Description: 'Horror is a film genre that seeks to elicit fear or disgust in its audience for entertainment purposes.'
        },
        Director: {
          Name: 'Dan Trachtenberg',
          Bio: 'Dan Trachtenberg is an American filmmaker and podcast host. He directed the 2016 horror-thriller film 10 Cloverfield Lane which earned him a Directors Guild of America Award nomination for Outstanding Directing - First-Time Feature Film.',
          Birth: '1981',
          Death: '-'
        },
        ImagePath: 'https://www.imdb.com/title/tt11866324/mediaviewer/rm4094888705/?ref_=ext_shr_lnk',
        Featured: true
      },
      {
        _id: ObjectId("630e4bcb940711d7c9246218"),
        Title: 'Incantation',
        Description: 'Six years ago, Li Ronan was cursed after breaking a religious taboo. Now, she must protect her daughter from the consequences of her actions.',
        Genre: {
          Name: 'Horror',
          Description: 'Horror is a film genre that seeks to elicit fear or disgust in its audience for entertainment purposes.'
        },
        Director: {
          Name: 'Kevin Ko',
          Bio: 'Taiwanese filmmaker Kevin KO came to prominence for a series of short films he made in college, including horror THE PRINT that screened at festivals in Japan and South Korea.',
          Birth: '1983',
          Death: '-'
        },
        ImagePath: '',
        Featured: true
      },
      {
        _id: ObjectId("630e5292940711d7c924621c"),
        Title: 'Words Bubble Up Like Soda Pop',
        Description: 'A meeting and romance starts between two people with communication issues - a boy who wears headphones and uses haiku poems, and a girl who wears a mask and only does online videos.',
        Genre: {
          Name: 'Animation',
          Description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        Director: {
          Name: 'Kyohei Ishiguro',
          Bio: 'Kyōhei Ishiguro is a Japanese anime director. He debuted in 2009, and after doing the storyboards for three series, he was given the full directorial role in the anime adaptation of Your Lie in April. After directing other television series, he debuted as a film director with Words Bubble Up Like Soda Pop.',
          Birth: '1980',
          Death: '-'
        },
        ImagePath: 'https://www.imdb.com/title/tt12735338/mediaviewer/rm1137114625/?ref_=ext_shr_lnk',
        Featured: true
      },
      {
        _id: ObjectId("630e6fd773d830bca8fd52a9"),
        Title: 'The Wind Rises',
        Description: 'The Wind Rises is a fictionalised biographical film of Jiro Horikoshi, designer of the Mitsubishi A5M fighter aircraft and its successor, the Mitsubishi A6M Zero, used by the Empire of Japan during World War II.',
        Genre: {
          Name: 'Animation',
          Description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        Director: {
          Name: 'Hayao Miyazaki',
          Bio: 'Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
          Birth: '1941',
          Death: '-'
        },
        ImagePath: 'https://www.imdb.com/title/tt2013293/mediaviewer/rm2695221760/?ref_=tt_ov_i',
        Featured: true
      },
      {
        _id: ObjectId("630e6ff073d830bca8fd52aa"),
        Title: 'Kikis Delivery Service',
        Description: 'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.',
        Genre: {
          Name: 'Animation',
          Description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        Director: {
          Name: 'Hayao Miyazaki',
          Bio: 'Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
          Birth: '1941',
          Death: '-'
        },
        ImagePath: 'https://www.imdb.com/title/tt0097814/mediaviewer/rm315211009/?ref_=ext_shr_lnk',
        Featured: true
      },
      {
        _id: ObjectId("630e700873d830bca8fd52ab"),
        Title: 'My Neighbor Totoro',
        Description: 'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.',
        Genre: {
          Name: 'Animation',
          Description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        Director: {
          Name: 'Hayao Miyazaki',
          Bio: 'Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
          Birth: '1941',
          Death: '-'
        },
        ImagePath: 'https://www.imdb.com/title/tt0096283/mediaviewer/rm4095130625/?ref_=ext_shr_lnk',
        Featured: true
      },
      {
        _id: ObjectId("630e702373d830bca8fd52ac"),
        Title: "Howl's Moving Castle",
        Description: 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
        Genre: {
          Name: 'Animation',
          Description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        Director: {
          Name: 'Hayao Miyazaki',
          Bio: 'Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
          Birth: '1941',
          Death: '-'
        },
        ImagePath: 'https://www.imdb.com/title/tt0347149/mediaviewer/rm2848505089/?ref_=ext_shr_lnk',
        Featured: true
      },
      {
        _id: ObjectId("630e703873d830bca8fd52ad"),
        Title: 'Spirited Away',
        Description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        Genre: {
          Name: 'Animation',
          Description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        Director: {
          Name: 'Hayao Miyazaki',
          Bio: 'Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
          Birth: '1941',
          Death: '-'
        },
        ImagePath: 'https://www.imdb.com/title/tt0245429/mediaviewer/rm4207852801/?ref_=ext_shr_lnk',
        Featured: true
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
