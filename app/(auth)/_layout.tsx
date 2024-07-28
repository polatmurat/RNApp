import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {

  return (
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <StatusBar style="light" />
      </Stack>
  );
};

export default AuthLayout;