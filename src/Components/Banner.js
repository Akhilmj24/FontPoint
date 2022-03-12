import React from "react";
import "./style/banner.scss";

export const Banner = ({ getData, setinputData, inputData }) => {
  return (
    <div className="banner_conatiner">
      <div className="banner_content">
        <h1>
          Help you choose a beautiful <br />
          and suitable font for your <br />
          creative projects 🥰
        </h1>
      </div>
      <div className="inuputBanner">
        <input
          type="text"
          placeholder="enter a word for preview fonts"
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
