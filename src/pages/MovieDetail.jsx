import React, { useEffect, useState } from "react";
import "../style.scss";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  // useEffect(() => {
  //     getData()
  //     window.scrollTo(0,0)
  // }, [])

  // const getData = () => {
  //     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
  //     .then(res => res.json())
  //     .then(data => setMovieDetail(data))
  // }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=180b5f905690e0dce57f6f57ac920387&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  });

  return (
    <div className="movieDetail">
      <div className="movie_intro">
        <img
          src={`https://image.tmdb.org/t/p/original${
            movieDetail ? movieDetail.backdrop_path : ""
          }`}
          alt=""
          className="movie_backdrop"
        />
      </div>

      <div className="movie_detail">
        <div className="movie_detailLeft">
          <div className="movie_posterBox">
            <img
              src={`https://image.tmdb.org/t/p/original${
                movieDetail ? movieDetail.poster_path : ""
              }`}
              alt=""
              className="movie_poster"
            />
          </div>
        </div>

        <div className="movie_detailRight">
          <div className="movie_detailRightTop">
            <div className="movie_name">
              {movieDetail ? movieDetail.original_title : ""}
            </div>

            <div className="movie_tagline">
              {movieDetail ? movieDetail.tagline : ""}
            </div>

            <div className="movie_rating">
              {movieDetail ? movieDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="movie_voteCount">
                {movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}
              </span>
            </div>

            <div className="movie_runtime">
              {movieDetail ? movieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie_releaseDate">
              {movieDetail ? "Release date: " + movieDetail.release_date : ""}
            </div>
            <div className="movie_genres">
              {movieDetail && movieDetail.genres
                ? movieDetail.genres.map((genre) => (
                    <>
                      <span
                        className="movie_genre"
                        id={genre.id}
                        key={genre.id}
                      >
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>

          <div className="movie_detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{movieDetail ? movieDetail.overview : ""}</div>
          </div>
        </div>
      </div>

      <div className="movie_links">
        <div className="movie_heading">Useful Links</div>
        {movieDetail && movieDetail.homepage && (
          <a
            href={movieDetail.homepage}
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie_homeButton movie_Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {movieDetail && movieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + movieDetail.imdb_id}
            target="blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie_imdbButton movie_Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>

      <div className="movie_heading">Production companies</div>

      <div className="movie_production">
        {movieDetail &&
          movieDetail.production_companies &&
          movieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage" key={company.id}>
                  <img
                    className="movie_productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                    alt=""
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default MovieDetail;
