import { paths } from '../constants';

const getCharactersPath = (page = 1, search = '') => {
  return paths.CHARACTERS.replace(':page', page).replace(':search', search);
};

export default getCharactersPath;
