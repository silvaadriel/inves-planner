import { Typography } from '../../components/Typography'

import introGirlChartImage from '../../assets/intro-girl-chart-image.svg'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <div>
        <div>
          <div>
            <Typography variant="titleXL">
              Planeje seus investimentos e conquiste seu futuro
            </Typography>
            <Typography variant="regularL">
              Com InvesPlanner, você pode simular diferentes cenários, comparar
              as melhores opções do mercado e acompanhar o desempenho da sua
              carteira
            </Typography>
          </div>
          <img src={introGirlChartImage} alt="" />
        </div>
      </div>
    </HomeContainer>
  )
}
