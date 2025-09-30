// components/AppHeader.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import NotificationPanel from './NotificationPanel';

interface AppHeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ 
  title, 
  showBackButton = false, 
  onBackPress 
}) => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const router = useRouter();

  const handleInboxPress = () => {
    setIsNotificationVisible(false);
    router.push('/InboxScreen');
  };

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <>
      <View className="flex-row justify-between items-end p-3 mt-10 mb-4 bg-black h-24 rounded-b-3xl">
        <View className="flex-row space-x-2 items-center">
          {showBackButton ? (
            <TouchableOpacity onPress={handleBackPress} className="flex-row items-center">
              <Ionicons name="arrow-back" size={24} color="white" />
              <Text className="text-xl font-bold text-white ml-2">{title || 'HomeFinder'}</Text>
            </TouchableOpacity>
          ) : (
            <>
              <Ionicons name="home" size={24} color="white" />
              <Text className="text-xl font-bold text-white">HomeFinder</Text>
            </>
          )}
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

      <NotificationPanel
        isVisible={isNotificationVisible}
        onClose={() => setIsNotificationVisible(false)}
        onInboxPress={handleInboxPress}
      />
    </>
  );
};

export default AppHeader;