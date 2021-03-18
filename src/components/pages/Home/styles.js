import styled from 'styled-components';
import { theme } from '../../../theme';

const Wrapper = styled.div`
  padding: 0 ${theme.spacing[2]};

  p {
    max-width: 500px;
    margin: 0 auto ${theme.marginBottomBase} auto;    
  }

  button {
    border-radius: ${theme.buttonHeight};
    box-shadow: ${theme.boxShadowBase};
  }
`;

export default Wrapper;