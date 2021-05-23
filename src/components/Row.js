import React, { useState, useEffect, useRef } from "react";
import "../css/row.css";

const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  

  const ref = useRef(null);
  const handleScroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  
  };

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    return () => {};
  }, [fetchUrl]);


const truncate = (string,n) => {
  return string?.length > n ? string.substr(0,n-1)+ "..." : string;
}
 
  return (
    <div className="row" >
      <h2 className="row_title">{title}</h2>
      <div className="row_posters" ref={ref}>
        {movies.map((movie) => (
            movie.poster_path && (
                <div className="poster">
                <img
                  className= "row_poster"
                  key={movie.id}
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                />
                <div className="overlay">
                  <h3 className="text">{movie.title || movie.name || movie.original_name}</h3>
                  <p className="para"> {truncate(movie.overview,50)}</p>
                  <h5 className="rating">IMDB - {movie.vote_average}/10</h5>
                </div>
               
              </div>
            )
       
        ))}
      </div>
      <button className="scrollRight" onClick={() => handleScroll(-1000)}>{"<"}</button>
      <button className= "scroll" onClick={() => handleScroll(1000)}>{">"}</button>
    </div>
  );
};

export default Row;
