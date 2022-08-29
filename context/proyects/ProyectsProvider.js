import { useEffect, useReducer } from 'react'
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../../config/firebase'
import { ProyectsContext, proyectsReducer } from './'

const AUTH_INITIAL_STATE = {
  isLoggedIn: false,
  user: undefined
}

export const ProyectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(proyectsReducer, AUTH_INITIAL_STATE)

  //   const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, currentUser => {
      if (!currentUser) {
        dispatch({ type: '[Auth] - Logout' })
        return true
      }
      dispatch({ type: '[Auth] - Login', payload: currentUser })
      return true
    })
    return () => unsubuscribe()
  }, [])

  const login = async (email, password) => {
    try {
      const { data } = await signInWithEmailAndPassword(auth, email, password)
      const { user } = data
      dispatch({ type: '[Auth] - Login', payload: user })
      return true
    } catch (error) {
      return false
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <ProyectsContext.Provider
      value={{
        ...state,

        login,
        logout
        // loading
      }}
    >
      {children}
    </ProyectsContext.Provider>
  )
}
