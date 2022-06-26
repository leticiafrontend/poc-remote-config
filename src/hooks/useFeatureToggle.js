import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/featureToggle/firebaseConfig';
import {
  fetchAndActivate,
  getBoolean,
  getRemoteConfig,
} from 'firebase/remote-config';
import { setToggle } from '../store/modules/featureToggle/action';

export const useFeatureToggle = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const firebase = initializeApp(firebaseConfig);
    const remoteConfig = getRemoteConfig(firebase);

    remoteConfig.settings = {
      fetchTimeoutMillis: 1000,
      minimumFetchIntervalMillis: 1,
    };

    fetchAndActivate(remoteConfig)
      .then(() => {
        dispatch(
          setToggle({
            change_list: getBoolean(remoteConfig, 'change_list'),
            change_router_toggle: getBoolean(
              remoteConfig,
              'change_router_toggle',
            ),
            change_color_header: getBoolean(
              remoteConfig,
              'change_color_header',
            ),
          }),
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return { loading };
};

export const FeatureToggleProvider = ({ children }) => {
  const { loading } = useFeatureToggle();

  if (loading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  return children;
};
