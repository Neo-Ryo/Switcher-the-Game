import React from "react";
import { useForm } from "react-hook-form";
import { Container, Button } from "reactstrap";
import style from "../css/Form.module.css";

const Login = () => {
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
