import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import config from '../../../config';

import { Inner } from '../../../ui/containers';
import { P } from '../../../ui/typography';
import { List, Pagination, Search } from '../../blocks';
import Wrapper from './styles';

const Characters = () => {
  let { page, search } = useParams();
  page = parseInt(page);
  page = isNaN(page) ? 1 : page;
  search = search ? search : '';

  let searchParam = search ? `&search=${search}` : '';
  let params = `/?page=${page}${searchParam}`;

  const endpoint = `${process.env.REACT_APP_API_URL}${config.endpoints.characters}${params}`;

  const { status, data } = useFetch(endpoint);

  const characters = data ? data.results : [];

  return (
    <Wrapper>
      <Inner className='characters'>
        <Search search={search} />
        {status === 'fetching' && <P>...</P>}
        {status === 'error' && (
          <P>There has been an error with your request.</P>
        )}
        {(status === 'done' && characters) && (
          <>
            {characters.length > 0 ? (
              <>
                <List characters={characters} />
                <Pagination data={data} page={page} search={search} />
              </>
            ) : (
              <P>There are no characters that match your criteria</P>
            )}
          </>
        )}
      </Inner>
    </Wrapper>
  );
};

export default Characters;
