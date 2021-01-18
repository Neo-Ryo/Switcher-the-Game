import React, { useState, useEffect } from 'react'
import style from './css/LevelFive.module.scss'
import { Link, useHistory } from 'react-router-dom'
import { Button, Spinner, Container, Row, Col } from 'reactstrap'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { url } from '../../urls'
import { levelUp } from '../store/actionCreators'
import { Fade } from 'react-reveal'
import smileyFck from './img/fckingShocked.png'
import ModalFive from './ModalFive'

export default function LevelFive() {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)
    // const [levelDone, setLevelDone] = useState(false);
    const [isSolved, setisSolved] = useState(false)

    //those states are in game states
    const [switchOne, setswitchOne] = useState(false)
    const [switchTwo, setswitchTwo] = useState(false)
    const [switchThree, setswitchThree] = useState(true)
    const [switchFour, setswitchFour] = useState(false)
    const [switchFive, setswitchFive] = useState(true)
    const [switchSix, setswitchSix] = useState(false)
    const [switchSeven, setswitchSeven] = useState(false)
    const [switchEight, setswitchEight] = useState(false)
    const [switchNine, setswitchNine] = useState(false)
    const [switchTen, setswitchTen] = useState(true)
    const [switchEleven, setswitchEleven] = useState(true)
    const [switchTwelve, setswitchTwelve] = useState(false)
    const [switchThirteen, setswitchThirteen] = useState(true)
    const [switchFourteen, setswitchFourteen] = useState(true)
    const [switchFifteen, setswitchFifteen] = useState(true)
    const [switchSixteen, setswitchSixteen] = useState(true)
    const [switchSeventeen, setswitchSeventeen] = useState(true)
    const [switchEighteen, setswitchEighteen] = useState(true)

    const history = useHistory()
    const dispatch = useDispatch()
    const level = sessionStorage.getItem('level')

    const levelId = 5
    const uuid = sessionStorage.getItem('uuid')
    const token = sessionStorage.getItem('token')
    const tokenState = useSelector((state) => state.user.token)
    const uuidState = useSelector((state) => state.user.uuid)

    const getUser = async () => {
        try {
            setIsLoading(true)
            const res = await Axios.get(`${url}/users/${uuidState ?? uuid}`, {
                headers: {
                    Authorization: `Bearer ${tokenState ?? token}`,
                },
            })
            setUser(res.data)
            setIsLoading(false)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const goLevelUp = async () => {
        try {
            dispatch(levelUp(history))
            getUser()
            history.push('/game-board')
        } catch (error) {
            console.log(error)
        }
    }

    const switchOneTrick = () => {
        setswitchOne(!switchOne)
        setswitchNine(!switchNine)
    }

    const switchTwoTrick = () => {
        setswitchTwo(!switchTwo)
        setswitchFour(!switchFour)
        setswitchSeven(!switchSeven)
    }

    const switchThreeTrick = () => {
        setswitchThree(!switchThree)
        setswitchEighteen(!switchEighteen)
    }

    const switchFourTrick = () => {
        setswitchFour(!switchFour)
        setswitchFifteen(!switchFifteen)
    }

    const switchFiveTrick = () => {
        setswitchFive(!switchFive)
        setswitchEight(!switchEight)
        setswitchSeventeen(!switchSeventeen)
    }

    const switchSixTrick = () => {
        setswitchSix(!switchSix)
        setswitchSeven(!switchSeven)
        setswitchEight(!switchEight)
    }

    const switchSevenTrick = () => {
        setswitchSeven(!switchSeven)
        setswitchFourteen(!switchFourteen)
    }

    const switchEightTrick = () => {
        setswitchEight(!switchEight)
        setswitchSeven(!switchSeven)
    }

    const switchNineTrick = () => {
        setswitchOne(!switchOne)
        setswitchThree(!switchThree)
        setswitchFive(!switchFive)
        setswitchSeven(!switchSeven)
        setswitchNine(!switchNine)
        setswitchEleven(!switchEleven)
        setswitchThirteen(!switchThirteen)
        setswitchFifteen(!switchFifteen)
        setswitchSeventeen(!switchSeventeen)
    }

    const switchTenTrick = () => {
        setswitchThree(!switchThree)
        setswitchEight(!switchEight)
        setswitchTen(!switchTen)
        setswitchEleven(!switchEleven)
    }

    const switchElevenTrick = () => {
        setswitchOne(!switchOne)
        setswitchThree(!switchThree)
        setswitchFive(!switchFive)
        setswitchNine(!switchNine)
        setswitchEleven(!switchEleven)
    }

    const switchTwelveTrick = () => {
        setswitchFive(!switchFive)
        setswitchSeven(!switchSeven)
        setswitchTwelve(!switchTwelve)
    }

    const switchThirteenTrick = () => {
        setswitchFive(!switchFive)
        setswitchSeven(!switchSeven)
        setswitchEight(!switchEight)
        setswitchThirteen(!switchThirteen)
    }

    const switchFourteenTrick = () => {
        setswitchThree(!switchThree)
        setswitchFive(!switchFive)
        setswitchFourteen(!switchFourteen)
    }

    const switchFifteenTrick = () => {
        setswitchTwo(!switchTwo)
        setswitchFourteen(!switchFourteen)
        setswitchFifteen(!switchFifteen)
    }

    const switchSixteenTrick = () => {
        setswitchOne(!switchOne)
        setswitchSeven(!switchSeven)
        setswitchSixteen(!switchSixteen)
    }

    const switchSeventeenTrick = () => {
        setswitchEight(!switchEight)
        setswitchSeventeen(!switchSeventeen)
    }

    const switchEightteenTrick = () => {
        setswitchTwo(!switchTwo)
        setswitchEighteen(!switchEighteen)
    }

    if (
        switchOne &&
        switchTwo &&
        switchThree &&
        switchFour &&
        switchFive &&
        switchSix &&
        switchSeven &&
        switchEight &&
        switchNine &&
        switchTen &&
        switchEleven &&
        switchTwelve &&
        switchThirteen &&
        switchFourteen &&
        switchFifteen &&
        switchSixteen &&
        switchSeventeen &&
        switchEighteen
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
                        <h1 style={{ marginTop: '40vh' }}>
                            You are the Switcher! No doubt about it!!!{' '}
                        </h1>
                        <img src={smileyFck} alt="smiley" />
                        <img src={smileyFck} alt="smiley" />
                        <img src={smileyFck} alt="smiley" />
                        <h3>NeoCity is shining!</h3>
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
        <Container fluid className={style.wrapper}>
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
                    <ModalFive user={user} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className={style.finalTitle}>FINAL LEVEL</h1>
                </Col>
            </Row>
            <Row className={style.switchDiv}>
                {/* Col one */}
                <Col lg={{ size: 2 }} md={{ size: 2 }} sm={{ size: 2 }}>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                type="checkbox"
                                checked={switchOne}
                                onChange={switchOneTrick}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                        {/* svg use for every checkbox  */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ display: 'none' }}
                        >
                            <symbol
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 150 150"
                                id={'line'}
                            >
                                <line x1="75" y1="34" x2="75" y2="58" />
                            </symbol>
                            <symbol
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 150 150"
                                id={'circle'}
                            >
                                <circle cx="75" cy="80" r="35" />
                            </symbol>
                        </svg>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                type="checkbox"
                                checked={switchTwo}
                                onChange={switchTwoTrick}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                type="checkbox"
                                checked={switchThree}
                                onChange={switchThreeTrick}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Col>
                {/* Col 2 */}
                <Col lg={{ size: 2 }} md={{ size: 2 }} sm={{ size: 2 }}>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                type="checkbox"
                                checked={switchFour}
                                onChange={switchFourTrick}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchFive}
                                onChange={switchFiveTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchSix}
                                onChange={switchSixTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Col>
                {/* Col 3 */}
                <Col lg={{ size: 2 }} md={{ size: 2 }} sm={{ size: 2 }}>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchSeven}
                                onChange={switchSevenTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchEight}
                                onChange={switchEightTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchNine}
                                onChange={switchNineTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Col>
                {/* Col 4 */}
                <Col lg={{ size: 2 }} md={{ size: 2 }} sm={{ size: 2 }}>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchTen}
                                onChange={switchTenTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchEleven}
                                onChange={switchElevenTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchTwelve}
                                onChange={switchTwelveTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Col>
                {/* Col 5 */}
                <Col lg={{ size: 2 }} md={{ size: 2 }} sm={{ size: 2 }}>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchThirteen}
                                onChange={switchThirteenTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchFourteen}
                                onChange={switchFourteenTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchFifteen}
                                onChange={switchFifteenTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Col>
                {/* Col 6 */}
                <Col lg={{ size: 2 }} md={{ size: 2 }} sm={{ size: 2 }}>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchSixteen}
                                onChange={switchSixteenTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchSeventeen}
                                onChange={switchSeventeenTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ marginTop: '5vh', marginBottom: '5vh' }}>
                        <div className={style.powerSwitch}>
                            <input
                                checked={switchEighteen}
                                onChange={switchEightteenTrick}
                                type="checkbox"
                                className={style.switch}
                            />
                            <div className={style.button}>
                                <svg class={style.powerOff}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                                <svg className={style.powerOn}>
                                    <use
                                        xlinkHref="#line"
                                        className={style.line}
                                    />
                                    <use
                                        xlinkHref="#circle"
                                        className={style.circle}
                                    />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}
