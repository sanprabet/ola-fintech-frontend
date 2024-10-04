import React, { useState, useCallback, createContext, useContext, useEffect, useRef } from 'react';
import NotificationBar from '../components/NotificationBar';  // Make sure this path is correct

type NotificationType = 'success' | 'error' | 'warning' | 'info' | 'loading';
interface Notification {
  type: NotificationType;
  message: string;
}

const useNotification = () => {
  const [notification, setNotification] = useState<Notification | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showNotification = useCallback((type: NotificationType, message: string) => {
    console.log('showNotification called with:', type, message);
    setNotification({ type, message });

    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set a new timer to close the notification after 40 seconds
    timerRef.current = setTimeout(() => {
      hideNotification();
    }, 12000);
  }, []);

  const hideNotification = useCallback(() => {
    console.log('hideNotification called');
    setNotification(null);

    // Clear the timer when hiding the notification
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const NotificationBarWrapper = () => {
    if (!notification) return null;
    return (
      <NotificationBar
        type={notification.type}
        message={notification.message}
        onDismiss={hideNotification}
      />
    );
  };

  return { showNotification, hideNotification, NotificationBarWrapper };
};

interface NotificationContextType {
  showNotification: (type: NotificationType, message: string) => void;
  NotificationBarWrapper: React.FC;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { showNotification, NotificationBarWrapper } = useNotification();

  return (
    <NotificationContext.Provider value={{ showNotification, NotificationBarWrapper }}>
      {children}
      <NotificationBarWrapper />
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotificationContext must be used within a NotificationProvider');
  }
  return context;
};