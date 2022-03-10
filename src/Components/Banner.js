import React from "react";
import "./style/banner.scss";

export const Banner = ({ getData, setinputData, inputData }) => {
  return (
    <div className="banner_conatiner">
      <h1>
        Choose a beautiful <br />
        and suitable font for you 🥰
      </h1>
      <div className="inuputBanner">
        <input
          type="text"
          placeholder="Enter your text"
          value={inputData}
          onChange={(e) => setinputData(e.target.value)}
        />
        <button onClick={() => getData()}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
