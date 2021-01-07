import { LOGIN, SIGNIN, LEVELUP } from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../../urls";

export const login = ({ pseudo, password }) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}/users/login`, {
      pseudo,
      password,
    });
    dispatch({ type: LOGIN, payload: res.data });
    sessionStorage.setItem("uuid", res.data.uuid);
    toast.success(`Welcome back ${pseudo}`);
  } catch (error) {
    toast.error("Something went wrong..., Login is incorrect");
  }
};

export const signin = ({ pseudo, password }) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}/users`, {
      pseudo,
      password,
    });
    dispatch({ type: SIGNIN, payload: res.data });
    sessionStorage.setItem("uuid", res.data.uuid);
    toast.success(`Welcome ${pseudo}`);
  } catch (error) {
    toast.error("Something went wrong... Your sign in action didn't work");
  }
};

export const levelUp = () => async (dispatch) => {
  try {
    const uuid = sessionStorage.getItem("uuid");
    const res = await axios.put(`${url}/levels/${uuid}/levelUp`);
    dispatch({ type: LEVELUP, payload: res.data.name });
    sessionStorage.setItem("level", res.data.name);
  } catch (error) {
    toast.error("Something went wrong... Level up did not work, you might have to do it again");
  }
};
