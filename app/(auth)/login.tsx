import { View, Text, ImageBackground } from "react-native";
import React, { useState } from "react";
import blueMountain from "@/assets/images/blue-mountains.jpg";
import { LinearGradient } from "expo-linear-gradient";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const submit = () => {
    console.log(formData);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <View className="flex-1 justify-center">
      <ImageBackground
        source={blueMountain}
        resizeMode="cover"
        className="flex-1 justify-center"
      >
        <Text className="text-white text-2xl text-center mb-5">Login</Text>
        <FormField
          value={formData.email}
          handleChangeText={(e: any) => setFormData({ ...formData, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
          placeholder="Email"
          title=""
        />
        <FormField
          value={formData.password}
          handleChangeText={(e: any) =>
            setFormData({ ...formData, password: e })
          }
          placeholder="Password"
          title=""
        />
        <CustomButton
          title="Sign In"
          onPress={() => console.log(formData)}
          containerStyles="mt-7 mx-5"
        />
      </ImageBackground>
    </View>
  );
};

export default Login;
