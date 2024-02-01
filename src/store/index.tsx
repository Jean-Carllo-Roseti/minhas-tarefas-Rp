import { configureStore } from '@reduxjs/toolkit'

import TarefasReducers from './reducers/tarefas'
import FiltroReducer from './reducers/filtros'

export const store = configureStore({
  reducer: {
    tarefas: TarefasReducers,
    filtro: FiltroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
