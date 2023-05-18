import {useState} from "react"

let AddMovies = (props) => {
  let [addBarText, setAddBarText] = useState();

  let handleAddSubmit = () => {
    let newMovie = {
      title: addBarText,
      year: "2012",
      runtime: "2:23",
      metascore: "52",
      imdbRating: "32",
      watchedStatus: "To Watch",
      index: props.movies.length,
      key: props.movies.length
    }
    props.setMovies(prev => {
      return [...prev, newMovie]
    })
  }

  return (
    <div id="AddMovies">
      <form>
        <input 
          type="text"
          placeholder="Add new movie..."
          onChange={e => setAddBarText(e.target.value)}
          value={addBarText}
        ></input>
        <button 
          type="button"
          onClick={handleAddSubmit}
          >Add Movie</button> 
      </form>
    </div>
  )
}

export default AddMovies;