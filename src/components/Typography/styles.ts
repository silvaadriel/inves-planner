import styled, { css } from 'styled-components'

import { defaultTheme } from '../../styles/themes/default'

interface BaseTypographyProps {
  color?: keyof typeof defaultTheme
}

export const BaseTitle = css<BaseTypographyProps>`
  font-family: 'Baloo 2', cursive;
  line-height: 130%;
  color: ${({ theme, color = 'base-title' }) => theme[color]};
`

export const TitleXL = styled.h1`
  ${BaseTitle}

  font-size: 3rem;
  font-weight: 800;
`

export const TitleL = styled.h2`
  ${BaseTitle}

  font-size: 2rem;
  font-weight: 800;
`

export const TitleM = styled.h3`
  ${BaseTitle}

  font-size: 1.5rem;
  font-weight: 800;
`

export const TitleS = styled.h4`
  ${BaseTitle}

  font-size: 1.25rem;
  font-weight: 700;
`

export const TitleXS = styled.h5`
  ${BaseTitle}

  font-size: 1.125rem;
  font-weight: 700;
`

export const BaseText = css<BaseTypographyProps>`
  font-family: 'Roboto', sans-serif;
  line-height: 130%;
  color: ${({ theme, color = 'base-text' }) => theme[color]};
`

export const RegularL = styled.p`
  ${BaseText}

  font-size: 1.25rem;
  font-weight: 400;
`

export const BoldL = styled.p`
  ${BaseText}

  font-size: 1.25rem;
  font-weight: bold;
`

export const RegularM = styled.p`
  ${BaseText}

  font-size: 1rem;
  font-weight: 400;
`

export const BoldM = styled.p`
  ${BaseText}

  font-size: 1rem;
  font-weight: bold;
`

export const RegularS = styled.p`
  ${BaseText}

  font-size: 0.875rem;
  font-weight: 400;
`

export const BoldS = styled.p`
  ${BaseText}

  font-size: 0.75rem;
  font-weight: bold;
`
