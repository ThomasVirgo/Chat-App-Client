const initState = {
    isLoggedIn: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, result: action.payload, error: false };
        case "LOGOUT":
            return { ...state, result: action.payload, error: false };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        
        default:
            return state;
    }
}

export default authReducer;