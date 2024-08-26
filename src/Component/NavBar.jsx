import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="flex py-2">
        <img
          src="https://img.freepik.com/free-vector/cinema-film-elements-objects_1017-33459.jpg?t=st=1724345662~exp=1724349262~hmac=e1f283964558ab022707c1c314bca8cc93725081f4997b7776bcb32de95443d4&w=740"
          alt="Movie Icon"
          className="h-10 mx-2"
        />
        <Link to="/" className=" text-2xl font-bold text-sky-400 mx-2">
          Movie
        </Link>

        <Link to="/WatchList" className="text-2xl font-bold text-sky-400 mx-2">
          Watchlist
        </Link>
      </div>
    </>
  );
}
