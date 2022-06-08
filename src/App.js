import "antd/dist/antd.css";
import React, { useEffect, Fragment } from "react";
import { handleInitialData } from "./actions/shared";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import PollDetails from "./components/PollDetails";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Home from "./components/Home";
import "./index.css";

const App = ({ authUser, handleInitialData }) => {
  useEffect(() => handleInitialData, []);
  // -------- console.log() --------
  console.log(authUser);
  return (
    <div className="App">
      <Router>
        {authUser === null ? (
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        ) : (
          <Fragment>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Poll/:id" element={<PollDetails />} />
            </Routes>
          </Fragment>
        )}
      </Router>
    </div>
  );
};

export default connect(({ authUser }) => ({ authUser }), { handleInitialData })(
  App
);
