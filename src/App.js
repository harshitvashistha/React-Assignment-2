import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import WatchList from "./components/WatchList/WatchList";
import Navbar from "./components/Navbar/Navbar";
const MY_TOKEN = "SGfPHlxsT14nRcmJ4GtqC_Q2ULClsuwO7RpmmAa5WpSJte0VSjk";
function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [champions, setChampions] = useState();
  const [wishList, setWishList] = useState([]);
  const fetchChampions = async (pageNumber) => {
    const response = await fetch(
      `https://api.pandascore.co/lol/champions?page[number]=${pageNumber}&page[size]=10&token=${MY_TOKEN}`
    );
    const data = await response.json();
    setChampions(data);
  };
  useEffect(() => {
    fetchChampions(pageNumber);
  }, [pageNumber]);

  const changePageNumber = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  const searchChampions = async (searchKeyword) => {
    const response = await fetch(
      `https://api.pandascore.co/lol/champions?search[name]=${searchKeyword}&token=${MY_TOKEN}`
    );
    const data = await response.json();
    setChampions(data);
  };
  const addToWhishList = (item) => {
    setWishList((prev) => [...prev, item]);
  };
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar length={wishList.length} />
        <input
          type="text"
          onChange={(event) => {
            searchChampions(event.target.value);
          }}
          placeholder="search champions"
          className="container"
          style={{ height: 50, width: 1200, marginTop: 20 }}
        />
        <Switch>
          <Route path="/" exact>
            <Home
              champions={champions}
              setChampions={setChampions}
              fetchChampions={fetchChampions}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              changePageNumber={changePageNumber}
              addToWhishList={addToWhishList}
              wishList={wishList}
            />
          </Route>
          <Route path="/watchlist">
            <WatchList wishList={wishList} setWishList={setWishList} />
          </Route>
          <Route />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
