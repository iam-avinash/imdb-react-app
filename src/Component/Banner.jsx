import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Banner() {
  const [movieObj, setMovieObj] = useState({});
  useEffect(() => {
    let apiKey = "93adede0a1f1e4785f88203448555798";
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then(function (res) {
        let movies = res.data.results;
        let randomMovieData = movies[Math.floor(Math.random() * 20)];

        setMovieObj(randomMovieData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  if (movieObj.backdrop_path === undefined) {
    return <>...Loading</>;
  }
  return (
    <>
      <div
        className=" h-[70vh] flex justify-center items-end  bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`,
        }}
      >
        <div className="text-white py-1 bg-slate-950/50 w-full text-center">
          {movieObj.title}
        </div>
      </div>
    </>
  );
}
