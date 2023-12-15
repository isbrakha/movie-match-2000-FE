const SearchForm = () => {
    return (
        <form>
            <h2>Search Movies</h2>
            By Title: <input type='text' id='Title' placeholder="Enter Movie Title"/>
            <br/>
            By Director: <input type='text' id='Title' placeholder="Enter Director Name"/>
            <br/>
            By Cast: <input type='text' id='Title' placeholder="Enter Cast Name"/>
            <br/>
            By Genre: <input type='text' id='Title' placeholder="Enter Genre"/>
            <br/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm