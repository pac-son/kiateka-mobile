import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white px-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mt-10 mb-4">
        <Text className="text-xl font-bold">HomeFinder</Text>
        <View className="flex-row space-x-4">
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons name="mail-outline" size={24} color="black" />
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
      <View className="bg-yellow-100 rounded-lg p-4 mb-6">
        <Text className="font-bold text-gray-800 mb-1">
          Could Not Find The Right Property?
        </Text>
        <TouchableOpacity>
          <Text className="text-green-600 font-semibold">Try Map Search</Text>
        </TouchableOpacity>
      </View>

      {/* Least Expensive */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-semibold">Least Expensive</Text>
        <TouchableOpacity>
          <Text className="text-green-600">View All</Text>
        </TouchableOpacity>
      </View>

      {/*I'll add more listings here */}
    </ScrollView>
  );
}
