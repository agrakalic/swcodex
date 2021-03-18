import styled from 'styled-components';
import { theme } from '../../../theme';

const Wrapper = styled.div`  
  .list-item {
    display: flex;
    padding: 0;
    cursor: pointer;

    &__avatar {
      background: ${theme.boxBackgroundInv};
      display: block;
      width: 80px;
    }
    &__details {
      padding: ${theme.spacing[2]};
    }
    &__title {
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      font-size: ${theme.fontSizeL};
      line-height: ${theme.lineHeightBase};
    }
    &__homeworld {
      margin: 0;
    }
    &__favorite {
      margin-left: auto;
      width: 8%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Wrapper;
