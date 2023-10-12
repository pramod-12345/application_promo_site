// import React from "react";

// function AppWall() {
//   const [imageIndex, setImageIndex] = useState(0);

//   const handleClick = (direction) => {
//     if (direction === "prev" && imageIndex > 0) {
//       setImageIndex(imageIndex - 1);
//     } else if (direction === "next" && !(imageIndex >= data.length - 1)) {
//       setImageIndex(imageIndex + 1);
//     } else {
//       setImageIndex(0);
//     }
//   };

//   const currentImage = data[imageIndex];
//   const currentDescription = currentImage.description;
//   const currentTitle = currentImage.title;

//   return (
//     <>
//       <div>AppWall</div>
//       <div className="App">
//         <div className="header-class">
//           <h1 className="app-title">MY APPLICATION PROMO</h1>
//         </div>
//         <div className="main-container">
//           <div className="description-container">
//             <h2>{currentTitle}</h2>
//             {/* <p>{currentDescription}</p> */}
//             <text>{currentDescription}</text>
//           </div>
//           <div className="image-container">
//             <img
//               className="photo"
//               src={currentImage.url}
//               alt={currentDescription}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="button-container">
//         <button onClick={() => handleClick("prev")}>Previous</button>
//         <button className="home-btn" onClick={() => handleClick("home")}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/7133/7133312.png"
//             width={25}
//             height={25}
//           />
//         </button>
//         <button onClick={() => handleClick("next")}>Next</button>
//       </div>
//     </>
//   );
// }

// export default AppWall;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../detailsData.json";
import NavbarComponent from "../../components/Navbar";
import "./index.css";

const ApplicationDetails = () => {
  const { id } = useParams();

  const screensData = data.find((appData) => appData.app_id == id)?.screens;

  const handleClick = (direction) => {
    if (direction === "prev" && imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else if (
      direction === "next" &&
      !(imageIndex >= screensData.length - 1)
    ) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  console.log("screensData ---", screensData);

  const [imageIndex, setImageIndex] = useState(0);
  const currentImage = screensData[imageIndex];
  const currentDescription = currentImage.description;
  const currentTitle = currentImage.title;

  return (
    <div className="main-img">
      <NavbarComponent />
      <div className="App">
        <div className="header-class"></div>
        <div className="main-container flex-column flex-sm-row text-center text-sm-left">
          <div className="description-container">
            <h2>{currentTitle}</h2>
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
      </div>
    </div>
  );
};

export default ApplicationDetails;
