import { ReactNode } from 'react'

import { defaultTheme } from '../../styles/themes/default'

import {
  BoldL,
  BoldM,
  BoldS,
  RegularL,
  RegularM,
  RegularS,
  TitleL,
  TitleM,
  TitleS,
  TitleXL,
  TitleXS,
} from './styles'

const variants = {
  boldL: BoldL,
  boldM: BoldM,
  boldS: BoldS,
  regularL: RegularL,
  regularM: RegularM,
  regularS: RegularS,
  titleL: TitleL,
  titleM: TitleM,
  titleS: TitleS,
  titleXL: TitleXL,
  titleXS: TitleXS,
}

interface TypographyProps {
  variant: keyof typeof variants
  color?: keyof typeof defaultTheme
  children: ReactNode
}

export function Typography({ variant, color, children }: TypographyProps) {
  const Component = variants[variant]

  return <Component color={color}>{children}</Component>
}
