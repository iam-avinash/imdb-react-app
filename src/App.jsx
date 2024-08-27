import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Watch from "./Component/Watch";
import { useState, useEffect } from "react";
import { MovieContext } from "./Component/MoviesContext";
function App() {
  const [watchList, setWatchList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  function handleNext() {
    setPageNo(pageNo + 1);
  }

  function handlePrevious() {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  }

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

  useEffect(() => {
    let watchListFromLocalStorage = JSON.parse(
      localStorage.getItem("watchList")
    );
    if (watchListFromLocalStorage === null) {
      return;
    }

    setWatchList(watchListFromLocalStorage);
  }, []);

  return (
    <>
      <BrowserRouter>
        <MovieContext.Provider
          value={{
            watchList,
            setWatchList,
            handleAddToWatchList,
            handleRemoveFromWatchList,
            pageNo,
            handleNext,
            handlePrevious,
            setPageNo,
          }}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/watchList" element={<Watch />}></Route>
          </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
