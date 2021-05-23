import React, { useState, useEffect } from "react";
import requests from "../requests";
import "../css/banner.css";
import { useHistory } from "react-router";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [video, setVideo] = useState("");

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  useEffect(() => {
    fetch(`${requests.fetchTrending}`)
      .then((res) => res.json())
      .then((data) => {
        const result =
          data.results[Math.floor(Math.random() * data.results.length - 1)];
        setMovie(result);
        if (result.media_type == "movie") {
          fetch(
            `https://api.themoviedb.org/3/movie/${result.id}/videos?api_key=3e04f10540e1a09b1e0052f09bd9adfb&language=en-US`
          )
            .then((res) => res.json())
            .then((data) => {
              data.results.map((d) => {
                if (d.type == "Trailer") {
                  setVideo(d.key);
                }
              });
            });
        } else if (result.media_type == "tv") {
          fetch(
            `https://api.themoviedb.org/3/tv/${result.id}/videos?api_key=3e04f10540e1a09b1e0052f09bd9adfb&language=en-US`
          )
            .then((res) => res.json())
            .then((data) => {
              data.results.map((d) => {
                if (d.type == "Trailer") {
                  setVideo(d.key);
                }
              });
            });
        }
      });
  }, []);

  console.log(movie);

  console.log(video);
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
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <a href={`https://www.youtube.com/watch?v=${video}`}>
            {" "}
            <button className="banner_button">Play </button>
          </a>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="fade--bottom" />
    </div>
  );
};

export default Banner;
