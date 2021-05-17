import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as Card2Styles from 'components/Card2/styles'
import * as HeadingStyles from 'components/Heading/styles'

const Sections = styled.section`
  ${({ theme }) => css`
    ${Card2Styles.Wrapper},
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`

export const SectionCard = styled(Sections)`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.lessThan('medium')`
      margin-right: calc(-${theme.grid.gutter} / 2);
      margin-left: calc(-${theme.grid.gutter} / 2);
    `}

    margin-bottom: calc(${theme.spacings.large} * 2);

    margin-bottom: 0;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background-color: ${theme.colors.lightBg};
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
  `}
`

export const SectionThis = styled.section`
  ${({ theme }) => css`
    margin-left: calc(${theme.grid.gutter} / 2);
  `}
`

export const SectionWhy = styled(Sections)``

export const SectionWho = styled(Sections)``

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}

    margin-right: calc(-${theme.grid.gutter} / 2);
  `}
`
