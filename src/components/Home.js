import React from "react";
import Nav from "./Nav";
import { connect } from "react-redux";


const Home = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

export default connect()(Home);
