import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import RecipePage from './recipe-page';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:id" component={RecipePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
