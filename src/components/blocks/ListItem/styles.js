import styled from 'styled-components';
import { theme } from '../../../theme';

const Wrapper = styled.div`  
  .list-item {
    display: flex;
    padding: 0;
    cursor: pointer;
    transition: ${theme.transitionBase};

    &:hover {
      background: ${theme.boxBackgroundHover};
    }

    &__avatar {
      background: url(/assets/images/avatar.jpg) no-repeat 50% 50%;
      background-size: cover;
      display: block;
      flex: 0 0 60px;

      @media only screen and (min-width: ${theme.breakpoints.mobile}) {
        flex: 0 0 90px;
      }
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
      display: flex;
      flex: 0 0 60px;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Wrapper;
