import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(135deg, #428bca, #5542ca);
    max-width: 400px;
    height: 250px;
    margin: 0 auto;
    display: grid;
    gap: 0.2rem;
    grid-template-columns: 25% 25% 25% 25%;
    border: 0;
    border-radius: 15px;
    padding: ${theme.spacings.xxsmall};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  `}
`

export const Box = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
`
