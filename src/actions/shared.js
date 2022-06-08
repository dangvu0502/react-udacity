import { _getUsers, _getQuestions } from "../_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

const getInitialData = async () => {
  return await Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
};

export const handleInitialData = () => {
  return async (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
};
