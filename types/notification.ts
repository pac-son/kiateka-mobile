export interface Notification {
  id: string;
  type: 'saved' | 'rejected' | 'unavailable';
  title: string;
  message: string;
  time: string;
  date: string;
  isRead: boolean;
  sender?: string;
}

export interface NotificationPanelProps {
  isVisible: boolean;
  onClose: () => void;
  onInboxPress: () => void;
}