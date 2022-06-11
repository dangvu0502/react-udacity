import "antd/dist/antd.min.css";
import React, { useEffect, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Poll from "./Poll";
import Nav from "./Nav";
import Login from "./Login";
import Home from "./Home";
import NewPoll from "./NewPoll";
import LeaderBoard from "./LeaderBoard";
import NotFound from "./NotFound";

const App = ({ authUser, handleInitialData }) => {
  useEffect(() => {
    handleInitialData();
  });

  return (
    <div className="App">
      <Router>
        {authUser === null ? (
          <Login />
        ) : (
          <Fragment>
            <Nav />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/questions/:id" element={<Poll />} />
              <Route path="/add" element={<NewPoll />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
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
