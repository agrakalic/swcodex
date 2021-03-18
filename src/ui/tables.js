import styled from 'styled-components';
import { theme } from '../theme';

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TH = styled.th`
  font-weight: ${theme.fontWeightBold};
  padding: ${theme.spacing[1]};
  line-height: ${theme.lineHeightBase};
  vertical-align: top;
  border-bottom: ${theme.borderBase};
`;

export const TD = styled.th`
  padding: ${theme.spacing[1]};
  line-height: ${theme.lineHeightBase};
  vertical-align: top;
  border-bottom: ${theme.borderBase};
`;

export const Caption = styled.caption`
  font-style: italic;
`;
