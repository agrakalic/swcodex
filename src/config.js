import pages from './components/pages';
import { paths } from './constants';

const config = {  
  endpoints: {
    characters: '/people',
    planets: '/planets',
    films: '/films',
  },
  pages: [    
    {
      id: 'abcf372e-23fd-11eb-adc1-0242ac120002',
      name: 'home',
      component: pages.Home,
      path: paths.HOME,
    },
    {
      id: 'abcf372e-23fd-112b-adc1-0242ac120902',
      name: 'characters',
      component: pages.Characters,
      exact: false,
      path: paths.CHARACTERS,
    },
    {
      id: 'abcf372e-233d-12eb-adc1-0242ac120002',
      name: 'character',
      component: pages.Character,
      exact: false,
      path: paths.CHARACTER,
    },
  ],
};

export default config;