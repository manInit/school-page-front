import React from "react";

import Home from "./home";
import Personal from "./personal_space";
import Trajectory from './trajectory'

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
              <Route path="/trajectory" element={<Trajectory />} />

          </Routes>
          </>
      </Router>
    </div>
  );
}

export default App;
