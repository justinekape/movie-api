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
        name: 'hilo',
        password: '1234',
        email: 'kaulhilo@yahoo.com',
        birthday: "1987-01-01",
        favoriteMovies: []
  },
  {
        id: 2,
        name: 'shae',
        password: '5678',
        email: 'kaulshae@ymail.com',
        birthday: "1989-01-01",
        favoriteMovies: []
  },
  {
        id: 3,
        name: 'anden',
        password: '0987',
        email: 'emoryanden@gmail.com',
        birthday: "1990-01-01",
        favoriteMovies: []
  },
  {
        id: 4,
        name: 'Lan',
        password: '4321',
        email: 'kaullan@outlook.com',
        birthday: "1980-01-01",
        favoriteMovies: []
  }
]


let topMovies = [
    {
        title: 'Silence of the Lambs',
        description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
        genre: {
          name: 'Thriller',
          description: 'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.'
        },
        director: {
          name: 'Jonathan Demme',
          bio: 'Robert Jonathan Demme was an American director, producer, and screenwriter.',
          birth: '1944',
          death: '2017'
        },
        imageUrl: 'silenceofthelambs.png',
        featured: true
      },
      {
        title: 'Mean Girls',
        description: 'Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.',
        genre: {
          name: 'Comedy',
          description: 'Comedy is a genre of film in which the main emphasis is humor.'
        },
        director: {
          name: 'Mark Waters',
          bio: 'Mark Stephen Waters is an American Filmmaker known for 500 Days of Summer, Vampire Academy and Ghosts of Girlfriends Past.',
          birth: '1964',
          death: '-'
        },
        imageUrl: 'https://www.imdb.com/title/tt0377092/mediaviewer/rm3978398720/?ref_=ext_shr_lnk',
        Featured: true
      },
      {
        title: 'Prey',
        description: 'The origin story of the Predator in the world of the Comanche Nation 300 years ago. Naru, a skilled warrior, fights to protect her tribe against one of the first highly-evolved Predators to land on Earth.',
        genre: {
          name: 'Horror',
          description: 'Horror is a film genre that seeks to elicit fear or disgust in its audience for entertainment purposes.'
        },
        director: {
          name: 'Dan Trachtenberg',
          bio: 'Dan Trachtenberg is an American filmmaker and podcast host. He directed the 2016 horror-thriller film 10 Cloverfield Lane which earned him a Directors Guild of America Award nomination for Outstanding Directing - First-Time Feature Film.',
          birth: '1981',
          death: '-'
        },
        imageUrl: 'https://www.imdb.com/title/tt11866324/mediaviewer/rm4094888705/?ref_=ext_shr_lnk',
        featured: true
      },
      {
        title: 'Incantation',
        description: 'Six years ago, Li Ronan was cursed after breaking a religious taboo. Now, she must protect her daughter from the consequences of her actions.',
        genre: {
          name: 'Horror',
          description: 'Horror is a film genre that seeks to elicit fear or disgust in its audience for entertainment purposes.'
        },
        director: {
          name: 'Kevin Ko',
          bio: 'Taiwanese filmmaker Kevin KO came to prominence for a series of short films he made in college, including horror THE PRINT that screened at festivals in Japan and South Korea.',
          birth: '1983',
          death: '-'
        },
        imageUrl: '',
        featured: true
      },
      {
        title: 'Words Bubble Up Like Soda Pop',
        description: 'A meeting and romance starts between two people with communication issues - a boy who wears headphones and uses haiku poems, and a girl who wears a mask and only does online videos.',
        genre: {
          name: 'Animation',
          description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        director: {
          name: 'Kyohei Ishiguro',
          bio: 'Kyōhei Ishiguro is a Japanese anime director. He debuted in 2009, and after doing the storyboards for three series, he was given the full directorial role in the anime adaptation of Your Lie in April. After directing other television series, he debuted as a film director with Words Bubble Up Like Soda Pop.',
          birth: '1980',
          death: '-'
        },
        imageUrl: 'https://www.imdb.com/title/tt12735338/mediaviewer/rm1137114625/?ref_=ext_shr_lnk',
        featured: true
      },
      {
        title: 'The Wind Rises',
        description: 'The Wind Rises is a fictionalised biographical film of Jiro Horikoshi, designer of the Mitsubishi A5M fighter aircraft and its successor, the Mitsubishi A6M Zero, used by the Empire of Japan during World War II.',
        genre: {
          name: 'Animation',
          description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        director: {
          name: 'Hayao Miyazaki',
          bio: 'Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
          birth: '1941',
          death: '-'
        },
        imageUrl: 'https://www.imdb.com/title/tt2013293/mediaviewer/rm2695221760/?ref_=tt_ov_i',
        featured: true
      },
      {
        title: 'Kikis Delivery Service',
        description: 'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.',
        genre: {
          name: 'Animation',
          description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        director: {
          name: 'Hayao Miyazaki',
          bio: 'Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
          birth: '1941',
          death: '-'
        },
        imageUrl: 'https://www.imdb.com/title/tt0097814/mediaviewer/rm315211009/?ref_=ext_shr_lnk',
        featured: true
      },
      {
        title: 'My Neighbor Totoro',
        description: 'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.',
        genre: {
          name: 'Animation',
          description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        director: {
          name: 'Hayao Miyazaki',
          bio: 'Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
          birth: '1941',
          death: '-'
        },
        imageUrl: 'https://www.imdb.com/title/tt0096283/mediaviewer/rm4095130625/?ref_=ext_shr_lnk',
        featured: true
      },
      {
        title: "Howl's Moving Castle",
        description: 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
        genre: {
          name: 'Animation',
          description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        director: {
          name: 'Hayao Miyazaki',
          bio: 'Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
          birth: '1941',
          death: '-'
        },
        imageUrl: 'https://www.imdb.com/title/tt0347149/mediaviewer/rm2848505089/?ref_=ext_shr_lnk',
        featured: true
      },
      {
        title: 'Spirited Away',
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        genre: {
          name: 'Animation',
          description: "Animation is a genre in which the film's images are primarily created by computer or hand and the characters are voiced by actors."
        },
        director: {
          name: 'Hayao Miyazaki',
          bio: 'Hayao Miyazaki is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.',
          birth: '1941',
          death: '-'
        },
        imageUrl: 'https://www.imdb.com/title/tt0245429/mediaviewer/rm4207852801/?ref_=ext_shr_lnk',
        featured: true
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
