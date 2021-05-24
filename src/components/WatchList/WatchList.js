import React, { useEffect, useState } from "react";

const WatchList = ({ wishList, setWishList }) => {
  const removeHandler = (champion_id) => {
    let index;
    for (let i = 0; i < wishList.length; i++) {
      if (wishList[i].id === champion_id) {
        index = i;
        break;
      }
    }
    const temp = [...wishList];
    temp.splice(index, 1);
    setWishList(temp);
  };
  return (
    <div className="container">
      <h1>this is wish list page</h1>
      {wishList &&
        wishList.length > 0 &&
        wishList.map((item) => (
          <p>
            {item.name}{" "}
            <button
              onClick={() => {
                removeHandler(item.id);
              }}
            >
              Remove
            </button>
          </p>
        ))}
    </div>
  );
};

export default WatchList;
