import { LOGIN, SIGNIN, LEVELUP, LEVEL } from './actionTypes'

const initialeState = {
    uuid: '',
    token: '',
    level: null,
}

const user = (state = initialeState, action) => {
    const { type, payload } = action

    switch (type) {
        case LEVEL:
            return {
                ...state,
                uuid: payload.uuid,
                token: payload.token,
                level: payload.level,
            }
        case LOGIN:
            return {
                ...state,
                uuid: payload.uuid,
                token: payload.token,
                level: payload.name,
            }
        case SIGNIN:
            return {
                ...state,
                uuid: payload.uuid,
                level: payload.Level.name,
            }
        case LEVELUP:
            return {
                ...state,
                level: payload,
            }

        default:
            return state
    }
}

export default user
