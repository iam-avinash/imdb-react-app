import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from "axios";
export default function TrendingMovies({
  watchList,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  setWatchList,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function handleNext() {
    setPageNo(pageNo + 1);
  }

  function handlePrevious() {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  }

  useEffect(() => {
    let apiKey = "93adede0a1f1e4785f88203448555798";
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${pageNo}`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [pageNo]);
  if (movies.length === 0) {
    return <>..Loading</>;
  }

  return (
    <>
      <div className="text-center text-2xl font-bold text-stone-900 m-4	">
        Trending Movies
      </div>
      <div className="mx-2 flex flex-wrap justify-around gap-4 p-4	">
        {movies.map(function (movieObj) {
          return (
            <MovieCard
              key={movieObj.id}
              id={movieObj.id}
              movieObj={movieObj}
              title={movieObj.title}
              poster_path={movieObj.poster_path}
              watchList={watchList}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          );
        })}
      </div>

      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </>
  );
}
