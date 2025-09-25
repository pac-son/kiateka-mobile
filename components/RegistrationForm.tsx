import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RegistrationFormData, RegistrationFormProps } from "../types/auth";

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit,
  onError,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: "",
    phone: "+1",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleInputChange = <K extends keyof RegistrationFormData>(
    field: K,
    value: RegistrationFormData[K]
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formatPhoneNumber = (text: string): string => {
    const cleaned = text.replace(/\D/g, "");

    let formatted = "+1";
    if (cleaned.length > 1) {
      const rest = cleaned.substring(1);
      if (rest.length > 0) {
        formatted += " " + rest.substring(0, 3);
      }
      if (rest.length > 3) {
        formatted += "-" + rest.substring(3, 6);
      }
      if (rest.length > 6) {
        formatted += "-" + rest.substring(6, 10);
      }
    }
    return formatted;
  };

  const handlePhoneChange = (text: string): void => {
    const formatted = formatPhoneNumber(text);
    handleInputChange("phone", formatted);
  };

  const validateForm = (): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (!formData.email) {
      errors.push("Please enter your email address");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }

    if (!formData.agreeToTerms) {
      errors.push("Please agree to the terms and conditions");
    }

    if (!formData.password) {
      errors.push("Please enter a password");
    } else if (formData.password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }

    if (formData.password !== formData.confirmPassword) {
      errors.push("Passwords do not match");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  };

  const handleSubmit = (): void => {
    const { isValid, errors } = validateForm();

    if (!isValid) {
      const errorMessage = errors.join("\n• ");
      Alert.alert("Error", `• ${errorMessage}`);

      if (onError) {
        onError(errorMessage);
      }
      return;
    }

    Alert.alert("Success", "Account created successfully!");

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const isFormValid =
    formData.agreeToTerms &&
    formData.email &&
    formData.password &&
    formData.password === formData.confirmPassword;

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-5 pt-10">
        {/* Title */}
        <Text className="text-3xl font-bold text-center text-gray-800 mb-5">
          Create An Account
        </Text>

        {/* Note */}
        <Text className="text-base text-gray-600 mb-5 leading-6">
          Please note that the following information is available on the website:
        </Text>

        {/* Terms Checkbox */}
        <View className="flex-row items-center mb-8 bg-gray-50 p-4 rounded-lg">
          <Switch
            value={formData.agreeToTerms}
            onValueChange={(value: boolean) =>
              handleInputChange("agreeToTerms", value)
            }
            trackColor={{ false: "#767577", true: "#3b82f6" }}
            thumbColor={formData.agreeToTerms ? "#ffffff" : "#f4f3f4"}
          />
          <Text className="ml-3 text-gray-800 text-base flex-1">
            I agree to the terms and conditions
          </Text>
        </View>

        {/* Email Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-2">
            Email Address
          </Text>
          <View className="bg-gray-100 p-3 rounded mb-3">
            <Text className="text-gray-600 italic">email@domain.com</Text>
          </View>
          <TextInput
            className="border border-gray-300 rounded-lg p-4 text-base bg-white"
            placeholder="Enter your email"
            placeholderTextColor="#9ca3af"
            value={formData.email}
            onChangeText={(text: string) => handleInputChange("email", text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
        </View>

        {/* Phone Number Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-2">
            Phone Number
          </Text>
          <TextInput
            className="border border-gray-300 rounded-lg p-4 text-base bg-white"
            placeholder="+1 123-456-7890"
            placeholderTextColor="#9ca3af"
            value={formData.phone}
            onChangeText={handlePhoneChange}
            keyboardType="phone-pad"
            maxLength={17}
          />
        </View>

        {/* Password Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-2">
            Password
          </Text>
          <View className="relative">
            <TextInput
              className="border border-gray-300 rounded-lg p-4 text-base bg-white pr-12"
              placeholder="Enter your password"
              placeholderTextColor="#9ca3af"
              value={formData.password}
              onChangeText={(text: string) => handleInputChange("password", text)}
              secureTextEntry={!showPassword}
              autoComplete="password-new"
            />
            <TouchableOpacity
              className="absolute right-3 top-3"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#6b7280"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password Section */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-2">
            Confirm Password
          </Text>
          <View className="relative">
            <TextInput
              className="border border-gray-300 rounded-lg p-4 text-base bg-white pr-12"
              placeholder="Confirm your password"
              placeholderTextColor="#9ca3af"
              value={formData.confirmPassword}
              onChangeText={(text: string) =>
                handleInputChange("confirmPassword", text)
              }
              secureTextEntry={!showConfirmPassword}
              autoComplete="password-new"
            />
            <TouchableOpacity
              className="absolute right-3 top-3"
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={24}
                color="#6b7280"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Divider */}
        <View className="border-t border-gray-300 my-8" />

        {/* Submit Button */}
        <TouchableOpacity
          className={`p-5 rounded-xl items-center ${
            isFormValid
              ? "bg-blue-500 shadow-lg shadow-blue-500/25"
              : "bg-gray-400"
          }`}
          onPress={handleSubmit}
          disabled={!isFormValid}
        >
          <Text className="text-white text-lg font-bold">Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegistrationForm;
