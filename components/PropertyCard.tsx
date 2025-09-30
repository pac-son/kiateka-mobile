import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface PropertyCardProps {
  id: number;
  image: any;
  price: string;
  date: string;
  details: string;
  status: "Published" | "Pending" | "Rejected";
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  image,
  price,
  date,
  details,
  status,
}) => {
  return (
    <View className="flex-row bg-white rounded-xl p-3 mb-4 shadow border border-gray-200">
      {/* Property Image */}
      <Image source={image} className="w-24 h-24 rounded-lg mr-3" />

      {/* Property Details */}
      <View className="flex-1">
        <Text className="text-gray-500 text-xs">{date}</Text>
        <Text className="font-bold text-base">{price}</Text>
        <Text className="text-gray-600 text-sm mb-2">{details}</Text>

        {/* Action Buttons */}
        <View className="flex-row space-x-2">
          {status === "Published" && (
            <TouchableOpacity className="px-3 py-1 bg-green-100 rounded-lg border border-green-400">
              <Text className="text-green-500 text-xs font-bold">
                Mark Booked
              </Text>
            </TouchableOpacity>
          )}

          {status === "Pending" && (
            <TouchableOpacity className="px-3 py-1 bg-green-100 rounded-lg border border-green-400">
              <Text className="text-green-500 text-xs font-bold">Publish</Text>
            </TouchableOpacity>
          )}

          {status === "Rejected" && (
            <TouchableOpacity className="px-3 py-1 bg-green-100 rounded-lg border border-green-400">
              <Text className="text-green-500 text-xs font-bold">
                Edit Draft
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity className="px-3 py-1 bg-yellow-100 rounded-lg border border-yellow-400">
            <Text className="text-yellow-600 text-xs font-bold">Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PropertyCard;
