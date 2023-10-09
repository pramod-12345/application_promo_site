import React from "react";
import screenshotData from "./applicationData.json";

const MobileFrame = ({ screenshotData }) => {
  const frameStyle = {
    border: "1px solid red",
    borderRadius: "10px",
    margin: "20px",
    padding: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "300px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "5px",
  };

  const descriptionStyle = {
    marginTop: "10px",
    fontSize: "16px",
  };

  return (
    <div style={frameStyle}>
      <img
        src={screenshotData.screenshotURL}
        alt={screenshotData.title}
        style={imageStyle}
      />
      <div style={descriptionStyle}>{screenshotData.description}</div>
    </div>
  );
};

const App = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const incrementIndex = () =>
    currentIndex < screenshotData.length - 1 &&
    setCurrentIndex(currentIndex + 1);

  const decrementIndex = () =>
    currentIndex > 0 && setCurrentIndex(currentIndex - 1);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <MobileFrame
        key={screenshotData[currentIndex].id}
        screenshotData={screenshotData[currentIndex]}
      />
      <button
        title="test"
        style={{ height: 100, width: 200 }}
        onClick={() => incrementIndex()}
      ></button>
      <button
        title="test"
        style={{ height: 100, width: 200, backgroundColor: "red" }}
        onClick={() => decrementIndex()}
      ></button>
    </div>
  );
};

export default App;
