import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Button, Spinner } from 'reactstrap'
import { signin } from './store/actionCreators'
import style from '../css/Form.module.css'
import { toast } from 'react-toastify'

export default function Signin() {
    const [isLoading, setIsLoading] = useState(false)
    const [togglePassword, setTogglePassword] = useState(true)
    const [pseudo, setPseudo] = useState('')
    const [password, setPassword] = useState('')
    const [picture, setPicture] = useState('')
    //useForm const below
    const { handleSubmit, register, errors } = useForm()
    const dispatch = useDispatch()
    const imgurClient = '2a3093e8d9589af'

    const history = useHistory()

    const handlePicture = (e) => {
        setPicture(e.target.files[0])
    }

    const submitSigns = async (data) => {
        try {
            setIsLoading(true)
            const resImgur = await axios.post(
                'https://api.imgur.com/3/image',
                picture,
                { headers: { Authorization: `Client-ID ${imgurClient}` } }
            )
            const pic = resImgur.data.data.link
            dispatch(signin({ ...data, pic }, history))
        } catch (error) {
            console.log(error)
            toast.error('You must fill every fields and select an picture...')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Row>
                <Col
                    lg={{ size: 8, offset: 2 }}
                    sm={{ size: 6, offset: 3 }}
                    md={{ size: 6, offset: 3 }}
                >
                    <h1 style={{ whiteSpace: 'nowrap' }}>Sign In</h1>
                </Col>
            </Row>
            <Row>
                <Col
                    lg={{ size: 8, offset: 2 }}
                    md={{ size: 8, offset: 2 }}
                    sm={{ size: 10, offset: 1 }}
                    xs={{ size: 12 }}
                >
                    <form onSubmit={handleSubmit(submitSigns)}>
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
                        <label htmlFor="picture" className={style.label}>
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
                                src={
                                    picture
                                        ? URL.createObjectURL(picture)
                                        : picture
                                }
                                alt="this is your profile"
                                width="15%"
                                height="15%"
                            />
                        </div>
                        <Button type="submit" color="info">
                            {isLoading ? <Spinner size="sm" /> : 'SIGNIN'}
                        </Button>
                    </form>
                </Col>
            </Row>
        </>
    )
}
