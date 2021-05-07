import styled, { css } from 'styled-components'

import { CardImgProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 5rem;
  `,

  large: () => css`
    width: 12rem;
  `
}

export const Wrapper = styled.div<CardImgProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
  `}
`
