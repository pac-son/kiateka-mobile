import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white px-4">
      {/* Header */}
      <View className="flex-row justify-between items-end p-3 mt-10 mb-4 bg-black h-24 rounded-b-3xl">
        <View className="flex-row space-x-2">
          <Ionicons name="home" size={24} color="white" />
          <Text className="text-xl font-bold text-white">HomeFinder</Text>
        </View>
        <View className="flex-row space-x-4">
          <Ionicons name="notifications-outline" size={24} color="white" />
          <Ionicons name="mail-outline" size={24} color="white" />
        </View>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3 mb-6">
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search Properties..."
          className="flex-1 ml-2"
        />
        <TouchableOpacity className="ml-2">
          <Text className="text-gray-600">London ▸</Text>
        </TouchableOpacity>
      </View>

      {/* Recently Added */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-semibold">Recently Added</Text>
        <TouchableOpacity>
          <Text className="text-green-600">View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
        <View className="w-52 mr-4 bg-white rounded-lg shadow">
          <Image
            source={{ uri: "https://via.placeholder.com/200" }}
            className="w-full h-32 rounded-t-lg"
          />
          <View className="p-2">
            <Text className="font-semibold">$500/Month | Flat For Rent</Text>
            <Text className="text-sm text-gray-500">📍 24K, Egham London...</Text>
            <Text className="text-xs mt-1">2 🛏  |  2 🚿  |  200 Sqft</Text>
          </View>
        </View>

        <View className="w-52 mr-4 bg-white rounded-lg shadow">
          <Image
            source={{ uri: "https://via.placeholder.com/200" }}
            className="w-full h-32 rounded-t-lg"
          />
          <View className="p-2">
            <Text className="font-semibold">$500/Month | Flat For Rent</Text>
            <Text className="text-sm text-gray-500">📍 24K, Egham London...</Text>
            <Text className="text-xs mt-1">2 🛏  |  2 🚿  |  200 Sqft</Text>
          </View>
        </View>
      </ScrollView>

      {/* Promo Banner */}
      <View className="">
        <Image source={require('@/assets/images/Frame3.png')} className="w-full h-4" resizeMode="stretch" />
      </View>
      {/* Least Expensive */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-semibold">Least Expensive</Text>
        <TouchableOpacity>
          <Text className="text-green-600">View All</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Link href={'/Welcome'}>Welcome</Link>
      </View>
    </ScrollView>
  );
}
