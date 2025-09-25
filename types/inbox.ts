export interface Message {
  id: string;
  sender: string;
  time: string;
  message: string;
  isRead: boolean;
  avatar?: string;
}

export interface InboxScreenProps {
  // Add any props you need for navigation or data fetching
}