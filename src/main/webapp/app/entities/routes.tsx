import React from 'react';
import { Switch } from 'react-router-dom';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Book from './book';
import Author from './author';
import Genre from './genre';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default ({ match }) => {
  return (
    <div>
      <Switch>
        {/* prettier-ignore */}
        <ErrorBoundaryRoute path={`${match.url}book`} component={Book} />
        <ErrorBoundaryRoute path={`${match.url}author`} component={Author} />
        <ErrorBoundaryRoute path={`${match.url}genre`} component={Genre} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </Switch>
    </div>
  );
};
