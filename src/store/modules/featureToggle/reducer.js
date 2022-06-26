export const INITIAL_STATE = {
  toggles: {
    change_list: false,
    change_router_toggle: false,
    change_color_header: false,
  },
};

const setToggle = (state, action) => {
  const newState = {
    ...state,
    toggles: {
      ...state.toggles,
      ...action.toggle,
    },
  };

  return newState;
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === '@FEATURE_TOGGLES/SET_FEATURE_TOGGLE') {
    return setToggle(state, action);
  }

  return state;
};

export default reducer;
