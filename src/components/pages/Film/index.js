import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import config from '../../../config';
import { getIdFromUrl } from '../../../utils';
import { paths } from '../../../constants';
import { CharacterName } from '../../blocks';
import { Inner, Box } from '../../../ui/containers';
import { H2, P, DL, DT, DD } from '../../../ui/typography';
import { Button } from '../../../ui/forms';
import Wrapper from './styles';

const Film = () => {
  const history = useHistory();
  let { id } = useParams();

  const endpoint = `${process.env.REACT_APP_API_URL}${config.endpoints.films}/${id}/`;
  const { data } = useFetch(endpoint);

  return (
    data && (
      <Wrapper>
        <Inner className='film'>
          <Box className='film__head'>
            <span className='film__screenshot'></span>
            <div className='film__details'>
              <H2 className='film__title'>{data.title} ({data.release_date.split('-')[0]})</H2>
              <P className='film__episode'>Episode {data.episode_id}</P>  
              <P>{data.opening_crawl}</P>             
            </div>
          </Box>
          <Box className="film__data">
            <DL>
              <DT>Characters</DT>
              <DD>
              {data.characters.map((character) => {                                    
                  const characterId = getIdFromUrl(character);
                  const path = paths.CHARACTER.replace(':id', characterId);
                  return (
                    <Link
                      to={path}
                      className='film__character-name'
                      key={characterId}
                    >
                      <CharacterName id={characterId} />
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

export default Film;
