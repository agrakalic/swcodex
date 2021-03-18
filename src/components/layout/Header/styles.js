import styled from 'styled-components';
import { theme } from '../../../theme';

const Wrapper = styled.div`
  background: ${theme.headerBackground};
  padding: ${theme.spacing[1]} 0;
  margin-bottom: ${theme.spacing[5]};
  box-shadow: ${theme.boxShadowBase};
  transition: ${theme.transitionBase};

  .home & {
    padding: ${theme.spacing[4]} 0;
  }

  .header__title {
    margin: 0;
    background: url(/assets/images/deathstar.png) no-repeat 50% 50%;
    background-size: 100% auto;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    transition: ${theme.transitionBase};

    .home & {
      height: 200px;
      width: 200px;

      @media only screen and (min-width: ${theme.breakpoints.portrait}) {
        height: 260px;
        width: 260px;
      }
    }

    a {
      display: block;
      height: 100%;
      text-indent: -8000px;
      overflow: hidden;
    }
  }
`;

export default Wrapper;
