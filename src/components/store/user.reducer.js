import { LOGIN } from "./actionTypes";

const initialeState = {};

const user = (state = initialeState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        uuid: payload,
        level: payload,
      };

    default:
      return state;
  }
};

export default user;
