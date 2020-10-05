import styled from 'styled-components';

export const Heading = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: ${(props) => props.theme.text.main};
  margin-bottom: 32px;
`;
