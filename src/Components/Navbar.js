import React from "react";
import "./style/navbar.scss";
import logo from "./image/logo.png";

export const Navbar = ({
  inputData,
  setinputData,
  getData,
  selectedCategory,
  setselectedCategory,
}) => {
  return (
    <div className="navBar_conatiner">
      <div className="logo">
        <img src={logo} alt="FontPoint" />
      </div>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter your text"
          value={inputData}
          onChange={(e) => setinputData(e.target.value)}
        />
        <button onClick={() => getData()}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="menu_container">
        <select
          name="category"
          onChange={(e) => setselectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="display">Display</option>
          <option value="handwriting">Handwriting</option>
          <option value="monospace">Monospace</option>
        </select>
      </div>
    </div>
  );
};
