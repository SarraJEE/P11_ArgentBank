
import axios from "axios"
import { createAction } from '@reduxjs/toolkit'


export const loadApiUser = createAction('load-get-user')
const baseURL = 'http://localhost:3001/api/v1/user/'

export const loadApiUserSuccess = createAction(
  'get-user-success',
  (user) => {
    return {
      payload: user,
    }
  }
)

export const loadApiUserError = createAction(
  'get-user-error', (error) => {
  return {
    payload: error,
  }
})
export const getUser = (token) => {
    return (dispatch) => {
      dispatch(loadApiUser())
      axios({
        method: 'POST',
        url: baseURL + 'profile',
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          dispatch(loadApiUserSuccess(response.data))
        })
        .catch((error) => {
          dispatch(loadApiUserError(error.message))
        })
    }
  }
  export const logOut = createAction('logout')
  export const loadApiEditUser = createAction('load-edit-user')

export const loadApiEditUserSuccess = createAction(
  'edit-user-success',
  (user) => {
    return {
      payload: user,
    }
  }
)

export const loadApiEditUserError = createAction(
  'edit-user-error',
  (error) => {
    return {
      payload: error,
    }
  }
)