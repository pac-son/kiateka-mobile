import { Link, Stack } from "expo-router";
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Login = () => {
  return (
   <>
    <Stack.Screen options={{ headerShown: false }} />

    <View className="flex-1 pt-32">
      <Text>Login to your acount</Text>
    </View>

    <View className="flex-1">
      <Text>Do not have an acount?<Link href={'/Register'} className="text-green-400 underline">Sign Up</Link></Text>
    </View>

    <View className="flex-start my-4 mx-2 gap-1 ">
      <Text>Email addres</Text>
      <TextInput placeholder="Enter your email" keyboardType="email-address"
        className="border border-gray-400 rounded-lg p-3 " 
      />
    </View>

    <View className="flex-start mb-4 mx-2 gap-1 ">
      <Text>Password</Text>
      <TextInput placeholder="Input password" secureTextEntry={true}
        className="border border-gray-400 rounded-lg p-3" 
      />
    </View>
   </>
  )
}

export default Login