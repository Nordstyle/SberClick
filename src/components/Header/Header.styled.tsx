import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const Location = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LocationText = styled.p`
  font-size: 12px;
  line-height: 16px;
`;

export const LocationIcon = styled.div`
  margin-right: 14px;
`;

export const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 2px;
  background: ${(props) => props.theme.background.light};
  border-radius: 22px;
`;

export const HeaderNavButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.25px;
  margin: 0 2px;
  padding: 0 24px;
  border: 0;
  border-radius: 18px;
  color: ${(props) => props.theme.text.light};
  background: transparent;
  text-decoration: none;
  &.active {
    color: ${(props) => props.theme.text.secondary};
    background: ${(props) => props.theme.background.paper};
  }
`;

export const HeaderNavCount = styled.div`
  min-height: 21px;
  min-width: 21px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  margin-left: 8px;
  padding: 4px;
  color: ${(props) => props.theme.text.contrastText};
  background: ${(props) => props.theme.background.secondary};
  border-radius: 50%;
`;
