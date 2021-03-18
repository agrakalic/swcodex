import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation } from 'react-router-dom';
import Layout from '../components/layout';

const RouterWrapper = ({
  component: Component,
  name,
  exact,
  metaTitle,
  path,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      document.body.setAttribute('class', name);
    }, 100);
    window.scrollTo(0, 0);
  }, [name, pathname]);

  const renderRoute = (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        return (
          <Layout metaTitle={metaTitle}>
            <Component {...props} />
          </Layout>
        );
      }}
    ></Route>
  );

  return renderRoute;
};

RouterWrapper.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  metaTitle: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export default RouterWrapper;
