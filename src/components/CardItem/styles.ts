import styled, { css } from 'styled-components'

import { CardItemProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 5rem;
  `,

  large: () => css`
    width: 12rem;
  `
}

export const Wrapper = styled.div<CardItemProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${!!size && wrapperModifiers[size]}
  `}
`

export const Date = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    padding-top: 0.5rem;
  `}
`
