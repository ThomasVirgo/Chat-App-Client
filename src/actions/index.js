export const loginUser = () => {
    return async (dispatch) => {
        dispatch({
            type: "LOGIN",
            payload: true
        })
    }
}


export const logoutUser = () => {
    return async (dispatch) => {
        dispatch({
            type: "LOGOUT",
            payload: false
        })
    }
}