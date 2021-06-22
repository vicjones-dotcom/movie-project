import "./App.scss";
import Home from "../src/containers/Home/Home";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = () => {
    const apiKey = "1c79eb34";
    // const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=The+Mask`;
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=scary`;

    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => setMovie(jsonResponse.Search));
  };
  const handleBlur = (event) => {
    const apiKey = "1c79eb34";
    const input = event.target.value;
    setSearch(input);
    console.log(search);
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=The+Mask`;
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => console.log(jsonResponse));
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <h1 className="App__heading">Favourite Movies</h1>
      <Navigation />
      <input type="text" placeholder="Search here" className="App__input" />
      <button onBlur={handleBlur} className="App__button">
        Find a movie
      </button>
      <Router>
        <Home getMovie={movie} />
      </Router>
    </div>
  );
}

export default App;
