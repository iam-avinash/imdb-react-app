import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Watch from "./Component/Watch";
import { useState, useEffect } from "react";
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
                pageNo={pageNo}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                setPageNo={setPageNo}
              />
            }
          ></Route>
          <Route
            path="/watchList"
            element={
              <Watch
                watchList={watchList}
                setWatchList={setWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
