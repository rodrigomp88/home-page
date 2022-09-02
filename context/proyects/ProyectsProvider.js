import { useReducer } from 'react'
import { types } from '../../types/types'
import { ProyectsContext, proyectsReducer } from './'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'

const PROYECTS_INITIAL_STATE = {
  proyectos: []
}

export const ProyectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(proyectsReducer, PROYECTS_INITIAL_STATE)

  const addProyect = async proyect => {
    await addDoc(collection(db, 'proyects'), {
      title: proyect.title,
      description: proyect.description,
      stack: proyect.stack,
      urlDeploy: proyect.urlDeploy,
      urlRepo: proyect.urlRepo
    })

    dispatch({ type: types.addProyect, payload: proyect })
  }

  const getProyects = async () => {
    const querySnapshot = await getDocs(collection(db, 'proyects'))
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`)
    })
  }

  const editProyect = proyect => {
    dispatch({ type: types.editProyect, payload: proyect })
  }

  const deleteProyect = id => {
    dispatch({ types: types.deleteProyect, payload: id })
  }

  return (
    <ProyectsContext.Provider
      value={{
        proyectos: state.proyectos,

        addProyect,
        getProyects,
        editProyect,
        deleteProyect
      }}
    >
      {children}
    </ProyectsContext.Provider>
  )
}
