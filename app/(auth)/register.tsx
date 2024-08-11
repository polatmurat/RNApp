import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import FormField from "@/components/utils/FormField";
import CustomButton from "@/components/utils/CustomButton";
import AuthWrapper from "./authwrapper";
import { Link } from "expo-router";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", username: "", email: "", password: "" });

  const submit = () => {

  };

  return (
    <AuthWrapper>
      <View>
        <Text className="text-white text-2xl text-center mb-5">Register</Text>
        <FormField
          value={formData.name}
          handleChangeText={(e: any) =>
            setFormData({ ...formData, name: e })
          }
          otherStyles="mt-7"
          placeholder="Name"
          title=""
        />
        <FormField
          value={formData.username}
          handleChangeText={(e: any) =>
            setFormData({ ...formData, username: e })
          }
          placeholder="Username"
          title=""
        />
        <FormField
          value={formData.email}
          handleChangeText={(e: any) =>
            setFormData({ ...formData, email: e })
          }
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
          onPress={submit}
          containerStyles="mt-7 mx-5"
        />
        <View className="gap-1 mx-14 my-3 border-t px-5 border-white pb-2 items-center justify-evenly flex-row">
          <Text className="text-white">Already have an account?</Text>
          <Link
            href="/login"
            className="text-lg text-white font-semibold"
          >
            Sign In
          </Link>
        </View>
      </View>
    </AuthWrapper>
  );
};

export default Register;
