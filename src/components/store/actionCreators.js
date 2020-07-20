import { LOGIN, SIGNIN, LEVELUP } from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../../urls";

export const login = ({ pseudo, password }) => async (dispatch) => {
  try {
    const {
      data: { uuid },
    } = await axios.post(`${url}/users/login`, {
      pseudo,
      password,
    });
    dispatch({ type: LOGIN, payload: uuid });
    localStorage.setItem("uuid", uuid);
    toast.success(`Welcome back ${pseudo}`);
  } catch (error) {
    toast.error("Something went wrong...");
  }
};

export const signin = ({ pseudo, password }) => async (dispatch) => {
  try {
    const {
      data: { uuid },
    } = await axios.post(`${url}/users`, {
      pseudo,
      password,
    });
    dispatch({ type: SIGNIN, payload: uuid });
    localStorage.setItem("uuid", uuid);
    toast.success(`Welcome ${pseudo}`);
  } catch (error) {
    toast.error("Something went wrong...");
  }
};

export const levelUp = () => async (dispatch) => {
  try {
    const uuid = localStorage.getItem("uuid");
    const {
      data: { level },
    } = await axios.post(`${url}/users/${uuid}/level`);
    dispatch({ type: LEVELUP, payload: level });
  } catch (error) {
    toast.error("Something went wrong...");
  }
};
