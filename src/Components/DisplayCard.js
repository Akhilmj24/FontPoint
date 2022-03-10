import React from "react";
import { Banner } from "./Banner";
import "./style/displayCard.scss";

export const DisplayCard = ({
  inputData,
  fontDatas,
  getData,
  setinputData,
  selectedCategory,
}) => {
  return (
    <div className="display_container">
      {fontDatas.length === 0 ? (
        <Banner
          getData={getData}
          setinputData={setinputData}
          inputData={inputData}
        />
      ) : (
        <div className="display">
          {fontDatas
            .filter((data) => data.category === selectedCategory)
            .map((data, index) => (
              <div className="card" key={index}>
                <h5 style={{ fontFamily: data.family }}>{inputData}</h5>
                <p id="div1">
                  Font Family - <span>{data.family}</span>
                </p>
                <p>
                  Font Category - <span>{data.category}</span>
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
