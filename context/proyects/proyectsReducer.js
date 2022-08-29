import { types } from '../../types/types'

export const proyectsReducer = (state, action) => {
  switch (action.type) {
    case types.addProyect:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload]
      }

    case types.updateProyect:
      const updateProyecto = action.payload
      const updateProyectos = state.proyectos.map(proyecto => {
        if (proyecto.id === updateProyecto.id) {
          return updateProyecto
        }
        return proyecto
      })
      return {
        ...state,
        proyectos: updateProyectos
      }

    case types.deleteProyect:
      return {
        ...state,
        proyectos: state.proyectos.filter(
          proyecto => proyecto.id !== action.payload
        )
      }

    default:
      return state
  }
}
