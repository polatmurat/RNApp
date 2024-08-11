import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { BlurView } from 'expo-blur';
import { icons } from "@/constants";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText?: (text: string) => void;
  otherStyles?: string;
  keyboardType?: string;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`${otherStyles} space-y-2 mx-5`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <BlurView
        intensity={50}
        style={{ borderRadius: 16, overflow: 'hidden' }}
        tint="systemThinMaterialLight"
      >
        <View className="w-full h-16 px-4 bg-black-100 border-2 border-gray-100 rounded-2xl focus:border-gray-400 items-center flex-row">
          <TextInput
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#e6e6ee"
            onChangeText={handleChangeText}
            secureTextEntry={placeholder?.toLocaleLowerCase() === "password" && !showPassword}
          />
          {placeholder?.toLocaleLowerCase() === "password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      </BlurView>
    </View>
  );
};

export default FormField;
