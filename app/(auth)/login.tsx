import { View, Text } from "react-native";
import React, { useEffect, useState, ChangeEvent } from "react";
import FormField from "@/components/utils/FormField";
import CustomButton from "@/components/utils/CustomButton";
import AuthWrapper from "./AuthWrapper";
import { Link, useRouter } from "expo-router";
import { useUserLoginMutation } from "@/features/services/auth/authService";
import { useDispatch } from "react-redux";
import { setUserToken } from "@/features/reducers/authReducer";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, response] = useUserLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputChange = (field: keyof typeof formData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const submit = async () => {
    await login(formData);
  };

  useEffect(() => {
    if (response.isSuccess) {
      const token = response?.data?.result?.token;
      dispatch(setUserToken(token));
      router.push("/home");
    } else if (response.error) {
      const errorData = response.error?.data || "No data available";
      console.log("ERROR: ", errorData);
    }
  }, [response]);

  return (
    <AuthWrapper>
      <View>
        <Text className="text-white text-2xl text-center mb-5">Login</Text>
        <FormField
          value={formData.email}
          handleChangeText={handleInputChange("email")}
          otherStyles="mt-7"
          keyboardType="email-address"
          placeholder="Email"
          title=""
        />
        <FormField
          value={formData.password}
          handleChangeText={handleInputChange("password")}
          placeholder="Password"
          title=""
        />
        <CustomButton
          title={response.isLoading ? "Loading ... " : "Sign In"}
          onPress={submit}
          containerStyles="mt-7 mx-5"
        />
        <View className="gap-1 mx-14 my-3 border-t px-5 border-white pb-2 items-center justify-evenly flex-row">
          <Text className="text-white">Don't have an account?</Text>
          <Link href="/register" className="text-lg text-white font-semibold">
            Sign Up
          </Link>
        </View>
      </View>
    </AuthWrapper>
  );
};

export default Login;
