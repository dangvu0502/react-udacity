import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import PollResult from "./PollResult";
import PollDetails from "./PollDetails";
const Poll = ({ authUser, questions }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!questions[id]) navigate("notfound");
  });

  const votes = questions[id]?.optionOne.votes.concat(
    questions[id]?.optionTwo.votes
  );

  const answered =
    votes?.filter((vote) => vote === authUser.id).length > 0 ? true : false;
  return answered ? <PollResult /> : <PollDetails />;
};

export default connect(({ authUser, questions }) => ({ authUser, questions }))(
  Poll
);
