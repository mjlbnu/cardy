import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    background: linear-gradient(180deg, #428bca 0%, #5542ca 50%);
    max-width: 480px;
    margin: 0 auto;
    display: grid;
    gap: 0.2rem;
    grid-template-columns: 25% 25% 25% 25%;
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
  `}
`
