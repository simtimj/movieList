const express = require("express");
let axios = require('axios');
let bodyParser = require("body-parser")
let cors = require("cors")
let port = 8080;
let app = express();


app.use(bodyParser.json()) // parsing bodies for json
app.use(bodyParser.urlencoded({extended: false}))   // same as above, except for urls
// app.use(cors());
app.use(express.static(`${__dirname}/build`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`)
})


app.get("/test", (req, res) => {
  // data fetching functionality will be moved into here
  async function fetchData() {
    // retrieve array of movies
    let api_key = "ff47db95d0bf39345ad1a50ae6380ee0";
    let trendingDBRoute = `http://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
    const req = await axios.get(trendingDBRoute)
    const reqResults = req.data.results;

    // format then send to movies, after testing in test
    let reformattedMovie;
    let reformattedMovieList = [];

    reqResults.forEach(movie => {
      reformattedMovie = {
        "title": movie.original_title,
        "releaseDate": movie.release_date.split("-")[0],
        "popularity": movie.popularity,
        "imdbRating": movie.vote_average,
        "watchedStatus": "To Watch",
        "id": reformattedMovieList.length
      }
      reformattedMovieList.push(reformattedMovie)
      // res.send(reformattedMovieList)
    })
    console.log('server.js, reformattedMovieList:', reformattedMovieList);
    res.send(reformattedMovieList)
    return reformattedMovieList;
  }
  fetchData()
  console.log("checks")
})

app.get("/api/movies", (req, res) => {
  res.send(`${__dirname}/build`)
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})