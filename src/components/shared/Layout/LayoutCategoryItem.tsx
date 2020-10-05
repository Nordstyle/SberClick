import React from 'react';
import {
  LayoutCategoryItemContainer,
  LayoutCategoryItemImage,
  LayoutCategoryItemHeading,
  LayoutCategoryItemIcon,
  LayoutCategoryItemSubTitle,
} from './Layout.styled';

interface LayoutCategoryItemProps {
  src: string;
  to: string;
  title: string;
  subTitle?: string;
  icon?: string;
}

export const LayoutCategoryItem = (props: LayoutCategoryItemProps) => {
  const { src, to, title, subTitle, icon } = props;
  return (
    <LayoutCategoryItemContainer to={to}>
      <LayoutCategoryItemImage src={src} />
      <LayoutCategoryItemHeading>
        {icon && <LayoutCategoryItemIcon src={icon} />}
        <div>
          {title}
          {subTitle && <LayoutCategoryItemSubTitle>{subTitle}</LayoutCategoryItemSubTitle>}
        </div>
      </LayoutCategoryItemHeading>
    </LayoutCategoryItemContainer>
  );
};
