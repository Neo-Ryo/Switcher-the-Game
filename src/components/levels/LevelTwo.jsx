import React, { useState, useEffect } from 'react'
import style from './css/LevelTwo.module.css'
import { Link, useHistory } from 'react-router-dom'
import { Button, Spinner, Container, Row, Col } from 'reactstrap'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { url } from '../../urls'
import { levelUp } from '../store/actionCreators'
import ModalTwo from './ModalTwo'
import { Fade } from 'react-reveal'

export default function LevelTwo() {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)
    // const [levelDone, setLevelDone] = useState(false);
    const [isSolved, setisSolved] = useState(false)

    //those states are in game states
    const [switchOne, setswitchOne] = useState(false)
    const [switchTwo, setswitchTwo] = useState(false)
    const [switchThree, setswitchThree] = useState(false)
    const [switchFour, setswitchFour] = useState(true)
    const [switchFive, setswitchFive] = useState(true)
    const [switchSix, setswitchSix] = useState(true)
    const [switchSeven, setswitchSeven] = useState(false)
    const [switchEight, setswitchEight] = useState(false)
    const [switchNine, setswitchNine] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const level = sessionStorage.getItem('level')

    const levelId = 2
    const uuid = sessionStorage.getItem('uuid')
    const token = sessionStorage.getItem('token')

    // const levelStored = localStorage.getItem("level");

    const getUser = async () => {
        try {
            setIsLoading(true)
            const res = await Axios.get(`${url}/users/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setUser(res.data)
            setIsLoading(false)
        } catch (error) {
            alert('Problems!')
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const goLevelUp = async () => {
        try {
            dispatch(levelUp(history))
            getUser()
        } catch (error) {
            console.log(error)
        }
    }

    const switchOneTrick = () => {
        setswitchOne(!switchOne)
        setswitchNine(!switchNine)
    }

    const switchTwoTrick = () => {
        setswitchOne(!switchOne)
        setswitchTwo(!switchTwo)
        setswitchFour(!switchFour)
        setswitchSeven(!switchSeven)
    }

    const switchThreeTrick = () => {
        setswitchOne(!switchOne)
        setswitchThree(!switchThree)
        setswitchFour(!switchFour)
    }

    const switchFourTrick = () => {
        setswitchThree(!switchThree)
        setswitchFour(!switchFour)
        setswitchNine(!switchNine)
    }

    const switchFiveTrick = () => {
        setswitchFive(!switchFive)
        setswitchEight(!switchEight)
    }

    const switchSixTrick = () => {
        setswitchTwo(!switchTwo)
        setswitchSix(!switchSix)
        setswitchSeven(!switchSeven)
    }

    const switchSevenTrick = () => {
        setswitchSeven(!switchSeven)
        setswitchFour(!switchFour)
    }

    const switchEightTrick = () => {
        setswitchEight(!switchEight)
    }

    const switchNineTrick = () => {
        setswitchOne(!switchOne)
        setswitchTwo(!switchTwo)
        setswitchThree(!switchThree)
        setswitchFour(!switchFour)
        setswitchFive(!switchFive)
        setswitchSix(!switchSix)
        setswitchSeven(!switchSeven)
        setswitchEight(!switchEight)
        setswitchNine(!switchNine)
    }

    if (
        !switchOne &&
        !switchTwo &&
        !switchThree &&
        !switchFour &&
        !switchFive &&
        !switchSix &&
        !switchSeven &&
        !switchEight &&
        !switchNine
    ) {
        setTimeout(() => {
            setisSolved(true)
        }, 1000)
    }

    if (isSolved) {
        return (
            <div>
                {level > levelId ? (
                    <Fade>
                        <h1 style={{ marginTop: '40vh' }}>
                            CONGRATULATION you did it again!
                        </h1>
                        <h3>Lights are out!</h3>
                        <Link to="/game-board">
                            <Button color="success">Back to dashboard</Button>
                        </Link>
                    </Fade>
                ) : (
                    <Fade>
                        <h1 style={{ marginTop: '40vh' }}>CONGRATULATION!</h1>
                        <h3>Lights are out!</h3>
                        <Button color="success" onClick={() => goLevelUp()}>
                            Back to dashboard
                        </Button>
                    </Fade>
                )}
            </div>
        )
    }

    if (isLoading) {
        return <Spinner />
    }
    return (
        <Container fluid className={style.wrapper1}>
            <Row>
                <Col>
                    <Link to="/game-board">
                        <Button outline block>
                            Back to dashboard
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ModalTwo />
                    <h1 style={{ color: 'black' }}>Level 2</h1>
                </Col>
            </Row>
            <Row className={style.switchDiv}>
                <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
                    <Col>
                        <label className={style.label}>
                            <div className={style.toggle}>
                                <input
                                    className={style.toggleState}
                                    type="checkbox"
                                    checked={switchOne}
                                    onChange={switchOneTrick}
                                />
                                <div className={style.indicator}></div>
                            </div>
                        </label>
                    </Col>
                    <Col>
                        <label className={style.label}>
                            <div className={style.toggle}>
                                <input
                                    className={style.toggleState}
                                    type="checkbox"
                                    checked={switchTwo}
                                    onChange={() => switchTwoTrick()}
                                />
                                <div className={style.indicator}></div>
                            </div>
                        </label>
                    </Col>
                    <Col>
                        <label className={style.label}>
                            <div className={style.toggle}>
                                <input
                                    className={style.toggleState}
                                    type="checkbox"
                                    checked={switchThree}
                                    onChange={() => switchThreeTrick()}
                                />
                                <div className={style.indicator}></div>
                            </div>
                        </label>
                    </Col>
                </Col>
                <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
                    <Col>
                        <label className={style.label}>
                            <div className={style.toggle}>
                                <input
                                    className={style.toggleState}
                                    type="checkbox"
                                    checked={switchFour}
                                    onChange={() => switchFourTrick()}
                                />
                                <div className={style.indicator}></div>
                            </div>
                        </label>
                    </Col>
                    <Col>
                        <label className={style.label}>
                            <div className={style.toggle}>
                                <input
                                    className={style.toggleState}
                                    type="checkbox"
                                    checked={switchFive}
                                    onChange={() => switchFiveTrick()}
                                />
                                <div className={style.indicator}></div>
                            </div>
                        </label>
                    </Col>
                    <Col>
                        <label className={style.label}>
                            <div className={style.toggle}>
                                <input
                                    className={style.toggleState}
                                    type="checkbox"
                                    checked={switchSix}
                                    onChange={() => switchSixTrick()}
                                />
                                <div className={style.indicator}></div>
                            </div>
                        </label>
                    </Col>
                </Col>
                <Col lg={{ size: 4 }} md={{ size: 4 }} sm={{ size: 4 }}>
                    <Col>
                        <label className={style.label}>
                            <div className={style.toggle}>
                                <input
                                    className={style.toggleState}
                                    type="checkbox"
                                    checked={switchSeven}
                                    onChange={() => switchSevenTrick()}
                                />
                                <div className={style.indicator}></div>
                            </div>
                        </label>
                    </Col>
                    <Col>
                        <label className={style.label}>
                            <div className={style.toggle}>
                                <input
                                    className={style.toggleState}
                                    type="checkbox"
                                    checked={switchEight}
                                    onChange={() => switchEightTrick()}
                                />
                                <div className={style.indicator}></div>
                            </div>
                        </label>
                    </Col>
                    <Col>
                        <label className={style.label}>
                            <div className={style.toggle}>
                                <input
                                    className={style.toggleState}
                                    type="checkbox"
                                    checked={switchNine}
                                    onChange={() => switchNineTrick()}
                                />
                                <div className={style.indicator}></div>
                            </div>
                        </label>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}
