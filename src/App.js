import { Provider } from 'react-redux';
import { FeatureToggleProvider } from './hooks/useFeatureToggle';
import { Routes } from './routes/routes';
import store from './store';

export const App = () => (
  <Provider store={store}>
    <FeatureToggleProvider>
      <Routes />
    </FeatureToggleProvider>
  </Provider>
);
