import styled from 'styled-components';
import { theme } from '../../../theme';

const Wrapper = styled.div`
  .film {
    color: #fff;
    text-align: center;

    a,
    a:visited,
    a:hover {
      color: inherit;
    }

    &__head {     
      padding: 0;
    }

    &__screenshot {
      background: url(/assets/images/movie.jpg) no-repeat 50% 50%;
      background-size: cover;
      display: block;
      height: 150px;

      @media only screen and (min-width: ${theme.breakpoints.mobile}) {
        height: 300px;
      }

      @media only screen and (min-width: ${theme.breakpoints.landscape}) {
        height: 400px;
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
      padding: 0;
      font-size: ${theme.fontSizeL};
      line-height: ${theme.lineHeightBase};
    }

    &__episode {
      opacity: .7;
    }

    &__data {
      padding: ${theme.spacing[4]};
    }
    &__character-name {
      display: block;
    }
  }
`;

export default Wrapper;
