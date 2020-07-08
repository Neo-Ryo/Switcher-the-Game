import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Button } from "reactstrap";
import style from "../css/Form.module.css";
import axios from "axios";

const Login = () => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {

  // }, []);

  const getPseudos = async () => {
    try {
      const res = await axios.post("marequetteAPI");
      setToken(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //useForm const below
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <Container className={style.wrapper} fluid>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="pseudo" className={style.label}>
          Pseudo
        </label>
        <div>
          <input
            className={style.input}
            name="pseudo"
            placeholder="enter your pseudo"
            ref={register({
              validate: (value) => value !== "admin" || "Nice try!",
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
            placeholder="enter your name"
            ref={register({
              validate: (value) => value !== "admin" || "Nice try!",
            })}
          />
          {errors.password && errors.password.message}
        </div>
        <Button type="submit" color="info">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Login;
