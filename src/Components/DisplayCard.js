import React, { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { Header } from "./Header";
import usePagination from "./Pagination";
import "./style/displayCard.scss";
import Pagination from "@mui/material/Pagination";

export const DisplayCard = ({
  inputData,
  fontDatas,
  getData,
  setinputData,
  selectedCategory,
  setselectedCategory,
  selectedTransform,
  setselectedTransform,
  fontSize,
  setfontSize,
}) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 60;

  const count = Math.ceil(fontDatas.length / PER_PAGE);
  const _DATA = usePagination(fontDatas, PER_PAGE);
  console.log(count);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

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
          <Header
            selectedTransform={selectedTransform}
            setselectedTransform={setselectedTransform}
            setselectedCategory={setselectedCategory}
            selectedCategory={selectedCategory}
            setfontSize={setfontSize}
          />
          {_DATA
            .currentData()
            .filter(
              (data) =>
                data.category === selectedCategory[0] ||
                selectedCategory[1] ||
                selectedCategory[2] ||
                selectedCategory[3]
            )

            .map((data, index) => (
              <div className="card" key={index}>
                <div className="main_text">
                  <h5
                    style={{
                      fontFamily: data.family,
                      fontSize: `${fontSize}px`,
                      textTransform: selectedTransform,
                    }}
                  >
                    {inputData}
                  </h5>
                </div>
                <div className="fontDetails">
                  <p id="div1">
                    Font Family - <span>{data.family}</span>
                  </p>
                 
                </div>
              </div>
            ))}
          <div className="Pagination">
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              variant="outlined"
              color="primary"
            />
          </div>
        </div>
      )}
    </div>
  );
};
