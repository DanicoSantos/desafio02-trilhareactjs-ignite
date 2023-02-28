import {
  BannerContainer,
  BannerContent,
  BannerFeatures,
  BannerFeaturesIcons,
} from './styles'

import coffeeCupImg from '../../../../assets/coffee-cup.svg'
import { BoundingBox, Package, ShoppingCart } from 'phosphor-react'

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div>
          <BannerFeatures>
            <p>
              <BannerFeaturesIcons variant="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </BannerFeaturesIcons>{' '}
              Compra simples e segura
            </p>
            <p>
              <BannerFeaturesIcons variant="gray">
                <Package size={16} weight="fill" />
              </BannerFeaturesIcons>{' '}
              Embalagem mantém o café intacto
            </p>
          </BannerFeatures>
          <BannerFeatures>
            <p>
              <BannerFeaturesIcons variant="yellow">
                <Package size={16} weight="fill" />
              </BannerFeaturesIcons>{' '}
              Entrega rápida e rastreada
            </p>
            <p>
              <BannerFeaturesIcons variant="purple">
                <Package size={16} weight="fill" />
              </BannerFeaturesIcons>{' '}
              O café chega fresquinho até você
            </p>
          </BannerFeatures>
        </div>
      </BannerContent>
      <img src={coffeeCupImg} alt="Coffee Cup" />
    </BannerContainer>
  )
}
