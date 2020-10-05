import React from 'react';
import { LayoutSidebarItemIcon, LayoutSidebarItemContainer, LayoutSidebarItemTitle } from './Layout.styled';

interface LayoutSidebarItemProps {
  title: string;
  src: string;
}

export const LayoutSidebarItem = (props: LayoutSidebarItemProps) => {
  const { title, src } = props;

  return (
    <LayoutSidebarItemContainer>
      <LayoutSidebarItemIcon src={src} />
      <LayoutSidebarItemTitle>{title}</LayoutSidebarItemTitle>
    </LayoutSidebarItemContainer>
  );
};
