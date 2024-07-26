import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import wallpaper from "@/assets/images/scene-most.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
export default function HomeScreen() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={wallpaper}
        resizeMode="cover"
        className="flex-1 justify-center"
      >
        <LinearGradient
          className="flex-1 justify-center"
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.7)"]}
        >
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-white text-4xl text-center font-bold">
                bomch4nte
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Lorem ipsum dolor sit amet.
              </Text>
            </View>

            <View></View>

            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
