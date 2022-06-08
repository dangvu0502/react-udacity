import "antd/dist/antd.css";
import React, { useEffect } from "react";
import { handleInitialData } from "./actions/shared";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import Nav from "./components/Nav";
import Login from "./components/Login";
import "./index.css";

const App = ({ authUser, handleInitialData }) => {
  useEffect(() => handleInitialData, []);
  // -------- console.log() --------
  console.log(authUser);
  return (
    <div className="App">
      <Routes>
        {authUser === null ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route
            exact
            path="/"
            element={
              <Row>
                <Col span={20} offset={2}>
                  <Nav />
                </Col>
              </Row>
            }
          />
        )}
      </Routes>
    </div>
  );
};

export default connect(
  ({authUser}) => ({authUser}),
  { handleInitialData }
)(App);
