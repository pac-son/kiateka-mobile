import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const InboxScreen: React.FC = () => {
  const messages = [
    {
      id: '1',
      sender: 'John Doe',
      time: '10:00',
      message: 'I am interested in this property. Is the rate final?',
      isRead: false
    },
    {
      id: '2',
      sender: 'Anna Johnathan',
      time: '10:00',
      message: 'Lorem Ipsum is A Dummy Text Used By The Designers To Fill Spaces...',
      isRead: false
    },
    // ... other messages
  ];

  const renderMessageItem = (message: any) => (
    <TouchableOpacity
      key={message.id}
      className={`p-4 border-b border-gray-200 ${
        !message.isRead ? 'bg-blue-50' : 'bg-white'
      }`}
    >
      <View className="flex-row justify-between items-start mb-2">
        <Text className="font-semibold text-gray-800 text-base">
          {message.sender}
        </Text>
        <Text className="text-gray-500 text-sm">{message.time}</Text>
      </View>
      
      <Text 
        className={`text-sm leading-5 ${
          !message.isRead ? 'text-gray-800 font-medium' : 'text-gray-600'
        }`}
        numberOfLines={2}
      >
        {message.message}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white">
      {/* Header matching your style */}
      <View className="bg-black p-3 mt-10 mb-4 h-24 rounded-b-3xl">
        <View className="flex-row justify-between items-end flex-1">
          <View className="flex-row space-x-2 items-center">
            <Ionicons name="home" size={24} color="white" />
            <Text className="text-xl font-bold text-white">HomeFinder</Text>
          </View>
          
          <View className="flex-row space-x-4">
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="mail-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Inbox/Notification Tabs */}
        <View className="flex-row justify-between mt-2">
          <Text className="text-lg font-semibold text-gray-300">Notification</Text>
          <Text className="text-lg font-semibold text-white underline">Inbox</Text>
        </View>
      </View>

      {/* Inbox Content */}
      <ScrollView className="flex-1">
        {messages.map(renderMessageItem)}
      </ScrollView>
    </View>
  );
};

export default InboxScreen;