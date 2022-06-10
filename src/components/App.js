import "antd/dist/antd.css";
import React, { useEffect, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import PollDetails from "./PollDetails";
import Nav from "./Nav";
import Login from "./Login";
import Home from "./Home";
import NewPoll from "./NewPoll";
import LeaderBoard from "./LeaderBoard";
import PollResult from "./PollResult";
import NotFound from "./NotFound";

const App = ({ authUser, handleInitialData }) => {
  useEffect(() => {
    handleInitialData();
  }, []);

  return (
    <div className="App">
      <Router>
        {authUser === null ? (
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="*" element={<NotFound />} />
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
