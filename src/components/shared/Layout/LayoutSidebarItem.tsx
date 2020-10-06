import React from 'react';
import { LayoutSidebarItemIcon, LayoutSidebarItemContainer, LayoutSidebarItemTitle } from './Layout.styled';

interface LayoutSidebarItemProps {
  title: string;
  src: string;
  to: string;
}

export const LayoutSidebarItem = (props: LayoutSidebarItemProps) => {
  const { title, src, to } = props;

  return (
    <LayoutSidebarItemContainer to={to}>
      <LayoutSidebarItemIcon src={src} />
      <LayoutSidebarItemTitle>{title}</LayoutSidebarItemTitle>
    </LayoutSidebarItemContainer>
  );
};
