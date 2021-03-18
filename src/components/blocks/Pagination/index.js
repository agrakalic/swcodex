import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCharactersPath } from '../../../utils';
import Wrapper from './styles';

const Pagination = ({ data, page, search }) => {
  const count = data.count;
  const perPage = 10;

  const pageCount = Math.ceil(count / perPage);

  const firstLink = () => {
    const path = getCharactersPath(1, search);
    return data.previous && page > 2 && <Link to={path}>&lt;&lt;</Link>;
  };

  const lastLink = () => {
    const path = getCharactersPath(pageCount, search);
    return data.next && page < pageCount - 1 && <Link to={path}>&gt;&gt;</Link>;
  };

  const prevLink = () => {
    const path = getCharactersPath(page - 1, search);
    return data.previous && <Link to={path}>&lt;</Link>;
  };

  const nextLink = () => {
    const path = getCharactersPath(page + 1, search);
    return data.next && <Link to={path}>&gt;</Link>;
  };

  return (
    <Wrapper>
      {firstLink()}
      {prevLink()}
      <span>
        Page {page} of {pageCount}
      </span>
      {nextLink()}
      {lastLink()}
    </Wrapper>
  );
};

Pagination.propTypes = {
  data: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  search: PropTypes.string,
};

export default Pagination;
