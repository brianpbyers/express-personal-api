// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "https://lit-reaches-29632.herokuapp.com", //
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"},
      {method: "POST", path: "/api/airplanes", description: "Create a new airplane"},
      {method: "PUT", path: "/api/airplanes/:id", description: "Update an existing airplane"},
      {method: "GET", path: "/api/airplanes", description: "Returns all airplanes"},
      {method: "GET", path: "/api/airplanes/:id", description: "Returns a single airplane by id"},
      {method: "DELETE", path: "/api/airplanes/:id", description: "Removes an airplane by id"}

    ]
  });
});

app.get('/api/profile', function(req, res){
  res.json({
    name: "Brian Byers",
    github_link: "https://github.com/brianpbyers",
    github_profile_image: "https://avatars2.githubusercontent.com/u/33646018?s=460&v=4",
    current_city: "Denver",
    pets:[{
      name: "Ivy",
      type: "Dog",
      breed: "Chihuahua",
      owner: "my girlfriend"
    }]
  });
});

app.get('/api/airplanes', function(req, res){
  res.json(db.Airplane.find());
});

app.get('/api/airplanes/:id', function(req, res){
  
});

app.post('/api/airplanes', function(req, res){
  
});

app.put('/api/airplanes/:id', function(req, res){
  
});

app.delete('/api/airplanes/:id', function(req, res){
  
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
