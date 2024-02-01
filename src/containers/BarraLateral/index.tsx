import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtros'
import * as enums from '../../utils/enums/Tarefa'
import { Campo } from '../../styles'

export const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
      </div>
      <S.Fitros>
        <FiltroCard
          valor={enums.Status.PENDENTE}
          criterio="status"
          legenda={'pendentes'}
        />
        <FiltroCard
          valor={enums.Status.CONCLUIDA}
          criterio="status"
          legenda={'concluídas'}
        />
        <FiltroCard
          valor={enums.Prioridade.URGENTE}
          criterio="prioridade"
          legenda={'urgentes'}
        />
        <FiltroCard
          valor={enums.Prioridade.iMPORTANTE}
          criterio="prioridade"
          legenda={'importantes'}
        />
        <FiltroCard
          valor={enums.Prioridade.NORMAL}
          criterio="prioridade"
          legenda={'normal'}
        />
        <FiltroCard criterio="todas" legenda={'todas'} />
      </S.Fitros>
    </S.Aside>
  )
}
