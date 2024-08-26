import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Watch from "./Component/Watch";
import { useState } from "react";
function App() {
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (movieObj) => {
    // const newWatchList = [...watchList];
    // newWatchList.push(id);

    const newWatchList = [...watchList, movieObj];
    localStorage.setItem("watchList", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };
  const handleRemoveFromWatchList = (movieObj) => {
    const newWatchList = watchList.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    localStorage.setItem("watchList", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                watchList={watchList}
                setWatchList={setWatchList}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            }
          ></Route>
          <Route
            path="/watchList"
            element={
              <Watch
                watchList={watchList}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            }
      