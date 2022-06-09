import {
  RECEIVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
} from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER_TO_QUESTION:
      const { qid, answer, authUser } = action.payload;
      console.log({
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authUser]),
          },
        },
      });
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authUser]),
          },
        },
      };
    default:
      return state;
  }
};

export default questions;
