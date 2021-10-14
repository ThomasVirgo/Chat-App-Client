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
      case 'UPDATE_USERS':
        let newUsers = {...users}
        newUsers.push(action.payload)
        return {
          ...state,
          users: newUsers
        }
      default:
          return state;
  }
}

export default reducer ;