import React, { useContext } from "react";
import { MovieContext } from "./MoviesContext";

export default function Pagination() {
  const { pageNo, handleNext, handlePrevious } = useContext(MovieContext);
  return (
    <>
      <div className="flex text-2xl gap-8 bg-slate-800/50 m-2 p-4 justify-center">
        <div className="cursor-pointer" onClick={handlePrevious}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="font-bold">{pageNo}</div>
        <div className="cursor-pointer" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </>
  );
}
