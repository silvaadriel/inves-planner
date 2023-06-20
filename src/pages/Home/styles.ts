import styled from 'styled-components'

import introBackground from '../../assets/intro-background.svg'

export const HomeContainer = styled.div`
  position: relative;

  & > div {
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
    padding: 5.875rem 0 6.75rem 0;

    background: url(${introBackground}) repeat-x center center;
    background-size: auto;

    & > div {
      max-width: 72rem;
      margin: 0 auto;
      padding: 0 2rem;

      display: flex;
      align-items: center;
    }
  }
`
