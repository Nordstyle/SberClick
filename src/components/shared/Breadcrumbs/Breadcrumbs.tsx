import React from 'react';
import {
  BreadcrumbsLink,
  BreadcrumbsLinkContainer,
  BreadcrumbsSeparator,
  BreadcrumbWrapper,
} from './Breadcrumbs.styled';

import { ReactComponent as Separator } from '../../../assets/svg/bread_separator.svg';

export interface Breadcrumb {
  path: string;
  name: string;
  Component: React.ReactNode;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { crumbs } = props;

  return (
    <BreadcrumbsLinkContainer>
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={path}>{name}</span>
        ) : (
          <BreadcrumbWrapper key={path}>
            <BreadcrumbsLink to={path}>{name}</BreadcrumbsLink>
            <BreadcrumbsSeparator>
              <Separator />
            </BreadcrumbsSeparator>
          </BreadcrumbWrapper>
        )
      )}
    </BreadcrumbsLinkContainer>
  );
};
