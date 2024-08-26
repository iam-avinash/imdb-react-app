import React from "react";
import Banner from "./Banner";
import TrendingMovies from "./TrendingMovies";

export default function Home({
  watchList,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  setWatchList,
}) {
  return (
    <>
      <Banner />
      <TrendingMovies
        watchList={watchList}
        handleAddToWatchList={handleAddToWatchList}
        handleRemoveFromWatchList={handleRemoveFromWatchList}
        setWatchList={setWatchList}
      />
    </>
  );
}
