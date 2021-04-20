import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { CardMembership as CardMembershipIcon } from '@styled-icons/material-outlined/CardMembership'
import { PeopleSearch as PeopleSearchIcon } from '@styled-icons/fluentui-system-regular/PeopleSearch'
import { PeopleAdd as PeopleAddIcon } from '@styled-icons/fluentui-system-regular/PeopleAdd'

import Logo from 'components/Logo'
import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <PeopleSearchIcon aria-label="Search client" />
      </S.IconWrapper>
      <S.IconWrapper>
        <PeopleAddIcon aria-label="Add client" />
      </S.IconWrapper>
      <S.IconWrapper>
        <CardMembershipIcon aria-label="Card membership" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu
