import { useReducer } from 'react'
import { types } from '../../types/types'
import { ProyectsContext, proyectsReducer } from './'

const PROYECTS_INITIAL_STATE = {
  proyectos: [
    {
      id: 1,
      name: 'Galpon de ajos',
      description: 'Lleno de bolivianos'
    }
  ]
}

export const ProyectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(proyectsReducer, PROYECTS_INITIAL_STATE)

  const addProyect = proyect => {
    dispatch({ type: types.addProyect, payload: proyect })
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
        editProyect,
        deleteProyect
      }}
    >
      {children}
    </ProyectsContext.Provider>
  )
}
