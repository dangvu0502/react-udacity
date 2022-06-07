import { _getUsers } from "../_DATA";
import { receiveUsers } from "./users";

const getInitialData = async () => {
  return await Promise.all([_getUsers()]).then(([users]) => ({
    users,
  }));
};

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users }) => {
      dispatch(receiveUsers(users));
    });
  };
};
