import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import RouterWrapper from './wrapper';

import config from '../config';

const Router = () => {

  let pages = [];

  config.pages.forEach((page) => {
    pages = [...pages, page];
  });

  const routes = pages.map((page) => {
    return (
      <RouterWrapper
        component={page.component}
        exact={page.exact != null ? page.exact : true}
        key={page.id}
        metaTitle={page.metaTitle || ''}
        name={page.name}
        path={page.path}
      />
    );
  });
  return (
    <BrowserRouter>
      <Switch>{routes}</Switch>
    </BrowserRouter>
  );
};

export default Router;
