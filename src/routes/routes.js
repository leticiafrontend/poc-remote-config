import { BrowserRouter, Route, Routes as RoutesDom } from 'react-router-dom';
import { PageToggleOff } from '../components/PageToggleOff';
import { PageToggleOn } from '../components/PageToggleOn';
import { PageListOne } from '../components/PageListOne';
import { PageListTwo } from '../components/PageListTwo';
import { Home } from '../components/Home';
import { Header } from '../components/Header';
import { Container } from '../components/Container';

const TOGGLE = true;

const listRoutes = [
  {
    path: '/',
    exact: true,
    component: <Home />,
  },
  {
    path: '/listas',
    exact: true,
    component: !!TOGGLE ? <PageListOne /> : <PageListTwo />,
  },
  {
    path: '/toggle-desligado',
    exact: true,
    component: <PageToggleOff />,
  },
  {
    path: '/toggle-ligado',
    exact: true,
    component: <PageToggleOn />,
  },
];

export const Routes = () => (
  <BrowserRouter>
    <Header />
    <Container>
      <RoutesDom>
        {listRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={route.component}
          />
        ))}
      </RoutesDom>
    </Container>
  </BrowserRouter>
);
