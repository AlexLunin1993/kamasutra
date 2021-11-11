import { usersAPI } from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                userId: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: true
            }

        default: return state;

    }
}

export const setAuthUserData = (data) => {
    debugger
    return {

        type: SET_USER_DATA,
        data: data,
    };
};


export const myLoginThunk = () => {
    return (dispatch) => {
        usersAPI.myLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data))
                }

            })
    }
}



export default authReducer;