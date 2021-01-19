import React, { useState, useEffect } from 'react'
import axios from 'axios'
import style from '../levels/css/LevelOne.module.css'
import { Link, useHistory } from 'react-router-dom'
import { Button, Spinner } from 'reactstrap'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { url } from '../../urls'
import { levelUp } from '../store/actionCreators'
import ModalOne from './ModalOne'
import { Fade } from 'react-reveal'

export default function LevelOne() {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isSolved, setisSolved] = useState(false)

    //those states are in game states
    const [switchOne, setswitchOne] = useState(false)
    const [switchTwo, setswitchTwo] = useState(true)
    const [switchThree, setswitchThree] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const level = sessionStorage.getItem('level')

    const levelId = 1
    const uuid = sessionStorage.getItem('uuid')
    const token = sessionStorage.getItem('token')
    const tokenState = useSelector((state) => state.user.token)
    const uuidState = useSelector((state) => state.user.uuid)
    // const levelStored = localStorage.getItem("level");

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
            console.log(error)
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
        setswitchTwo(!switchTwo)
    }

    const switchTwoTrick = () => {
        setswitchOne(!switchOne)
        setswitchTwo(!switchTwo)
        setswitchThree(!switchThree)
    }

    const switchThreeTrick = () => {
        setswitchOne(!switchOne)
        setswitchThree(!switchThree)
    }

    if (switchOne && switchTwo && switchThree) {
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
                        <Link to="/game-board">
                            <Button color="success">Back to dashboard</Button>
                        </Link>
                    </Fade>
                ) : (
                    <Fade>
                        <h1 style={{ marginTop: '40vh' }}>CONGRATULATION!</h1>
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
        <div className={style.wrapper}>
            <Link to="/game-board">
                <Button outline color="warning" block>
                    back to dashboard
                </Button>
            </Link>
            <ModalOne />
            <h1 className={style.title}>Level 1</h1>
            <div>
                <label className={style.switch}>
                    <input
                        type="checkbox"
                        onClick={() => switchOneTrick()}
                        checked={switchOne}
                    />
                    <span className={style.slider}></span>
                </label>
            </div>
            <div>
                <label className={style.switch}>
                    <input
                        type="checkbox"
                        onClick={() => switchTwoTrick()}
                        checked={switchTwo}
                    />
                    <span className={style.slider}></span>
                </label>
            </div>
            <div>
                <label className={style.switch}>
                    <input
                        type="checkbox"
                        onClick={() => switchThreeTrick()}
                        checked={switchThree}
                    />
                    <span className={style.slider}></span>
                </label>
            </div>
        </div>
    )
}
