import { Phone, User } from 'phosphor-react'
import invesPlannerLogo from '../../assets/inves-planner-logo.jpeg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={invesPlannerLogo} height={80} alt="" />

      <div>
        <span>
          <Phone weight="fill" size={22} /> Contato
        </span>

        <a href="#">
          <User weight="fill" size={22} />
        </a>
      </div>
    </HeaderContainer>
  )
}
