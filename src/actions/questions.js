import { _saveQuestionAnswer } from "../_DATA";
import { _saveQuestion } from "../_DATA";


export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_VOTE_TO_QUESTION = "ADD_VOTE_TO_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

function addVoteToQuestion({ authUser, qid, answer }) {
  return {
    type: ADD_VOTE_TO_QUESTION,
    payload: {
      authUser,
      qid,
      answer,
    },
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddAnswerToQuestion({ qid, answer }) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    return _saveQuestionAnswer({
      qid: qid,
      answer: answer,
      authedUser: authUser.id,
    }).then(() => dispatch(addVoteToQuestion({ qid, answer, authUser })));
  };
}

export function handleAddQuestion({ optionOne, optionTwo }) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    return _saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authUser.id,
    }).then((question) => dispatch(addQuestion(question)));
  };
}