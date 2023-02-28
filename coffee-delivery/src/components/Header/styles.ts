import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }

  div > span {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;

    padding: 0.75rem;
  }

  div > span:first-child {
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
  }

  div > span:last-child {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`
