import { RECEIVE_USERS } from "../actions/users";
import { ADD_VOTE_TO_QUESTION } from "../actions/questions";
import { ADD_QUESTION_TO_USER } from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_VOTE_TO_QUESTION:
      const { qid, answer, authUser } = action.payload;
      return {
        ...state,
        [authUser.id]: {
          ...state[authUser.id],
          answers: {
            ...state[authUser.id].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_QUESTION_TO_USER:
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };
    default:
      return state;
  }
};

export default users;
