import { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../components/errors/ErrorBoundary';
import ProtectedRoute from '../components/ProtectedRoute';
import SEORoute from '../components/SEORoute';
import Loader from '../components/Loader';
import Home from '../pages/Home';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

const routes = [
  {
    name: 'home',
    path: ['/home', '/', '/index'],
    isExact: true,
    component: Home,
    isProtected: false,
    title: 'Home',
  },
  {
    name: 'register',
    path: '/register',
    isExact: true,
    component: Register,
    isProtected: false,
    title: 'Register',
  },
  {
    name: 'login',
    path: '/login',
    isExact: true,
    component: Login,
    isProtected: false,
    title: 'Login',
  },
  {
    name: 'pagenotfound',
    path: '*',
    isExact: false,
    component: PageNotFound,
    isProtected: false,
    title: 'Page Not Found',
  },
];

const Routes = () => (
  <ErrorBoundary fallback="Something went wrong">
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map(({ name, path, isExact, component: Component, isProtected, title }) =>
          isProtected ? (
            <ProtectedRoute
              path={path}
              exact={isExact}
              key={name}
              render={() => <SEORoute component={Component} title={title} />}
            />
          ) : (
            <Route path={path} exact={isExact} key={name}>
              <SEORoute component={Component} title={title} />
            </Route>
          )
        )}
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default Routes;
