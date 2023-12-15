import "./App.css";
import Home from "./Home";
import axios from 'axios'
import config from "./config";
import { useState, useEffect } from "react";
const App = () => {
  const [movies, setMovies] = useState(null)
  const fetchMovies = async () => {
    try{
      const res = await fetch(config.BASE_URL)
      console.log(config.BASE_URL)
      console.log(res)
      const movieData = await res.json()
      setMovies(movieData)
    } catch(err) {
      console.log(err)
    }
  }
  console.log(movies)
  useEffect(() => {fetchMovies()})

  async function handleRequest () {
  }
  return <>
    <header>
      <h1>
        <a href="/">Movie-Match-2000</a>
      </h1>
    </header>
    <main>
        <Home/>
    </main>
  </>;
};

export default App;