import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from '../redux/store';
import { initializeAuthState, setUserToken } from '../features/reducers/authReducer';
import AppLayout from './_layout';
import {jwtDecode} from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

const App = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userToken = useSelector((state: RootState) => state.authReducer.userToken);

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("user-token");
      if (token) {
        const decodedToken: any = jwtDecode(token);
        const expiresIn = new Date(decodedToken.exp * 1000);

        if (new Date() < expiresIn) {
          dispatch(setUserToken(token));
          router.push("/home");
        } else {
          await SecureStore.deleteItemAsync("user-token");
          router.push("/login");
        }
      } else {
        router.push("/login");
      }
    };
    checkToken();
  }, [dispatch, router]);

  return (
      <AppLayout />
  );
};

export default App;
