import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import Login from './Login'
import SignIn from './SignIn'
import style from '../css/Form.module.css'

const Connexion = () => {
    const [toggleRegister, setToggleRegister] = useState(true)

    return (
        <>
            <Col style={{ marginTop: '10vh' }}>
                <Row>
                    <Button
                        className={style.loggin}
                        onClick={() => setToggleRegister(!toggleRegister)}
                        color="warning"
                        disabled={toggleRegister}
                        outline={!toggleRegister}
                    >
                        Loging
                    </Button>
                    <p className={style.or}>OR</p>
                    <Button
                        onClick={() => setToggleRegister(!toggleRegister)}
                        color="warning"
                        disabled={!toggleRegister}
                        outline={toggleRegister}
                    >
                        Signing
                    </Button>
                </Row>
                {toggleRegister ? <Login /> : <SignIn />}
                <Row>
                    <Col style={{ marginTop: '20vh' }}>
                        <p>this place is dark, isn't it?</p>
                    </Col>
                </Row>
            </Col>
        </>
    )
}

export default Connexion
