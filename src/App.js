import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import NotFound from "./component/NotFound";

// import '../styles/global.css'

const App = () => {
  return (
    <>
      <h1></h1>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/login">About</Link>
        <Link to="/hgj">Home</Link>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
