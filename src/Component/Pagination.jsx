import React, { useState } from "react";

export default function Pagination({ pageNo, handleNext, handlePrevious }) {
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
