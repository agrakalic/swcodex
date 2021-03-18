import styled from 'styled-components';
import { theme } from '../../../theme';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.marginBottomBase};
  
  a, a:visited, a:hover {
    color: inherit;
    margin: 0 ${theme.spacing[2]};
  }
`;

export default Wrapper;
