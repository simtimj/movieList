import MovieEntry from "./MovieEntry"

let MovieList = (props) => {
  
  let movieListConditionalRendering = () => {
    if (props.movies.length === 0) {
      return (
        <h1>{`No movies containing "${props.searchBarText}"`}</h1>
      )
    } else {
      return (
        <div className="MovieList">
          {
            props.movies.map((movie) => {
              return <MovieEntry 
                        movie={movie}
                        setMovies={props.setMovies}
                      />
            })
          }
        </div>
      )
    }
  }

    return (
      <div>
        <div id="WatchFilterBtns">
          <button 
            value="Watched"
            onClick={e => props.setWatchFilter(e.target.value)}
            type="button"
            >Watched
          </button>
          <button 
            value="To Watch"
            onClick={e => props.setWatchFilter(e.target.value)}
            type="button"
            >To Watch
          </button>
          <button 
            value="Show All"
            onClick={e => props.setWatchFilter(e.target.value)}
            type="button"
            >Show All
          </button>
        </div>
        {movieListConditionalRendering()}
      </div>
    )
  }

export default MovieList;
