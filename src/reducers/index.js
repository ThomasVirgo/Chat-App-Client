const initState = {
  socketInfo: {},
}

const reducer = (state=initState, action) => {
  switch(action.type) {
      // case 'RESET_QUESTION_NUMBER':
      //     return {
      //         ...state,
      //         gameState: {
      //             ...state.gameState,
      //             questionNumber: 1
      //         }
      //     }
      default:
          return state;
  }
}

export default reducer ;