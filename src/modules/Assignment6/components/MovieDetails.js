import React from "react";

const MovieDetails = React.memo((props) => {
  console.log(`card ${props.id} rendered`);
  return (
    <>
      <h2>{props.title}</h2>
      <p>{`Release date: ${props.releaseDate}`}</p>
      <p>{`Rating: ${props.rating}`}</p>
    </>
  );
});

export default MovieDetails;
