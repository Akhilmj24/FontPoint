import React from "react";
import "./style/header.scss";
import { DropDown } from "./DropDown";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  track: {
    background: "black",
  },
  thumb: {
    background: "black",
  },
  mark: {
    background: "black",
  },
  rail: {
    background: "black",
  },
}));

export const Header = ({
  selectedCategory,
  setselectedCategory,
  selectedTransform,
  setselectedTransform,
  setfontSize,
}) => {
  var valuetext = (value) => {
    setfontSize(value);
  };
  const classes = useStyles();
  return (
    <div className="header_container">
      <div className="fontCategory">
        {/* <select
            name="category"
            onChange={(e) => setselectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value="sans-serif">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="display">Display</option>
            <option value="handwriting">Handwriting</option>
            <option value="monospace">Monospace</option>
          </select> */}
        <DropDown
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
      </div>
      <div className="fontTransform">
        <button
          onClick={() => setselectedTransform("capitalize")}
          value={selectedTransform}
        >
          Capitalize
        </button>
        <button
          onClick={() => setselectedTransform("lowercase")}
          value={selectedTransform}
        >
          Lowercase
        </button>
        <button
          onClick={() => setselectedTransform("uppercase")}
          value={selectedTransform}
        >
          Uppercase
        </button>
      </div>
      <div className="fontSilder">
        <Box sx={{ width: 200 }}>
          <Slider
            classes={{
              thumb: classes.thumb,
              rail: classes.rail,
              track: classes.track,
              mark: classes.mark,
            }}
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </Box>
      </div>
    </div>
  );
};
