import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { CardMembership as CardMembershipIcon } from '@styled-icons/material-outlined/CardMembership'
import { PeopleSearch as PeopleSearchIcon } from '@styled-icons/fluentui-system-regular/PeopleSearch'
import { PeopleAdd as PeopleAddIcon } from '@styled-icons/fluentui-system-regular/PeopleAdd'

import Logo from 'components/Logo'
import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <PeopleSearchIcon />
      </S.IconWrapper>
      <S.IconWrapper>
        <PeopleAddIcon />
      </S.IconWrapper>
      <S.IconWrapper>
        <CardMembershipIcon />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu
