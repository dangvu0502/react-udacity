import PollResult from "./PollResult";
import PollDetails from "./PollDetails";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
const Poll = ({ authUser, questions }) => {
  const { id } = useParams();
  const votes = questions[id].optionOne.votes.concat(
    questions[id].optionTwo.votes
  );
  const answered =
    votes.filter((vote) => vote === authUser.id).length > 0 ? true : false;
  return answered ? <PollResult /> : <PollDetails />;
};

export default connect(({ authUser, questions }) => ({ authUser, questions }))(
  Poll
);
