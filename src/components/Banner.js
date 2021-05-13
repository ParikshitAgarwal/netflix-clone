import React, { useState, useEffect } from "react";
import requests from "../requests";
import "../css/banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const truncate = (string,n) => {
        return string?.length > n ? string.substr(0,n-1)+ "..." : string;
  }

  useEffect(() => {
    fetch(`${requests.fetchTrending}`)
      .then((res) => res.json())
      .then((data) => {
        const result =
          data.results[
              Math.floor(Math.random() * data.results.length - 1)];
        setMovie(result);
      });
  }, []);

  console.log(movie);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{ movie.title || movie.name || movie.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview,200)}</h1>
      </div>
      <div className="fade--bottom" />
    </div>
  );
};

export default Banner;
