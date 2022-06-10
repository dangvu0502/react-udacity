import "./index.css";
import "antd/dist/antd.css";

import React, { useEffect, Fragment } from "react";
import { handleInitialData } from "./actions/shared";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import PollDetails from "./components/PollDetails";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Home from "./components/Home";
import NewPoll from "./components/NewPoll";
import LeaderBoard from "./components/LeaderBoard";
import PollResult from "./components/PollResult";

const App = ({ authUser, handleInitialData }) => {
  useEffect(() => {
    handleInitialData();
  }, []);

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
              <Route exact path="/questions/:id" element={<PollDetails />} />
              <Route exact path="/results/:id" element={<PollResult />} />
              <Route exact path="/add" element={<NewPoll />} />
              <Route exact path="/leaderboard" element={<LeaderBoard />} />
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
