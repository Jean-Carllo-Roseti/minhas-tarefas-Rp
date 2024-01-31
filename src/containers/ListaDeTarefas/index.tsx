import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'pagar contas',
    descricao: 'baixar pdf ou fazer pix',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'compras do mês',
    descricao: 'ir ao mercado',
    prioridade: 'importante',
    status: 'concluida'
  },
  {
    titulo: 'comprar remédio',
    descricao: 'efetuar encmoenda da farmácia',
    prioridade: 'urgente',
    status: 'pendente'
  }
]

export const ListaDeTarefas = () => (
  <Container>
    <p>
      Duas tarefas marcadas como: &quot;categorias&ldquo; e &quot;termo&ldquo;
    </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            status={t.status}
            titulo={t.titulo}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)
