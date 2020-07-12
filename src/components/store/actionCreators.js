import { LOGIN } from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

export const login = ({ pseudo, password }) => async (dispatch) => {
  try {
    const {
      data: { logs },
    } = await axios.post("https://switcher-fr-api.herokuapp.com/users/login", {
      pseudo,
      password,
    });
    dispatch({ type: LOGIN, payload: logs });
    toast.success(`Welcome ${pseudo}`);
  } catch (error) {
    toast.error("Something went wrong...");
  }
};
