import React from 'react';
import { View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import blueMountain from '@/assets/images/blue-mountains.jpg';

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={blueMountain}
        resizeMode="cover"
        className="flex-1 justify-center"
      >
        <LinearGradient
          className="flex-1 justify-center"
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.7)"]}
        >
          {children}
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default AuthWrapper;
