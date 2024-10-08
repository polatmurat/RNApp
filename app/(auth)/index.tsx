
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import wallpaper from "@/assets/images/scene-most.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/utils/CustomButton";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

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
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-white text-4xl text-center font-bold">
                bomch4nte
              </Text>
              <Text className="text-center text-white text-regular text-xl mt-3">
                Hackers realize, kiddies memorize.
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => router.push("/login")}
                title="Get Started"
              />
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

