export const CHANGE_ALERT_ALERT = 'CHANGE_ALERT_ALERT'
export const ADD_POST_DATA = 'ADD_POST_DATA'
export const FILTER_POST_DATA = 'FILTER_POST_DATA'
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export const changeAlertStatus = payload => ({
  type: 'CHANGE_ALERT_ALERT',
  payload,
})

export const addPostAction = payload => ({
  type: ADD_POST_DATA,
  payload,
})

export const filterPost = payload => ({
  type: FILTER_POST_DATA,
  payload,
})

export const toggleSidebar = payload => ({
  type: TOGGLE_SIDEBAR,
})
