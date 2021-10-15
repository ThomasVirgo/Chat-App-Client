const initState = {
  socketInfo: {},
  users: [],
}

const reducer = (state=initState, action) => {
  switch(action.type) {
      case 'UPDATE_SOCKETS':
        return {
            ...state,
            socketInfo: action.payload
        }
      case 'INIT_USERS':
        return {
          ...state, 
          users: action.payload,
        }
      case 'UPDATE_USERS':
        let newUsers = [...state.users]
        newUsers.push(action.payload)
        return {
          ...state,
          users: newUsers
        }
      case 'REMOVE_USER':
        let alterUsers = [...state.users]
        let idx = alterUsers.findIndex(user => user.userID == action.payload)
        if (idx !== -1) {
          alterUsers.splice(idx, 1);
        }
        return {
          ...state,
          users: alterUsers
        }
      default:
          return state;
  }
}

export default reducer ;