import React from "react";

import Home from "./home";
import Personal from "./personal_space";
import TrajectoryList from './trajectory_list'
import Sign_on from "./sign_on";
import Sign_in from "./sign_in";

import {
  BrowserRouter as Router,
  Route,
  Routes
  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/trajectory_list" element={<TrajectoryList />} />
              <Route path="/register" element={<Sign_on />} />
              <Route path="/login" element={<Sign_in />} />

          </Routes>
          </>
      </Router>
    </div>
  );
}

export default App;
