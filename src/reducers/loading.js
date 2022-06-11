import { SHOW_LOADING } from "../actions/loading";
import { HIDE_LOADING } from "../actions/loading";

const loading = (state = false, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return true;
    case HIDE_LOADING:
      return false;
    default:
      return state;
  }
};

export default loading;
