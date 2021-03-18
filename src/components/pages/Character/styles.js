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
      background: url(/assets/images/avatar.jpg) no-repeat 50% 50%;
      background-size: cover;
      display: block;
      flex: 0 0 60px;

      @media only screen and (min-width: ${theme.breakpoints.mobile}) {
        flex: 0 0 120px;
      }
    }
    &__details {
      padding: ${theme.spacing[2]};

      @media only screen and (min-width: ${theme.breakpoints.mobile}) {        
        padding: ${theme.spacing[4]};
      }
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
      justify-content: center;
      align-items: center;
      flex: 0 0 60px;
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
