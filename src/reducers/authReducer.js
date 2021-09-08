const initState = {
  isLoggedIn: false,
  username: '', //stored as undefined
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isLoggedIn: action.payload.isLoggedIn, username: action.payload.username, error: false };
    case 'LOGOUT':
      return { isLoggedIn: action.payload.isLoggedIn, username: action.payload.username, error: false };
    case 'SET_ERROR':
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default authReducer;
