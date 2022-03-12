import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import "./style/header.scss";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 30 * 4.5 + 2,
      width: 250,
    },
  },
};

const category = ["sans-serif", "display", "handwriting", "monospace"];

export const DropDown = ({ selectedCategory, setselectedCategory }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setselectedCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="dropDown_conatiner">
      <FormControl sx={{ m: 1, width: 200 }} id="demo-multiple">
        <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedCategory}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {category.map((name) => (
            <MenuItem key={name} value={name}>
              <p style={{ textTransform: "capitalize" }}>{name}</p>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
