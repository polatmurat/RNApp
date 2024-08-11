import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import AuthWrapper from './authwrapper';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'expo-router';

const AuthLayout = () => {
  const userToken = useSelector((state: RootState) => state.authReducer.userToken);
  const router = useRouter();

  useEffect(() => {
    if (userToken) {
      router.push("/home"); // Ana sayfa yoluna yönlendirin
    }
  }, [userToken]);

  return (
    <>
      <StatusBar style="light" />
      <AuthWrapper>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
        </Stack>
      </AuthWrapper>
    </>
  );
};

export default AuthLayout;
