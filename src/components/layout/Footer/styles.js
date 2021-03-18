import styled from 'styled-components';

const Wrapper = styled.div`
  color: inherit;

  a, a:visited, a:hover {
    color: inherit;
  }

  .home &, 
  .characters & {
    display: none;
  }
`;

export default Wrapper;