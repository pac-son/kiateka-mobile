import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import NotificationPanel from '../../components/NotificationPanel';

export default function Profile() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const router = useRouter();

  const handleInboxPress = () => {
    setIsNotificationVisible(false);
    router.push('/InboxScreen');
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-end p-3 mt-10 mb-4 bg-black h-24 rounded-b-3xl">
        <View className="flex-row space-x-2">
          <Ionicons name="home" size={24} color="white" />
          <Text className="text-xl font-bold text-white">HomeFinder</Text>
        </View>
        <View className="flex-row space-x-4">
          <TouchableOpacity onPress={() => setIsNotificationVisible(true)}>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/InboxScreen')}>
            <Ionicons name="mail-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Content */}
      <ScrollView className="flex-1 px-5">
        <Text className="text-2xl font-bold text-center mb-6">My Properties</Text>
        {/* Your existing property sections content */}
      </ScrollView>

      <NotificationPanel
        isVisible={isNotificationVisible}
        onClose={() => setIsNotificationVisible(false)}
        onInboxPress={handleInboxPress}
      />
    </View>
  );
}