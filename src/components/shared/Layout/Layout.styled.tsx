import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LayoutSidebar = styled.div`
  margin-right: 32px;
`;

export const LayoutSidebarItemContainer = styled.div`
  width: 254px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 16px;
  margin-bottom: 8px;
  background: ${(props) => props.theme.background.paper};
  border-radius: 12px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const LayoutSidebarItemTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.text.main};
`;

export const LayoutSidebarItemIcon = styled.img`
  width: 16px;
  height: 24px;
  object-fit: contain;
  margin-right: 10px;
`;

export const LayoutContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const LayoutCategoryItemContainer = styled(NavLink)`
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

export const LayoutCategoryItemHeading = styled.div`
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

export const LayoutCategoryItemSubTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  opacity: 0.5;
`;

export const LayoutCategoryItemImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const LayoutCategoryItemIcon = styled.img`
  width: 20px;
  height: 24px;
  object-fit: contain;
  margin-right: 14px;
`;
