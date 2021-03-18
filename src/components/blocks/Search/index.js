import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCharactersPath } from '../../../utils';
import { Box } from '../../../ui/containers';
import { Input, Button, Form } from '../../../ui/forms';
import Wrapper from './styles';

const Search = ({ search }) => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(search);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const path = getCharactersPath(1, searchValue);
    history.push(path);
  };

  return (
    <Wrapper>
      <Box className='box'>
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder='Search the characters'
            value={searchValue}
            onChange={handleChange}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Box>
    </Wrapper>
  );
};

Search.propTypes = {
  search: PropTypes.string,
};

export default Search;
