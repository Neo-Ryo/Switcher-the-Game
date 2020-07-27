import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { url } from "../urls";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Spinner } from "reactstrap";
import style from "../css/Form.module.css";
import { login, signin } from "./store/actionCreators";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(true);
  const [toggleRegister, setToggleRegister] = useState(true);
  const [pseudo, setPseudo] = useState();
  const [password, setPassword] = useState();
  const [picture, setPicture] = useState("");
  //useForm const below
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const uuid = sessionStorage.getItem("uuid");
  const imgurClient = "2a3093e8d9589af";

  const history = useHistory();

  const handlePicture = (e) => {
    setPicture(e.target.files[0]);
  };

  const submitLogs = async (data) => {
    try {
      setIsLoading(true);
      await dispatch(login({ ...data }));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const submitSigns = async (data) => {
    try {
      setIsLoading(true);
      const resImgur = await axios.post(
        "https://api.imgur.com/3/image",
        picture,
        { headers: { Authorization: `Client-ID ${imgurClient}` } }
      );
      const {
        data: { uuid },
      } = await axios.post(`${url}/users`, {
        pseudo,
        password,
        picture: resImgur.data.data.link,
      });
      sessionStorage.setItem("uuid", uuid);
    } catch (error) {
      toast.error("I must fill every fields and select an picture...");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (uuid) {
      history.push("/game-board");
    }
  }, [uuid]);

  if (toggleRegister) {
    return (
      <>
        <Col style={{ marginTop: "10vh" }} fluid>
          <Row>
            <Button
              className={style.loggin}
              onClick={() => setToggleRegister(!toggleRegister)}
              color="warning"
              disabled
            >
              Loging
            </Button>
            <p className={style.or}>OR</p>
            <Button
              onClick={() => setToggleRegister(!toggleRegister)}
              color="warning"
              outline
            >
              Signing
            </Button>
          </Row>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              sm={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
              fluid
            >
              <h5
                style={{
                  whiteSpace: "nowrap",
                  marginTop: "5vh",
                  marginBottom: "5vh",
                }}
              >
                If you already have an account
              </h5>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              sm={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
              fluid
            >
              <h1 style={{ whiteSpace: "nowrap" }}>Log In</h1>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              md={{ size: 8, offset: 2 }}
              sm={{ size: 10, offset: 1 }}
              xs={{ size: 12 }}
              fluid
            >
              <form onSubmit={handleSubmit(submitLogs)}>
                <label for="pseudo" className={style.label}>
                  Pseudo
                </label>
                <div>
                  <input
                    className={style.input}
                    onChange={(e) => setPseudo(e.target.value)}
                    name="pseudo"
                    placeholder="enter your pseudo"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.pseudo && errors.pseudo.message}
                </div>
                <label for="password" className={style.label}>
                  Password
                </label>
                <div>
                  <input
                    className={style.input}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="enter your secret superhero name"
                    type={togglePassword ? "password" : "text"}
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.password && errors.password.message}
                </div>
                <Row>
                  <Col>
                    <Button
                      className={style.password}
                      onClick={() => {
                        setTogglePassword(!togglePassword);
                      }}
                      color={togglePassword ? "" : "secondary"}
                      size="sm"
                    >
                      {togglePassword ? "show password" : "hide password"}
                    </Button>
                  </Col>
                </Row>

                <Button type="submit" color="info" disabled={isLoading}>
                  {isLoading ? <Spinner size="sm" /> : "LOGIN"}
                </Button>
              </form>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginTop: "20vh" }}>
              <p>this place is dark, isn't it?</p>
            </Col>
          </Row>
        </Col>
      </>
    );
  } else {
    return (
      <>
        <Col style={{ marginTop: "10vh" }} fluid>
          <Row>
            <Button
              className={style.loggin}
              onClick={() => setToggleRegister(!toggleRegister)}
              color="warning"
              outline
            >
              Loging
            </Button>
            <p className={style.or}>OR</p>
            <Button
              onClick={() => setToggleRegister(!toggleRegister)}
              color="warning"
              disabled
            >
              Signing
            </Button>
          </Row>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              sm={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
              fluid
            >
              <h5
                style={{
                  whiteSpace: "nowrap",
                  marginTop: "5vh",
                  marginBottom: "5vh",
                }}
              >
                You can create an account
              </h5>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              sm={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
              fluid
            >
              <h1 style={{ whiteSpace: "nowrap" }}>Sign In</h1>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ size: 8, offset: 2 }}
              md={{ size: 8, offset: 2 }}
              sm={{ size: 10, offset: 1 }}
              xs={{ size: 12 }}
              fluid
            >
              <form onSubmit={handleSubmit(submitSigns)}>
                <label for="pseudo" className={style.label}>
                  Pseudo
                </label>
                <div>
                  <input
                    className={style.input}
                    onChange={(e) => setPseudo(e.target.value)}
                    name="pseudo"
                    placeholder="enter your pseudo"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.pseudo && errors.pseudo.message}
                </div>
                <label for="password" className={style.label}>
                  Password
                </label>
                <div>
                  <input
                    className={style.input}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="enter your secret superhero name"
                    type={togglePassword ? "password" : "text"}
                    ref={register({
                      required: "Required",
                    })}
                  />
                  {errors.password && errors.password.message}
                </div>
                <Row>
                  <Col>
                    <Button
                      className={style.password}
                      onClick={() => {
                        setTogglePassword(!togglePassword);
                      }}
                      color={togglePassword ? "" : "secondary"}
                      size="sm"
                    >
                      {togglePassword ? "show password" : "hide password"}
                    </Button>
                  </Col>
                </Row>
                <label for="picture" className={style.label}>
                  Select a picture
                </label>
                <div>
                  <input
                    className={style.input}
                    name="picture"
                    type="file"
                    file={picture}
                    onChange={handlePicture}
                  />
                  {errors.password && errors.password.message}
                </div>
                <div>
                  <img
                    src={picture}
                    alt="this is your profile"
                    width="15%"
                    height="15%"
                  />
                </div>
                <Button type="submit" color="info">
                  {isLoading ? <Spinner size="sm" /> : "LOGIN"}
                </Button>
              </form>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginTop: "20vh" }}>
              <p>this place is dark, isn't it?</p>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
};

export default Login;
