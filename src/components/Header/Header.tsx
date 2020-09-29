import React from 'react';
import { Header as HeaderContainer, Location, LocationIcon, LocationText } from './Header.styled';

import { ReactComponent as Union } from '../../assets/svg/union.svg';

export const Header = () => (
  <HeaderContainer>
    <div>asads</div>
    <Location>
      <LocationIcon>
        <Union />
      </LocationIcon>
      <div>
        <LocationText>Подразделение: Сбербанк Премьер</LocationText>
        <LocationText>Адрес: Россия, Москва, улица Вавилова, д. 23</LocationText>
      </div>
    </Location>
  </HeaderContainer>
);
