import React from "react";
import Banner from "./Banner";
import TrendingMovies from "./TrendingMovies";

export default function Home({
  watchList,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  setWatchList,
  pageNo,
  handleNext,
  handlePrevious,
}) {
  return (
    <>
      <Banner />
      <TrendingMovies
        watchList={watchList}
        handleAddToWatchList={handleAddToWatchList}
        handleRemoveFromWatchList={handleRemoveFromWatchList}
        setWatchList={setWatchList}
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </>
  );
}
