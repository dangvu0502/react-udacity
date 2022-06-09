import { _saveQuestionAnswer } from "../_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

function addAnswerToQuestion({ authUser, qid, answer }) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    payload: {
      authUser,
      qid,
      answer,
    },
  };
}

export function handleAddAnswerToQuestion({ qid, answer }) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    return _saveQuestionAnswer({
      qid: qid,
      answer: answer,
      authedUser: authUser.id,
    }).then(() => dispatch(addAnswerToQuestion({ qid, answer, authUser })));
  };
}
