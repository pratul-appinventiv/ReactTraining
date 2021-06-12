import React, { useState } from "react";
import MovieCard from "./components/MovieCard";
import Heading from "./components/Heading";
import Data from "./MovieData";

const MovieHomeScreen = () => {
  const [rating1, setRating1] = useState(Data[1].rating);
  const [rating3, setRating3] = useState(Data[3].rating);
  setTimeout(() => {
    setRating1(Math.round((rating1 + 0.1) * 10) / 10);
    setRating3(Math.round((rating3 + 0.1) * 10) / 10);
    Data[1].rating = rating1;
    Data[3].rating = rating3;
  }, 5000);
  return (
    <>
      <Heading styleClass={"movieListHeading"} headingText={"Movie List"} />
      <div className={"movieCardContainer"}>
        {Data.map((curr, ind) => (
          <MovieCard key={ind} obj={curr} />
        ))}
      </div>
    </>
  );
};

export default MovieHomeScreen;
