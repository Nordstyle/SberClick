import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const Location = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LocationText = styled.p`
  font-size: 12px;
  line-height: 16px;
`;

export const LocationIcon = styled.div`
  margin-right: 14px;
`;
