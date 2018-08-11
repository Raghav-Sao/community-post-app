const initialState = {
  showAlert: false,
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_ALERT': {
      return {
        ...state,
        showAlert: !state.showAlert,
      }
    }

    default:
      return state
  }
}
