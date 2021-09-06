const initState = {
  isLoggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isLoggedIn: action.payload, error: false };
    case 'LOGOUT':
      return { isLoggedIn: action.payload, error: false };
    case 'SET_ERROR':
      return { isLoggedIn: action.payload };

    default:
      return state;
  }
};

export default authReducer;
