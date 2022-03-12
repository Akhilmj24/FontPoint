import React from "react";
import "./style/navbar.scss";
import logoblack from "./image/logoblack.png";

export const Navbar = ({ inputData, setinputData, getData, fontDatas }) => {
  return (
    <div className="navBar_conatiner">
      <div className="logo" onClick={() => setinputData("")}>
        <img src={logoblack} alt="FontPoint" />
      </div>
      <div className="input_container">
        <input
          type="text"
          placeholder="enter a word for preview fonts"
          value={inputData}
          onChange={(e) => setinputData(e.target.value)}
          className={fontDatas.length === 0 ? "hideInput" : "showInput"}
        />
        <button
          onClick={() => getData()}
          className={fontDatas.length === 0 ? "hideInput" : "showInput"}
        >
         
         <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
