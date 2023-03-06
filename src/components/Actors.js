import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    <h1>Actors Page</h1>
    {actors.map((eachActorObj)=>{return(
      <div key = {eachActorObj}>
        {eachActorObj.name}
        {eachActorObj.movies.map((eachMovie)=>{return(
          <ul key = {eachMovie}>{eachMovie}</ul>
        )})}
      </div>
    )})}
  </div>
  );
}

export default Actors;
