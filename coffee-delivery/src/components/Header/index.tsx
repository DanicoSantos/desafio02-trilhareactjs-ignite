import logoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <div>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>
        <span>
          <ShoppingCart size={22} weight="fill" />
        </span>
      </div>
    </HeaderContainer>
  )
}
