import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {directors.map((eachDirObj)=>{
      return(
        <div key = {eachDirObj.name}>
          {eachDirObj.name}
          {eachDirObj.movies.map(eachMovie => <ul>{eachMovie}</ul> )}
        </div>
      )
    })}
  </div>
  );
}

export default Directors;
