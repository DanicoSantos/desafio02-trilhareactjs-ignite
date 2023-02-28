import { CoffeeCardContainer } from './styles'
import coffeeImg1 from '../../../../assets/coffee1.png'
import { ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeImg1} alt="" />
      <span>Tradicional</span>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div>
        <span>R$ 9,90</span>
        <span>- 1 +</span>
        <span>
          <ShoppingCart size={20} weight="fill" />
        </span>
      </div>
    </CoffeeCardContainer>
  )
}
