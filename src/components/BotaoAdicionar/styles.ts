import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  align-items: center;
  background-color: ${variaveis.verde};
  border-radius: 50%;
  bottom: 40px;
  color: #fff;
  display: flex;
  font-size: 40px;
  height: 64px;
  justify-content: center;
  position: fixed;
  right: 40px;
  text-decoration: none;
  width: 64px;
`
