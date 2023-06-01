import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import AddMovies from "./components/AddMovie";
import {useState, useEffect} from "react";

const App = () => {
  let [movies, setMovies] = useState([]);
  let [searchBarText, setSearchBarText] = useState("");
  let [watchFilter, setWatchFilter] = useState()      // undefined by default, then watch if successful

  // api requests

  // basic get request for test, just console, don't hook up to movies state
  useEffect(() => {
    // grab from server.js, will fee back movies
    fetch('http://localhost:8080/test')
    .then(res => {
      console.log('App.js, res:', res);   // which needs json? data.json().
      return res.json();
    })
    .then(data => {
      console.log('App.js, data:', data);
      setMovies(data);
    })
  }, [])

  let filterMovies = (movies) => {
    let allFiltered;
    // 1st check search match
    allFiltered = movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchBarText.toLowerCase());
    })
    
    if (watchFilter === "Watched" || watchFilter === "To Watch" ) {
      allFiltered = allFiltered.filter(movie => {
        return movie.watchedStatus == watchFilter;
      })
    }
    return allFiltered;
  }

  return (
    <div className="App">
      <h1>Hola Hola</h1>
      <AddMovies 
        movies={movies}
        setMovies={setMovies}
      />
      <SearchBar 
        setSearchBarText={setSearchBarText}
      />
      <MovieList 
        movies={filterMovies(movies)}
        setMovies={setMovies}
        setWatchFilter={setWatchFilter}
        searchBarText={searchBarText}
        filterMovies={filterMovies}
      />
    </div>
  );
}

export default App;


