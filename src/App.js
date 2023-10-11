// import React, { useState } from "react";
// import "./App.css";
// import data from "./data.json";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBarComponent from "./components/Navbar";

// // const App = () => {

// //   return (

// //     <>
// //     <NavBarComponent/>
// //     <div>
// //       hello HOME
// //     </div></>
// //   );
// // };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import ApplicationDetails from "./screens/AppWall";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={ <Home/> } />
        <Route path="/applications/:id"  element={ <ApplicationDetails/> } />
      </Routes>
    </Router>
  );
};

export default App;
