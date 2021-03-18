import styled from 'styled-components';
import { theme } from '../../../theme';

const Wrapper = styled.span`  
  color: rgba(0,0,0,.2);
  margin: 0 ${theme.spacing[2]};
  cursor: pointer;

  &.active {
    color: ${theme.colors.activeIcon};
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

export default Wrapper;
