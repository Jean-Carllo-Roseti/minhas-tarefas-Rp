import FiltroCard from '../../components/FiltroCard'

import * as S from './style'

export const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
    </div>
    <S.Fitros>
      <FiltroCard ativo contador={0} legenda={'pendentes'} />
      <FiltroCard contador={0} legenda={'concluídas'} />
      <FiltroCard contador={0} legenda={'urgentes'} />
      <FiltroCard contador={0} legenda={'importantes'} />
      <FiltroCard contador={0} legenda={'normal'} />
      <FiltroCard contador={0} legenda={'todas'} />
    </S.Fitros>
  </S.Aside>
)
