import { useState } from "react";

let MovieEntry = (props) => {
  let [movieWatchStatus, setMovieWatchStatus] = useState(props.movie.watchedStatus);  // tells component to refresh for watchStatus update
  let [expanded, setExpanded] = useState(false);
  
  let toggleWatch = () => { return movieWatchStatus == "Watched" ? true : false}
  let toggleStatus = toggleWatch();
  
  let {title, releaseDate, popularity, imdbRating, watchedStatus,id} = props.movie;

  // checks against current movieWatchStatus state, returns bool.

  // takes watchStatus: To Watch || Watched
  // let toggleWatch = () => { return movieWatchStatus == "Watched" ? true : false}

  // changes state
  // set conditions to handle simple and expanded view
  let handleWatchButton = () => {
    props.setMovies(prev => {
      if (watchedStatus == "Watched") {
        prev[id].watchedStatus = "To Watch";
        setMovieWatchStatus("To Watch");
      } else if (watchedStatus == "To Watch") {
        prev[id].watchedStatus = "Watched";
        setMovieWatchStatus("Watched");
      }
      toggleWatch();
      return prev;
    })
  }

  let simpleView = (
    <div className="EntrySimpleView" style={{display: "flex", justifyContent: "space-between"}}>
      <h1
        onClick={() => {setExpanded(!expanded)}}
        >{title}
      </h1>
      <button
        onClick={() => handleWatchButton()}
        value="simpleViewStatusButton"
        >{watchedStatus}
      </button>
    </div>
  )

  let expandedView = (
    <div className="EntryExpandedView">
      <h1
        onClick={() => {setExpanded(!expanded)}}
        >{title}
      </h1>
      <ul style={{listStyleType: "none", padding: 0, margin: 0}}>
        <li><strong>Year:</strong> {releaseDate}</li>
        <li><strong>Popularity:</strong> {popularity}</li>
        <li><strong>imdbRating:</strong> {imdbRating}</li>
        <li><strong>Watched:</strong> 
          {<input 
            onClick={() => handleWatchButton()}
            type="radio"
            checked={toggleStatus}
            value="expandedViewStatusButton"
          ></input>}</li>
      </ul>
    </div>
  )

  let movieEntryView;
  if (expanded) {
    movieEntryView = expandedView;
  } else if (!expanded) {
    movieEntryView = simpleView;
  }

  return (
    <div className="MovieEntry">
      {movieEntryView}
    </div>
  )
}

export default MovieEntry;
