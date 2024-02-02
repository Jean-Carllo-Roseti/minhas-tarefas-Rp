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
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const TarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (TarefaJaExiste) {
        alert('Já existe uma tarefa com este nome.')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id - 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
