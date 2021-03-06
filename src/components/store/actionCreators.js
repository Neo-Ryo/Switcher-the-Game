import { LOGIN, SIGNIN, LEVELUP, LEVEL } from './actionTypes'
import axios from 'axios'
import { toast } from 'react-toastify'
import { url } from '../../urls'

export const login = ({ pseudo, password }, history) => async (dispatch) => {
    try {
        const res = await axios.post(`${url}/users/login`, {
            pseudo,
            password,
        })
        dispatch({ type: LOGIN, payload: res.data })
        sessionStorage.setItem('uuid', res.data.uuid)
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('level', res.data.level)
        toast.success(`Welcome back ${pseudo}`)
        history.push('/game-board')
    } catch (error) {
        toast.error('Your logs are incorrect')
    }
}

export const level = ({ levelUser }) => async (dispatch) => {
    try {
        dispatch({ type: LEVEL, payload: levelUser })
    } catch (error) {}
}

export const signin = ({ pseudo, password, pic }, history) => async (
    dispatch
) => {
    try {
        const {
            data: { uuid, level, token },
        } = await axios.post(`${url}/users`, {
            pseudo,
            password,
            picture: pic,
        })
        dispatch({ type: SIGNIN, payload: { uuid, level, token } })
        sessionStorage.setItem('uuid', uuid)
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('level', level)
        console.log('level data: ', level)
        toast.success(`Welcome ${pseudo}`)
        history.push('/game-board')
    } catch (error) {
        toast.error(`You must try again: ${pseudo} is already taken`)
    }
}

export const levelUp = (history) => async (dispatch) => {
    try {
        const uuid = sessionStorage.getItem('uuid')
        const token = sessionStorage.getItem('token')
        await axios.put(
            `${url}/levels/${uuid}/levelUp`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        const {
            data: {
                Level: { name },
            },
        } = await axios.get(`${url}/users/${uuid}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch({ type: LEVELUP, payload: name })
        sessionStorage.setItem('level', name)
        history.push('/game-board')
    } catch (error) {
        toast.error(
            'Something went wrong... Level up did not work, you might have to do it again'
        )
    }
}
