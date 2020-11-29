import { SET_PARTICIPANTS, FETCH_PARTICIPANTS } from "../actions";

const participantsReducer = (state, action) => {
  // Compute and returen the new state
  if (state == undefined) {
    return [];
  }

  // TODO: handle actions
  switch (action.type) {
    case SET_PARTICIPANTS:
      return action.payload;
    case FETCH_PARTICIPANTS:
      return action.payload;
    default:
      return state;
  }
};

export default participantsReducer;
