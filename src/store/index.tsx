import { configureStore } from '@reduxjs/toolkit'

import TarefasReducers from './reducers/tarefas'

export const store = configureStore({
  reducer: {
    tarefas: TarefasReducers
  }
})

export type RootReducer = ReturnType<typeof store.getState>
