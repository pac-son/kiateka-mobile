// components/NotificationPanel.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Animated,
  Modal,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

interface NotificationPanelProps {
  isVisible: boolean;
  onClose: () => void;
  onInboxPress: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  isVisible,
  onClose,
  onInboxPress,
}) => {
  const router = useRouter();
  const slideAnim = React.useRef(new Animated.Value(300)).current;

  const notifications = [
    // ... your notifications
  ];

  // ... rest of your NotificationPanel code remains the same

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        className="flex-1 bg-black/50"
        activeOpacity={1}
        onPress={onClose}
      >
        <Animated.View 
          className="ml-auto w-80 h-full bg-white"
          style={{ transform: [{ translateX: slideAnim }] }}
        >
          {/* Header */}
          <View className="bg-black pt-12 pb-4 px-4 rounded-b-3xl h-24">
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-xl font-bold">Notifications</Text>
              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Inbox Button */}
          <TouchableOpacity 
            className="flex-row items-center justify-between p-4 border-b border-gray-200 bg-blue-50"
            onPress={() => {
              onClose();
              router.push('/InboxScreen');
            }}
          >
            <View className="flex-row items-center">
              <Ionicons name="mail" size={20} color="#3b82f6" />
              <Text className="text-blue-600 font-semibold ml-2">Inbox</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#3b82f6" />
          </TouchableOpacity>

          {/* ... rest of your NotificationPanel content */}
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

export default NotificationPanel;