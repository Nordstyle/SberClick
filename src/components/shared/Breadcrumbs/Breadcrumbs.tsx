import React from 'react';
import { Link } from 'react-router-dom';

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

  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <div>
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={path}>{name}</span>
        ) : (
          <Link key={path} to={path}>
            {name}
          </Link>
        )
      )}
    </div>
  );
};
