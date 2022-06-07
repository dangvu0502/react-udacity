import "antd/dist/antd.css";
import React, { useEffect } from "react";
import { handleInitialData } from "./actions/shared";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";
import "./index.css";

const App = ({ authUser, handleInitialData }) => {
  useEffect(() => handleInitialData);
  // -------- console.log() --------
  console.log(authUser);
  return (
    <div className="App">
      <Routes>
        {authUser === null ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route exact path="/" element={<Home />} />
        )}
      </Routes>
    </div>
  );
};

export default connect(
  (state) => ({
    authUser: state.authUser,
  }),
  { handleInitialData }
)(App);
