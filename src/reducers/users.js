import { RECEIVE_USERS } from "../actions/users";
import { ADD_ANSWER_TO_QUESTION } from "../actions/questions";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_TO_QUESTION:
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
    default:
      return state;
  }
};

export default users;
