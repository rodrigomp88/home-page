import { types } from '../../types/types'

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }

    case types.logout:
      return {
        ...state,
        isLoggedIn: false,
        user: undefined
      }

    default:
      return state
  }
}
