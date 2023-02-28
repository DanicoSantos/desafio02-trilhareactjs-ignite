import styled from 'styled-components'
import bgImg from '../../../../assets/background.png'

export const BannerContainer = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 34rem;
  padding: 2.5rem 10rem;

  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`

export const BannerContent = styled.div`
  margin-top: 2.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: bold;
    line-height: 4rem;

    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
  }

  div {
    margin-top: 4.125rem;
  }
`

export const BannerFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    font-size: 1rem;
    line-height: 20.8px;

    span {
    }
  }
`

const VARIANT_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface BannerFeaturesIconsProps {
  variant: keyof typeof VARIANT_COLORS
}

export const BannerFeaturesIcons = styled.span<BannerFeaturesIconsProps>`
  display: flex;
  align-items: center;

  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) => props.theme[VARIANT_COLORS[props.variant]]};

  svg {
    color: ${(props) => props.theme.white};
  }
`
