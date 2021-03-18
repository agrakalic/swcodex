import styled from 'styled-components';
import { theme } from '../theme';

export const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 3rem;
  padding-top: 0.1875rem;
  margin-bottom: 1.3125rem;
`;

export const H2 = styled.h2`
  font-size: 2.1rem;
  line-height: 3rem;
  padding-top: 0.3375rem;
  margin-bottom: 1.1625rem;
`;

export const H3 = styled.h3`
  font-size: 1.75rem;
  line-height: 2.25rem;
  padding-top: 0.84375rem;
  margin-bottom: 1.40625rem;
`;

export const H4 = styled.h4`
  font-size: 1.25rem;
  font-weight: ${theme.fontWeightBold};
`;

export const H5 = styled.h5`
  font-size: 1rem;
  font-weight: ${theme.fontWeightBold};
`;

export const H6 = styled.h6`
  font-size: 1rem;
  font-weight: ${theme.fontWeightBold};
`;

export const P = styled.p`
  margin-bottom: ${theme.marginBottomBase};
`;

export const Tagline = styled.p`
  font-size: ${theme.fontSizeL};
  margin-bottom: ${theme.marginBottomBase};
  line-height: ${theme.lineHeightL};
`;

export const DL = styled.dl`
`;

export const DT = styled.dt`
  font-size: ${theme.fontSizeM};
  text-transform: uppercase;
`;

export const DD = styled.dd`
  padding: 0 0 ${theme.spacing[2]} 0;
  border-bottom: ${theme.borderBase};
  margin-bottom: ${theme.spacing[2]};
`;
