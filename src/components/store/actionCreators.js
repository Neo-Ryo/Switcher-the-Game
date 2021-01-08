import { LOGIN, SIGNIN, LEVELUP, LEVEL } from './actionTypes'
import axios from 'axios'
import { toast } from 'react-toastify'
import { url } from '../../urls'

export const login = ({ pseudo, password }) => async (dispatch) => {
    try {
        const res = await axios.post(`${url}/users/login`, {
            pseudo,
            password,
        })
        const resLvl = await axios.post(`${url}/levels/${res.data.uuid}`)
        dispatch({ type: LOGIN, payload: res.data })
        sessionStorage.setItem('uuid', res.data.uuid)
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('level', resLvl.data.name)
        toast.success(`Welcome back ${pseudo}`)
    } catch (error) {
        console.log('dispatch login: ', error)
        toast.error('Something went wrong..., Login is incorrect')
    }
}

export const level = ({ levelUser }) => async (dispatch) => {
    try {
        dispatch({ type: LEVEL, payload: levelUser })
    } catch (error) {}
}

export const signin = ({ pseudo, password }) => async (dispatch) => {
    try {
        const res = await axios.post(`${url}/users`, {
            pseudo,
            password,
        })
        dispatch({ type: SIGNIN, payload: res.data })
        sessionStorage.setItem('uuid', res.data.uuid)
        toast.success(`Welcome ${pseudo}`)
    } catch (error) {
        toast.error("Something went wrong... Your sign in action didn't work")
    }
}

export const levelUp = (token) => async (dispatch) => {
    try {
        const uuid = sessionStorage.getItem('uuid')
        const res = await axios.put(`${url}/levels/${uuid}/levelUp`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch({ type: LEVELUP, payload: res.data.name })
        sessionStorage.setItem('level', res.data.name)
    } catch (error) {
        toast.error(
            'Something went wrong... Level up did not work, you might have to do it again'
        )
    }
}
