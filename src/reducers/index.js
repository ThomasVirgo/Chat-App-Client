const initState = {
  socketInfo: {},
  users: [],
  messages: [],
  chosenFriend: null,
  userList: [],
  friendsList: [],
  requestsList: [],
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
      case 'INIT_MESSAGES':
        return {
          ...state,
          messages: action.payload
        }
      case 'ADD_MESSAGE':
        let newMessages = [...state.messages]
        newMessages.push(action.payload)
        return {
          ...state,
          messages: newMessages
        }
      case 'CHANGE_FRIEND':
          return {
            ...state,
            chosenFriend: action.payload
          }
      case 'INIT_USER_LISTS':
        return {
          ...state,
          userList: action.payload.userList,
          friendsList: action.payload.friendsList,
          requestsList: action.payload.requestsList,

        }
      case 'ADD_FRIEND_REQUEST':
        let newRequestsList = [...state.requestsList]
        newRequestsList.push(action.payload)
        return {
          ...state,
          requestsList: newRequestsList
        }
      case 'COMPLETE_REQUEST':
        let requestIdx = state.requestsList.findIndex(item => item.id == action.payload)
        if (requestIdx != -1){
          let newRequests = [...state.requestsList]
          newRequests[requestIdx].is_complete = true
          return {
            ...state,
            requestsList: newRequests
          }
        }
        console.log('did not find friend request');
        return state
      default:
          return state;
  }
}

export default reducer ;