import { RouteComponentProps } from 'react-router-dom';
import { Breadcrumb } from '../components/shared/Breadcrumbs/Breadcrumbs';

export const generateBreadcrumbs = (routes: Breadcrumb[], props: RouteComponentProps<any>) =>
  routes
    .filter(({ path }) => props.match.path.includes(path))
    .map(({ path, ...rest }) => ({
      path: Object.keys(props.match.params).length
        ? Object.keys(props.match.params).reduce(
            (path, param) => path.replace(`:${param}`, props.match.params[param]),
            path
          )
        : path,
      ...rest,
    }));
