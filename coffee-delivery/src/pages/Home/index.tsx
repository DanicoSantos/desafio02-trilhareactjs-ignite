import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeCard'
import { HomeContentContainer } from './styles'

export function Home() {
  return (
    <>
      <Banner />
      <HomeContentContainer>
        <h2>Nossos cafés</h2>
        <CoffeeCard />
      </HomeContentContainer>
    </>
  )
}
