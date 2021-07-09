const INITIAL_STATE = {
  data: [],
  username: 'anfvhjsjefb'
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATEUSERNAME':
      return {
        ...state,
        username: action.username
      }
    case 'GETDATA':
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
};

export default Reducer