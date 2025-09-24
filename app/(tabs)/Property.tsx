import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Property() {
  // Random property data
  const properties = [
    {
      id: 1,
      title: "USD 70 Thousands",
      desc: "Lorem Ipsum Address Goes Here...",
      image: "https://via.placeholder.com/150",
      beds: 2,
      baths: 2,
      size: 200,
      time: "13 Hours Ago",
    },
    {
      id: 2,
      title: "USD 70 Thousands",
      desc: "Lorem Ipsum Address Goes Here...",
      image: "https://via.placeholder.com/150",
      beds: 2,
      baths: 2,
      size: 200,
      time: "13 Hours Ago",
    },
    {
      id: 3,
      title: "USD 70 Thousands",
      desc: "Lorem Ipsum Address Goes Here...",
      image: "https://via.placeholder.com/150",
      beds: 2,
      baths: 2,
      size: 200,
      time: "13 Hours Ago",
    },
  ];

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

      {/* Search + Filters */}
      <View className="mb-4">
        <Text className="text-lg font-semibold mb-3">Find Properties</Text>

        <View className="flex-row space-x-3">
          <TouchableOpacity className="flex-row items-center border border-gray-300 px-4 py-2 rounded-full">
            <Ionicons name="options-outline" size={18} color="black" />
            <Text className="ml-2">Filters</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center border border-gray-300 px-4 py-2 rounded-full">
            <Text className="mr-1">City</Text>
            <Ionicons name="chevron-down" size={16} color="black" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center border border-gray-300 px-4 py-2 rounded-full">
            <Text className="mr-1">Price Range</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Property List */}
      {properties.map((item) => (
        <View
          key={item.id}
          className="flex-row bg-white rounded-lg shadow mb-4 p-2"
        >
          {/* Image */}
          <Image
            source={{ uri: item.image }}
            className="w-28 h-28 rounded-lg mr-3"
          />

          {/* Details */}
          <View className="flex-1 justify-between">
            <View>
              <Text className="text-gray-400 text-xs mb-1">
                {item.time} | Flat For Rent
              </Text>
              <Text className="font-bold">{item.title}</Text>
              <Text className="text-gray-500 text-sm">{item.desc}</Text>

              {/* icons row */}
              <View className="flex-row items-center mt-1 space-x-3">
                <Text className="text-xs">🛏 {item.beds}</Text>
                <Text className="text-xs">🚿 {item.baths}</Text>
                <Text className="text-xs">📐 {item.size} Sqft</Text>
              </View>
            </View>

            {/* Action buttons */}
            <View className="flex-row space-x-3 mt-2">
              <TouchableOpacity className="flex-row items-center border border-green-500 rounded-full px-3 py-1">
                <Ionicons name="chatbubble-outline" size={14} color="green" />
                <Text className="ml-1 text-green-600 text-xs font-semibold">
                  Quick Chat
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center border border-green-500 rounded-full px-3 py-1">
                <MaterialIcons name="call" size={14} color="green" />
                <Text className="ml-1 text-green-600 text-xs font-semibold">
                  Call
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Favorite Icon */}
          <TouchableOpacity>
            <Ionicons
              name="heart-outline"
              size={20}
              color="gray"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
