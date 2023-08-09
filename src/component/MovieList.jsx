import React, { useEffect, useState } from "react";
import "../style.scss";
import Cards from "./Cards";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setmovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=180b5f905690e0dce57f6f57ac920387&language=en-US`
      )
      .then(res => res.json())
      .then(data => setmovieList(data.results));
  }, [type]);

  //   useEffect(() => {
  //     getData();
  //   },);

  // useEffect(() => {
  //     getData()
  // }, )

  // const getData = () => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${
  //       type ? type : "popular"
  //     }?api_key=180b5f905690e0dce57f6f57ac920387&language=en-US`
  //   )
  //     .then(res => res.json())
  //     .then(data => setmovieList(data.results));
  // };

//   useEffect(() => {
//     getData();
//   },[type]);
  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "popular").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList.map((movie) => (
          <Cards movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
