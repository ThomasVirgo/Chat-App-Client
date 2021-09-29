const initState = {
  socketInfo: {},
}

const reducer = (state=initState, action) => {
  switch(action.type) {
      case 'UPDATE_SOCKETS':
          return {
              ...state,
              socketInfo: action.payload
          }
      default:
          return state;
  }
}

export default reducer ;