import React from 'react';
import { CheckCircle, XCircle, Loader, AlertCircle, Info } from 'lucide-react';

interface NotificationBarProps {
  type: 'success' | 'error' | 'warning' | 'info' | 'loading';
  message: string;
  onDismiss: () => void;
}

const NotificationBar: React.FC<NotificationBarProps> = ({ type, message, onDismiss }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return { bgColor: 'bg-green-600', icon: <CheckCircle className="h-6 w-6 text-white" /> };
      case 'error':
        return { bgColor: 'bg-red-600', icon: <XCircle className="h-6 w-6 text-white" /> };
      case 'warning':
        return { bgColor: 'bg-yellow-500', icon: <AlertCircle className="h-6 w-6 text-white" /> };
      case 'info':
        return { bgColor: 'bg-blue-500', icon: <Info className="h-6 w-6 text-white" /> };
      case 'loading':
        return { bgColor: 'bg-blue-600', icon: <Loader className="h-6 w-6 text-white animate-spin" /> };
      default:
        return { bgColor: 'bg-gray-600', icon: <Info className="h-6 w-6 text-white" /> };
    }
  };

  const { bgColor, icon } = getTypeStyles();

  return (
    <div className={`fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-50`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className={`rounded-lg ${bgColor} p-2 shadow-lg sm:p-3`}>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-opacity-25 bg-white p-2">
                {icon}
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">{message}</span>
                <span className="hidden md:inline">{message}</span>
              </p>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-opacity-25 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
                onClick={onDismiss}
              >
                <span className="sr-only">Dismiss</span>
                <XCircle className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;