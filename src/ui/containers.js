import styled from 'styled-components';
import { theme } from '../theme';

export const Inner = styled.div`
  margin: 0 auto;
  width: ${theme.layoutWidth};
  max-width: ${theme.layoutWidthMax};
  text-align: left;
  position: relative;
`;

export const Box = styled.div`
  background-color: ${theme.boxBackground};
  box-shadow: ${theme.boxShadowBase};
  color: ${theme.boxColor};
  margin-bottom: ${theme.marginBottomBase};
  padding: ${theme.spacing[2]};
  text-align: left;
`;
