import { LOGIN, SIGNIN, LEVELUP } from "./actionTypes";

const initialeState = {
  uuid: "",
  level: null,
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
    case LEVELUP:
      return {
        ...state,
        level: payload,
      };

    default:
      return state;
  }
};

export default user;
