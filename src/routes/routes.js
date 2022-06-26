import { BrowserRouter, Route, Routes as RoutesDom } from 'react-router-dom';
import { PageToggleOff } from '../components/PageToggleOff';
import { PageToggleOn } from '../components/PageToggleOn';
import { PageListOne } from '../components/PageListOne';
import { PageListTwo } from '../components/PageListTwo';
import { Home } from '../components/Home';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { useSelector } from 'react-redux';
import { NotFound } from '../components/NotFound';

export const Routes = () => {
  const { toggles } = useSelector((state) => state.toggles);

  const TOGGLE_CHANGE_ROUTER = toggles.change_router_toggle;
  const TOGGLE_CHANGE_LIST = toggles.change_list;

  const listRoutes = [
    {
      path: '/',
      exact: true,
      component: <Home />,
    },
    {
      path: '/listas',
      exact: true,
      component: !!TOGGLE_CHANGE_LIST ? <PageListOne /> : <PageListTwo />,
    },
    {
      path: !!TOGGLE_CHANGE_ROUTER ? '/toggle-ligado' : '/toggle-desligado',
      exact: true,
      component: !!TOGGLE_CHANGE_ROUTER ? <PageToggleOn /> : <PageToggleOff />,
    },
    {
      path: '*',
      component: <NotFound />,
    },
  ];

  return (
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
};
