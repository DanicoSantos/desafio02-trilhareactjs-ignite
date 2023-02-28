import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  padding: 1.25rem;
  background: ${(props) => props.theme['base-card']};
  width: 256px;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: -2.5rem;
  }
`
