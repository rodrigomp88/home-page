export const proyectsReducer = (state, action) => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }

    case '[Auth] - Logout':
      return {
        ...state,
        isLoggedIn: false,
        user: undefined
      }

    default:
      return state
  }
}
