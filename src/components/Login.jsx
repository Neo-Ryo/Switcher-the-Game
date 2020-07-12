import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Container, Button, Spinner } from "reactstrap";
import style from "../css/Form.module.css";
import { login } from "./store/actionCreators";

const Login = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(true);
  //useForm const below
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();

  const submitLogs = async (data) => {
    try {
      setIsLoading(true);
      await dispatch(login({ ...data }));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className={style.wrapper} fluid>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(submitLogs)}>
        <label for="pseudo" className={style.label}>
          Pseudo
        </label>
        <div>
          <input
            className={style.input}
            name="pseudo"
            placeholder="enter your pseudo"
            ref={register({
              required: "Required",
            })}
          />
          {errors.pseudo && errors.pseudo.message}
        </div>
        <label for="pseudo" className={style.label}>
          Password
        </label>
        <div>
          <input
            className={style.input}
            name="pseudo"
            placeholder="enter your secret superhero name"
            type={togglePassword ? "password" : "text"}
            ref={register({
              required: "Required",
            })}
          />
          <Button
            onClick={() => {
              setTogglePassword(!togglePassword);
            }}
            outline
            color="secondary"
            size="sm"
          >
            {togglePassword ? "show" : "hide"}
          </Button>
          {errors.password && errors.password.message}
        </div>
        <Button type="submit" color="info">
          {IsLoading ? <Spinner size="sm" /> : "LOGIN"}
        </Button>
      </form>
    </Container>
  );
};

export default Login;
