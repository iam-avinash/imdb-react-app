import React, { useContext } from "react";
import { MovieContext } from "./MoviesContext";

function MovieCard({ title, poster_path, movieObj }) {
  const { watchList, handleRemoveFromWatchList, handleAddToWatchList } =
    useContext(MovieContext);
  function isContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (movieObj.id === watchList[i].id) {
        return true;
      }
    }
    return false;
  }
  return (
    <>
      <div
        className=" flex relative  hover:scale-[0.9] justify-center items-end h-80 w-56 rounded-lg bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
        }}
      >
        {isContain(movieObj) ? (
          <div
            className="text-2xl absolute top-0 right-0 cursor-pointer  m-2 p-1 bg-slate-950/50 rounded-lg"
            onClick={() => handleRemoveFromWatchList(movieObj)}
          >
            &#10060;
          </div>
        ) : (
          <div
            className="text-2xl absolute top-0 right-0 cursor-pointer  m-2 p-1 bg-slate-950/50 rounded-lg"
            onClick={() => handleAddToWatchList(movieObj)}
          >
            &#128525;
          </div>
        )}

        <div className=" text-white py-0.5 bg-slate-950/50 w-full text-center	">
          {title}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
