import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { CardMembership as CardMembershipIcon } from '@styled-icons/material-outlined/CardMembership'
import { PeopleSearch as PeopleSearchIcon } from '@styled-icons/fluentui-system-regular/PeopleSearch'
import { PeopleAdd as PeopleAddIcon } from '@styled-icons/fluentui-system-regular/PeopleAdd'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
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

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
