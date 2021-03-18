import styled from 'styled-components';
import { theme } from '../theme';

export const GridRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: ${theme.breakpoints.portrait}) {
    flex-direction: row;
  }
`;

export const GridColumn = styled.div`
  @media only screen and (min-width: ${theme.breakpoints.portrait}) {
    ${(props) =>
      !props.width &&
      `
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        `}
    width: ${(props) => (props.width ? props.width : 'auto')};
    margin: 0 ${(props) => (props.margin ? props.margin : theme.spacing[2])};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
