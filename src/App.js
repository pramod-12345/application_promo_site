import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

const App = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "prev" && imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else if (direction === "next" && !(imageIndex >= data.length - 1)) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  const currentImage = data[imageIndex];
  const currentDescription = currentImage.description;
  const currentTitle = currentImage.title;

  return (
    <>
      <div className="App">
        <div className="header-class">
          <h1 className="app-title">MY APPLICATION PROMO</h1>
        </div>
        <div className="main-container">
          <div className="description-container">
            <h2>{currentTitle}</h2>
            {/* <p>{currentDescription}</p> */}
            <text>{currentDescription}</text>
          </div>
          <div className="image-container">
            <img
              className="photo"
              src={currentImage.url}
              alt={currentDescription}
            />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => handleClick("prev")}>Previous</button>
        <button className="home-btn" onClick={() => handleClick("home")}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7133/7133312.png"
            width={25}
            height={25}
          />
        </button>
        <button onClick={() => handleClick("next")}>Next</button>
      </div>
    </>
  );
};

export default App;
