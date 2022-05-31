export const authReducer = (state: StateType = {}, action: ActionTypes) => {
    switch (action.type) {
        case 'AUTH/REGISTER':
            return state;
        case 'AUTH/LOGIN':
            return state;
        default:
            return state;
    }
}

type StateType = {}

type ActionTypes = RegisterAT | LoginAT;

type RegisterAT = {
    type: 'AUTH/REGISTER'
}
const RegisterAC = (): RegisterAT => {
    return {
        type: 'AUTH/REGISTER'
    }
}

type LoginAT = {
    type: 'AUTH/LOGIN'
}
const LoginAC = (): LoginAT => {
    return {
        type: 'AUTH/LOGIN'
    }
}