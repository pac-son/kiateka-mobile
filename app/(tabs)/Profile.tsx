import AppHeader from "@/components/AppHeader";
import PropertyCard from "@/components/PropertyCard";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import NotificationPanel from "../../components/NotificationPanel";

export default function Profile() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Uploaded");
  const [activeFilter, setActiveFilter] = useState("Published");
  const router = useRouter();

  const handleInboxPress = () => {
    setIsNotificationVisible(false);
    router.push("/InboxScreen");
  };

  // Mock property data
  const properties = [
    {
      id: 1,
      image: require("../../assets/images/house.png"),
      price: "USD 70 Thousands",
      date: "13 Hours Ago | Flat For Rent",
      details: "2 🛏 2 🛁 200 Sqft",
      status: "Published",
    },
    {
      id: 2,
      image: require("../../assets/images/house.png"),
      price: "USD 70 Thousands",
      date: "13 Hours Ago | Flat For Rent",
      details: "2 🛏 2 🛁 200 Sqft",
      status: "Pending",
    },
    {
      id: 3,
      image: require("../../assets/images/house.png"),
      price: "USD 70 Thousands",
      date: "13 Hours Ago | Flat For Rent",
      details: "2 🛏 2 🛁 200 Sqft",
      status: "Rejected",
    },
  ];

  const filteredProperties = properties.filter(
    (p) => p.status === activeFilter
  );

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <AppHeader />

      {/* Tabs */}
      <View className="flex-row justify-around border-b border-gray-200">
        {["Uploaded", "Drafts"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`py-3 px-4 ${
              activeTab === tab ? "border-b-2 border-green-500" : ""
            }`}
          >
            <Text
              className={`${
                activeTab === tab ? "text-green-500 font-bold" : "text-gray-500"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Filters */}
      {activeTab === "Uploaded" && (
        <View className="flex-row justify-around border-b border-gray-200 mt-3">
          {["Published", "Pending", "Rejected"].map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full border ${
                activeFilter === filter
                  ? "bg-green-100 border-green-500"
                  : "border-gray-300"
              }`}
            >
              <Text
                className={`${
                  activeFilter === filter ? "text-green-500" : "text-gray-500"
                }`}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Property List */}
      <ScrollView className="flex-1 px-5 mt-4">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            image={property.image}
            price={property.price}
            date={property.date}
            details={property.details}
            status={property.status as "Published" | "Pending" | "Rejected"}
          />
        ))}
      </ScrollView>

      {/* Notifications */}
      <NotificationPanel
        isVisible={isNotificationVisible}
        onClose={() => setIsNotificationVisible(false)}
        onInboxPress={handleInboxPress}
      />
    </View>
  );
}
