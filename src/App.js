import axios from "axios";
import { useEffect, useState } from "react";
import { DisplayCard } from "./Components/DisplayCard";
import { Navbar } from "./Components/Navbar";

function App() {
  const [inputData, setinputData] = useState("");
  const [fontDatas, setfontDatas] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("sans-serif");

  console.log(selectedCategory);
  console.log(fontDatas);

  const getData = () => {
    if (inputData === "") {
      alert("Please enter a text");
    } else {
      axios
        .get(
          `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONT_KEY}`
        )
        .then((response) => {
          // handle success
          setfontDatas(response.data.items);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (inputData === "") {
      setfontDatas([]);
    }
  }, [inputData]);

  return (
    <div className="App">
      <Navbar
        inputData={inputData}
        setinputData={setinputData}
        setfontDatas={setfontDatas}
        getData={getData}
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
      />
      <DisplayCard
        inputData={inputData}
        setinputData={setinputData}
        fontDatas={fontDatas}
        setfontDatas={setfontDatas}
        getData={getData}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
