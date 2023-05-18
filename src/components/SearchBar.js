let SearchBar = (props) => {

  return (
    <form>
      <input 
        type="text" 
        placeholder="Search for..."
        onChange={e => props.setSearchBarText(e.target.value)}
        ></input> 
    </form>
  )
}

export default SearchBar;

