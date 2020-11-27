import { SET_NAV_SECONDARY } from "../actions";

const navSecondaryReducer = (state, action) => {
  // Compute and returen the new state
  if (state == null) {
    return [];
  }

  // TODO: handle actions
  switch (action.type) {
    case SET_NAV_SECONDARY:
      return action.payload;
    default:
      return state;
  }
};

export default navSecondaryReducer;
