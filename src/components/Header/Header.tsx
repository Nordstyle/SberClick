import React from 'react';
import {
  Header as HeaderContainer,
  Location,
  LocationIcon,
  LocationText,
  HeaderNavContainer,
  HeaderNavButton,
  HeaderNavCount,
} from './Header.styled';

import { ReactComponent as Union } from '../../assets/svg/union.svg';

export const Header = () => (
  <HeaderContainer>
    <HeaderNavContainer>
      <HeaderNavButton to="/products">Товары</HeaderNavButton>
      <HeaderNavButton to="/orders">
        Заказы
        <HeaderNavCount>4</HeaderNavCount>
      </HeaderNavButton>
      <HeaderNavButton to="/delivery">Доставки</HeaderNavButton>
      <HeaderNavButton to="/basket">Корзина</HeaderNavButton>
    </HeaderNavContainer>
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
