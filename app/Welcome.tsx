import { Link, Stack } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Welcome = () => {
  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <View className="flex-1">
      <Image
        source={require("../assets/images/Frame.png")}
        className="flex-[0.7] w-full rounded-b-[50px]"
        resizeMode="cover"
      />

      <Image 
        source={require("../assets/images/Frame1.png")}
        className="absolute self-center top-[65%] z-10"
      />

      <View className="flex-[0.3] items-center justify-center bg-gray-200">
        <TouchableOpacity >
          <Text className="text-lg font-semibold bg-black text-white px-6 py-3 rounded-lg text-center">
            Login to your account
          </Text>
        </TouchableOpacity>

        <Text className="mt-2">
          Do not have an account?{" "}
          <Link href={"/Login"} className="text-green-400 underline">
            Sign Up
          </Link>
        </Text>
      </View>
    </View>
    </>
  );
};

export default Welcome;
