import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Property, PropertySection } from '../types/profile';
import NotificationPanel from './NotificationPanel';


const ProfileScreen: React.FC = () => {
  const propertySections: PropertySection[] = [
    {
      title: 'Uploaded',
      count: 'Drafts',
      properties: []
    },
    {
      title: 'Published',
      count: 'Pending',
      properties: [
        {
          id: '1',
          status: 'published',
          mark: 'booked',
          title: 'Flat For Rent',
          price: 'USD 70 Thousands',
          address: 'Lorem Ipsum Address Goes Here...',
          details: 'E2   E2   E2',
          size: '(30 Sq/t)',
          icons: 'E1 E3',
          timeAgo: 'US Hours Age'
        },
        {
          id: '2',
          status: 'published',
          mark: 'available',
          title: 'Flat For Rent',
          price: 'USD 70 Thousands',
          address: 'Lorem Ipsum Address Goes Here...',
          details: 'E2   E2   E2',
          size: '(30 Sq/t)',
          icons: 'E1 E4',
          timeAgo: 'US Hours Age'
        },
        {
          id: '3',
          status: 'published',
          mark: 'booked',
          title: 'Flat For Rent',
          price: 'USD 70 Thousands',
          address: 'Lorem Ipsum Address Goes Here...',
          details: 'E2   E2   E2',
          size: '(30 Sq/t)',
          icons: 'E1 E5',
          timeAgo: 'US Hours Age'
        }
      ]
    },
    {
      title: 'Pending',
      count: 'Rejected',
      properties: []
    }
  ];

  const renderPropertyCard = (property: Property) => (
    <View key={property.id} className="mb-6">
      {/* Header with time and status */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-gray-600 text-sm">{property.timeAgo} | {property.title}</Text>
        <View className={`px-2 py-1 rounded ${
          property.mark === 'booked' ? 'bg-red-100' : 'bg-green-100'
        }`}>
          <Text className={`text-xs font-semibold ${
            property.mark === 'booked' ? 'text-red-600' : 'text-green-600'
          }`}>
            {property.mark === 'booked' ? 'Booked' : 'Available'}
          </Text>
        </View>
      </View>

      {/* Price */}
      <Text className="text-lg font-bold text-gray-800 mb-1">{property.price}</Text>
      
      {/* Address */}
      <Text className="text-gray-600 text-sm mb-2">{property.address}</Text>

      {/* Details and size */}
      <View className="flex-row justify-between items-center">
        <Text className="text-gray-700 font-medium">
          {property.details} <Text className="text-gray-500">{property.size}</Text>
        </Text>
        <Text className="text-gray-600 text-sm">{property.icons}</Text>
      </View>

      {/* Divider */}
      <View className="border-t border-gray-200 mt-3" />
    </View>
  );

  const renderSection = (section: PropertySection, index: number) => (
    <View key={index} className="mb-6">
      {/* Section Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-gray-800">{section.title}</Text>
        <Text className="text-gray-500">{section.count}</Text>
      </View>

      {/* Divider */}
      <View className="border-t border-gray-300 mb-4" />

      {/* Properties List */}
      {section.properties.length > 0 ? (
        section.properties.map(renderPropertyCard)
      ) : (
        <Text className="text-gray-500 text-center py-4">No properties</Text>
      )}
    </View>
  );

  const [isNotificationVisible, setIsNotificationVisible] = React.useState(false);
  const navigation = useNavigation();

  const handleInboxPress = () => {
    setIsNotificationVisible(false);
    navigation.navigate('Inbox');
  };

  return (
    <View className="flex-1 bg-white">
      {/* Your header */}
      <View className="flex-row justify-between items-end p-3 mt-10 mb-4 bg-black h-24 rounded-b-3xl">
        <View className="flex-row space-x-2">
          <Ionicons name="home" size={24} color="white" />
          <Text className="text-xl font-bold text-white">HomeFinder</Text>
        </View>
        <View className="flex-row space-x-4">
          <TouchableOpacity onPress={() => setIsNotificationVisible(true)}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Inbox')}>
            <Ionicons name="mail-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Content */}
      <ScrollView className="flex-1 px-5">
        <Text className="text-2xl font-bold text-center mb-6">My Properties</Text>
        {propertySections.map(renderSection)}
      </ScrollView>

      <NotificationPanel
        isVisible={isNotificationVisible}
        onClose={() => setIsNotificationVisible(false)}
        onInboxPress={handleInboxPress}
      />
    </View>
  );
};

export default ProfileScreen;