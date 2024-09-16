import React from 'react';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

interface NotificationBarProps {
  type: 'success' | 'error' | 'loading';
  message: string;
  onDismiss: () => void;
}

const NotificationBar: React.FC<NotificationBarProps> = ({ type, message, onDismiss }) => {
  const bgColor = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600';
  const icon = type === 'success' ? <CheckCircle className="h-6 w-6 text-white" /> :
               type === 'error' ? <XCircle className="h-6 w-6 text-white" /> :
               <Loader className="h-6 w-6 text-white animate-spin" />;

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