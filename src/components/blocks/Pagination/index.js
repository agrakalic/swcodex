import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCharactersPath } from '../../../utils';
import Wrapper from './styles';

const Pagination = ({ data, page, search }) => {
 
  const prevLink = () => {
    const path = getCharactersPath(page-1, search);
    return <Link to={path}>Previous Page</Link>;
  };
  
  const nextLink = () => {
    const path = getCharactersPath(page+1, search);
    return <Link to={path}>Next Page</Link>;
  };

  return (
    <Wrapper>
      {data.previous && prevLink()}
      {data.next && nextLink()}
    </Wrapper>
  );
};

Pagination.propTypes = {
  data: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,  
  search: PropTypes.string, 
};

export default Pagination;
