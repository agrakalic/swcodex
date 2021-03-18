import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import { getIdFromUrl } from '../../../utils';
import { paths } from '../../../constants';
import config from '../../../config';
import { Homeworld, Favorite, FilmTitle } from '../../blocks';
import { Inner, Box } from '../../../ui/containers';
import { H2, P, DL, DT, DD } from '../../../ui/typography';
import { Button } from '../../../ui/forms';
import Wrapper from './styles';

const Character = () => {
  const history = useHistory();
  let { id } = useParams();

  const endpoint = `${process.env.REACT_APP_API_URL}${config.endpoints.characters}/${id}/`;
  const { data } = useFetch(endpoint);

  return (
    data && (
      <Wrapper>
        <Inner className='character'>
          <Box className='character__head'>
            <span className='character__avatar'></span>
            <div className='character__details'>
              <H2 className='character__title'>{data.name}</H2>
              <P className='character__homeworld'>
                <Homeworld url={data.homeworld} />
              </P>
            </div>
            <div className='character__favorite'>
              <Favorite id={id} />
            </div>
          </Box>
          <Box className='character__data'>
            <DL>
              <DT>Birth Year</DT>
              <DD>{data.birth_year}</DD>
              <DT>Gender</DT>
              <DD>{data.gender}</DD>
              <DT>Height</DT>
              <DD>{data.height}</DD>
              <DT>Weight</DT>
              <DD>{data.mass}</DD>
              <DT>Films</DT>
              <DD>
                {data.films.map((film) => {                  
                  const filmId = getIdFromUrl(film);
                  const path = paths.FILM.replace(':id', filmId);
                  return (
                    <Link
                      to={path}
                      className='character__film-name'
                      key={filmId}
                    >
                      <FilmTitle id={filmId} />
                    </Link>
                  );
                })}
              </DD>
            </DL>
          </Box>
          <P>
            <Button onClick={() => history.goBack()}>Go Back</Button>
          </P>
        </Inner>
      </Wrapper>
    )
  );
};

export default Character;
