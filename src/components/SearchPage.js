import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "../css/search.css";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=3e04f10540e1a09b1e0052f09bd9adfb&language=en-US&query=${location.state}&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      });
  }, []);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const truncate = (string,n) => {
    return string?.length > n ? string.substr(0,n-1)+ "..." : string;
  }
  return (
    <div className="search-page">
      <h1>SEARCH RESULTS</h1>
      <div className="search_content">
      {data.slice(0, 5).map(
        (d) =>
          d.poster_path && (
            <div className="card">
              <img key={d.id} src={`${base_url}${d.poster_path}`} />
              <div className="card_content">
                <h2>{d.name || d.original_title}</h2>
                <p>{truncate(d.overview,100)}</p>
                <p>IMDB - {d.vote_average}</p>
              </div>
            </div>
          )
      )}
      </div>
    </div>
  );
};

export default SearchPage;
