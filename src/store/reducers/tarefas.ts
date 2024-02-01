import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      titulo: 'Estudar javaScript',
      prioridade: enums.Prioridade.iMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'reassistir conceito de objetos',
      id: 1
    },
    {
      titulo: 'Estudar Redux',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: 'necessario aprender o uso do "tool kit"',
      id: 2
    },
    {
      titulo: 'Pagar conta',
      prioridade: enums.Prioridade.iMPORTANTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'baixar pdt ou copiar código pix',
      id: 3
    },
    {
      titulo: 'Motivação e foco',
      prioridade: enums.Prioridade.iMPORTANTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'Manter a mente motivada, MindSet é um dos alicerces!!',
      id: 4
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefa',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remove } = tarefasSlice.actions

export default tarefasSlice.reducer
