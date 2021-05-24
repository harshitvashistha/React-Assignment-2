import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Home = ({ champions, addToWhishList, changePageNumber, wishList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  function disableHandler(champion_id) {
    for (let i = 0; i < wishList.length; i++) {
      if (wishList[i].id === champion_id) {
        return true;
      }
    }
    return false;
  }
  const modalDataHandler = (data) => {
    setModalData(data);
    setIsOpen(true);
    console.log(data);
  };
  return (
    <div className="container">
      {modalData && isOpen && (
        <Modal modalData={modalData} setIsOpen={setIsOpen}></Modal>
      )}
      <h1>Below are our champions</h1>
      {champions ? (
        champions.map((champion) => (
          <div key={Math.random()}>
            <li>{champion.name} </li>
            <button
              onClick={() => {
                addToWhishList(champion);
              }}
              disabled={disableHandler(champion.id)}
            >
              Add to watch list
            </button>
            <button
              style={{ margin: 10 }}
              onClick={() => {
                modalDataHandler(champion);
              }}
            >
              details
            </button>

            <br />
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
      {[1, 2, 3, 4].map((i) => (
        <button
          key={i}
          style={{ width: 50, margin: 10 }}
          onClick={() => {
            changePageNumber(i);
          }}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default Home;
