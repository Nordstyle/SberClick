import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BreadcrumbWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BreadcrumbsLinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 16px;
`;

export const BreadcrumbsLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text.secondary};
  margin-right: 12px;
`;

export const BreadcrumbsSeparator = styled.div`
  margin-right: 12px;
`;
