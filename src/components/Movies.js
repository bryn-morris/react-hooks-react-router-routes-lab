import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
      {movies.map((eachMovie)=>{
        return(
        <div key = {eachMovie.title}>
          {eachMovie.title}
          Run Time: {eachMovie.time}
          <ul>
            {eachMovie.genres.map((eachGenre)=>{return <li key = {eachGenre} >{eachGenre}</li> })}
            
          </ul>
        </div>
      )})}
  </div>
  );
}

export default Movies;
