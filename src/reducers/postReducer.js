import { ADD_POST_DATA, FILTER_POST_DATA, CHANGE_ALERT_ALERT, TOGGLE_NAV } from 'actions/PostAction'
import { postData } from './data'

const initialState = {
  showAlert: false,
  showSidebar: false,
  alertText: '',
  postFilter: [],
  postData,
}

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case CHANGE_ALERT_ALERT: {
      const { alertText, showAlert = false } = payload
      return {
        ...state,
        alertText,
        showAlert,
      }
    }

    case ADD_POST_DATA: {
      const { newPostData } = payload
      return {
        ...state,
        postData: [newPostData, ...state.postData],
        postFilter: initialState.postFilter,
      }
    }
    case FILTER_POST_DATA: {
      const { postFilter } = payload
      return {
        ...state,
        postFilter,
      }
    }

    case TOGGLE_NAV: {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      }
    }

    default:
      return state
  }
}
