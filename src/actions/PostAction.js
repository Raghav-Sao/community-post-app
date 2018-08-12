export const CHANGE_ALERT_ALERT = 'CHANGE_ALERT_ALERT'
export const ADD_POST_DATA = 'ADD_POST_DATA'
export const FILTER_POST_DATA = 'FILTER_POST_DATA'
export const TOGGLE_NAV = 'TOGGLE_NAV'

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

export const toggleNav = payload => ({
  type: TOGGLE_NAV,
})
