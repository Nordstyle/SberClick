import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CategoryItemContainer = styled(NavLink)`
  display: block;
  max-width: 400px;
  max-height: 198px;
  width: 100%;
  position: relative;
  text-decoration: none;
  border-radius: 12px;
  color: ${(props) => props.theme.text.main};
  margin-bottom: 32px;
`;

export const CategoryItemHeading = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 14px 20px;
  background: rgba(255, 255, 255, 0.78);
  border-radius: 0px 0px 12px 12px;
`;

export const CategoryItemSubTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  opacity: 0.5;
`;

export const CategoryItemImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CategoryItemIcon = styled.img`
  width: 20px;
  height: 24px;
  object-fit: contain;
  margin-right: 14px;
`;
