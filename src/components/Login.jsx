import React, { useState, useEffect } from 'react'
import style from '../css/Form.module.css'
import { Button, Spinner, Row, Col } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from './store/actionCreators'

export default function LogIn() {
    const [isLoading, setIsLoading] = useState(false)
    const [togglePassword, setTogglePassword] = useState(true)
    const [pseudo, setPseudo] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const history = useHistory()
    //useForm const below
    const { handleSubmit, register, errors } = useForm()

    const submitLogs = async (data) => {
        try {
            setIsLoading(true)
            dispatch(login({ ...data }, history))
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        console.log(history)
    }, [])

    return (
        <>
            <Row>
                <Col
                    lg={{ size: 8, offset: 2 }}
                    sm={{ size: 6, offset: 3 }}
                    md={{ size: 6, offset: 3 }}
                >
                    <h1 style={{ whiteSpace: 'nowrap' }}>Log In</h1>
                </Col>
            </Row>
            <Row>
                <Col
                    lg={{ size: 8, offset: 2 }}
                    md={{ size: 8, offset: 2 }}
                    sm={{ size: 10, offset: 1 }}
                    xs={{ size: 12 }}
                >
                    <form onSubmit={handleSubmit(submitLogs)}>
                        <label htmlFor="pseudo" className={style.label}>
                            Pseudo
                        </label>
                        <div>
                            <input
                                className={style.input}
                                onChange={(e) => setPseudo(e.target.value)}
                                name="pseudo"
                                placeholder="enter your pseudo"
                                ref={register({
                                    required: 'Required',
                                })}
                            />
                            {errors.pseudo && errors.pseudo.message}
                        </div>
                        <label htmlFor="password" className={style.label}>
                            Password
                        </label>
                        <div>
                            <input
                                className={style.input}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                placeholder="enter your secret superhero name"
                                type={togglePassword ? 'password' : 'text'}
                                ref={register({
                                    required: 'Required',
                                })}
                            />
                            {errors.password && errors.password.message}
                        </div>
                        <Row>
                            <Col>
                                <Button
                                    className={style.password}
                                    onClick={() => {
                                        setTogglePassword(!togglePassword)
                                    }}
                                    color={togglePassword ? '' : 'secondary'}
                                    size="sm"
                                >
                                    {togglePassword
                                        ? 'show password'
                                        : 'hide password'}
                                </Button>
                            </Col>
                        </Row>

                        <Button type="submit" color="info" disabled={isLoading}>
                            {isLoading ? <Spinner size="sm" /> : 'LOGIN'}
                        </Button>
                    </form>
                </Col>
            </Row>
        </>
    )
}
