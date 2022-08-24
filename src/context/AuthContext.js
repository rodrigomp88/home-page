import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth } from '../config/firebase'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null, uid: null })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid
        })
      } else {
        setUser({ email: null, uid: null })
      }
    })
    setLoading(false)

    return () => unsubscribe()
  }, [])

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = async () => {
    setUser({ email: null, uid: null })
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
