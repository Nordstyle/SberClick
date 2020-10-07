import React from 'react';
import {
  CategoryItemContainer,
  CategoryItemImage,
  CategoryItemHeading,
  CategoryItemIcon,
  CategoryItemSubTitle,
} from './CategoryItem.styled';

interface CategoryItemProps {
  src: string;
  to: string;
  title: string;
  subTitle?: string;
  icon?: string;
}

export const CategoryItem = (props: CategoryItemProps) => {
  const { src, to, title, subTitle, icon } = props;
  return (
    <CategoryItemContainer to={to}>
      <CategoryItemImage src={src} />
      <CategoryItemHeading>
        {icon && <CategoryItemIcon src={icon} />}
        <div>
          {title}
          {subTitle && <CategoryItemSubTitle>{subTitle}</CategoryItemSubTitle>}
        </div>
      </CategoryItemHeading>
    </CategoryItemContainer>
  );
};
