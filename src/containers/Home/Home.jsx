import React from "react";
import "./Home.scss";

const Home = (props) => {
  const movieCard = props.getMovie;
  return (
    <div>
      {movieCard.map((movie, index) => {
        return (
          <div className="home">
            <h2 key={index} className="home__heading">
              {movie.Title}
            </h2>

            <p>{movie.Year}</p>
            <p>{movie.imdbID}</p>

            <img src={movie.Poster} alt="" />
          </div>
        );
      })}
    </div>
  );
};
export default Home;
// {
//   beerList.map((beer) => {
//     return (
//       <ul className="card-elements">
//         <h1>{beer.name}</h1>
//         <li>{beer.tagline}</li>
//         <li>{beer.first_brewed}</li>
//         <img src={beer.image_url} width="100px" height="200px" />
//         <li>{beer.description}</li>
//       </ul>
//     );
//   });
// }
