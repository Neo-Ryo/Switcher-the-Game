import { LOGIN, SIGNIN } from "./actionTypes";

const initialeState = {
  uuid: "",
};

const user = (state = initialeState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        uuid: payload,
      };
    case SIGNIN:
      return {
        ...state,
        uuid: payload,
      };

    default:
      return state;
  }
};

export default user;
