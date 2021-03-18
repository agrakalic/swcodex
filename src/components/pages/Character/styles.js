import styled from 'styled-components';
import { theme } from '../../../theme';

const Wrapper = styled.div`
  .character {
    color: #fff;
    text-align: center;

    a, a:visited, a:hover {
      color: inherit;
    }

    &__head {
      display: flex;
      padding: 0;
    }

    &__avatar {
      background: ${theme.boxBackgroundInv};
      display: block;
      width: 120px;
    }
    &__details {
      padding: ${theme.spacing[4]};
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
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__data {
      padding: ${theme.spacing[4]};
    }
    &__film-name {
      display: block;
    }
  }
`;

export default Wrapper;
