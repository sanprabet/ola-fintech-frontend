import React, { useState } from 'react';
import { X, User, CreditCard, MessageSquare, Copy, ChevronDown, ChevronUp, CheckCircle, XCircle, DollarSign, Calendar, Send } from 'lucide-react';
import { UserAllData, CreditDB, MessageDB } from 'types/types';

interface UserSidebarProps {
  user: UserAllData;
  onClose: () => void;
  onAcceptCredit: (creditId: string) => void;
  onRejectCredit: (creditId: string) => void;
  onMarkCreditPaid: (creditId: string) => void;
  onCancelMessage: (messageId: string) => void;
}

const CopyableField: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You might want to add a toast notification here
  };

  const capitalizeLabel = (str: string) => {
    return str.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white p-2 rounded-lg">
      <span className="font-medium mb-1 sm:mb-0">{capitalizeLabel(label)}:</span>
      <div className="flex items-center">
        <span className="mr-2 break-all">{value}</span>
        <Copy 
          size={16} 
          className="cursor-pointer text-gray-500 hover:text-gray-700 flex-shrink-0"
          onClick={() => copyToClipboard(value)}
        />
      </div>
    </div>
  );
};

const ExpandableSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="text-lg font-semibold flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </h3>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isExpanded && <div className="mt-4 space-y-2">{children}</div>}
    </div>
  );
};

const UserInfoComponent: React.FC<{ user: UserAllData }> = ({ user }) => (
  <ExpandableSection title="Información del Usuario" icon={<User size={20} />}>
    {Object.entries(user).map(([key, value]) => {
      if (key !== 'creditHistory' && key !== 'messageHistory' && key !== 'personalInfo' && key !== 'professionalInfo') {
        let displayValue = typeof value === 'string' ? value : JSON.stringify(value);
        return <CopyableField key={key} label={key} value={displayValue} />;
      }
      return null;
    })}
  </ExpandableSection>
);

const PersonalInfoComponent: React.FC<{ personalInfo: UserAllData['personalInfo'] }> = ({ personalInfo }) => (
  <ExpandableSection title="Información Personal" icon={<User size={20} />}>
    {Object.entries(personalInfo || {}).map(([key, value]) => (
      <CopyableField key={key} label={key} value={String(value)} />
    ))}
  </ExpandableSection>
);

const ProfessionalInfoComponent: React.FC<{ professionalInfo: UserAllData['professionalInfo'] }> = ({ professionalInfo }) => (
  <ExpandableSection title="Información Profesional" icon={<User size={20} />}>
    {Object.entries(professionalInfo || {}).map(([key, value]) => (
      <CopyableField key={key} label={key} value={String(value)} />
    ))}
  </ExpandableSection>
);

const StatusBadge: React.FC<{ status: string; className?: string }> = ({ status, className }) => {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-semibold";
  const statusClasses = {
    pendiente: "bg-yellow-100 text-yellow-800",
    activo: "bg-green-100 text-green-800",
    pagado: "bg-blue-100 text-blue-800",
    rechazado: "bg-red-100 text-red-800",
    programado: "bg-purple-100 text-purple-800",
    enviando: "bg-indigo-100 text-indigo-800",
    enviado: "bg-teal-100 text-teal-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <span className={`${baseClasses} ${statusClasses[status as keyof typeof statusClasses]} ${className}`}>
      {status}
    </span>
  );
};

const translateStatus = (status: string): string => {
  const statusTranslations: { [key: string]: string } = {
    'pending': 'pendiente',
    'active': 'activo',
    'payed': 'pagado',
    'denied': 'rechazado',
    'scheduled': 'programado',
    'sending': 'enviando',
    'sent': 'enviado',
    'error': 'error'
  };
  return statusTranslations[status] || status;
};

const CreditHistoryTable: React.FC<{ 
  creditHistory?: CreditDB[], 
  onAcceptCredit: (creditId: string) => void,
  onRejectCredit: (creditId: string) => void,
  onMarkCreditPaid: (creditId: string) => void
}> = ({ creditHistory, onAcceptCredit, onRejectCredit, onMarkCreditPaid }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4 overflow-x-auto">
    <h3 className="text-lg font-semibold flex items-center mb-4">
      <CreditCard size={20} />
      <span className="ml-2">Historial de Créditos</span>
    </h3>
    {creditHistory && creditHistory.length > 0 ? (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {creditHistory.map((credit, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={translateStatus(credit.status)} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">${credit.data.montoSolicitado.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(credit.data.fechaCuota).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {credit.status === 'pending' && (
                  <>
                    <button
                      onClick={() => onAcceptCredit(credit.userId)}
                      className="mr-2 p-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
                    >
                      <CheckCircle size={16} />
                    </button>
                    <button
                      onClick={() => onRejectCredit(credit.userId)}
                      className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
                    >
                      <XCircle size={16} />
                    </button>
                  </>
                )}
                {credit.status === 'active' && (
                  <button
                    onClick={() => onMarkCreditPaid(credit.userId)}
                    className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    <DollarSign size={16} />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No hay historial de créditos disponible.</p>
    )}
  </div>
);

const MessageHistoryTable: React.FC<{ 
  messageHistory?: MessageDB[],
  onCancelMessage: (messageId: string) => void
}> = ({ messageHistory, onCancelMessage }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4 overflow-x-auto">
    <h3 className="text-lg font-semibold flex items-center mb-4">
      <MessageSquare size={20} />
      <span className="ml-2">Historial de Mensajes</span>
    </h3>
    {messageHistory && messageHistory.length > 0 ? (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mensaje</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Error</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {messageHistory.map((message, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={translateStatus(message.status)} />
              </td>
              <td className="px-6 py-4">{message.message}</td>
              <td className="px-6 py-4">{message.error || 'N/A'}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {message.status === 'scheduled' && (
                  <button
                    onClick={() => onCancelMessage(message.userId)}
                    className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
                  >
                    <Calendar size={16} />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No hay historial de mensajes disponible.</p>
    )}
  </div>
);

const MessageScheduler: React.FC = () => {
  const [message, setMessage] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');

  const handleSchedule = () => {
    console.log('Programando mensaje:', message, 'para la fecha:', scheduleDate);
    // Reset fields after mock scheduling
    setMessage('');
    setScheduleDate('');
  };

  const handleSendImmediately = () => {
    console.log('Enviando mensaje inmediatamente:', message);
    // Reset message field after mock sending
    setMessage('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold flex items-center mb-4">
        <MessageSquare size={20} />
        <span className="ml-2">Programar Mensaje</span>
      </h3>
      <div className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escriba su mensaje aquí..."
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <div className="flex space-x-2">
          <input
            type="datetime-local"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSchedule}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 flex items-center"
          >
            <Calendar size={16} className="mr-2" />
            Programar
          </button>
        </div>
        <button
          onClick={handleSendImmediately}
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
        >
          <Send size={16} className="mr-2" />
          Enviar Ahora
        </button>
      </div>
    </div>
  );
};

const UserSidebar: React.FC<UserSidebarProps> = ({ 
  user, 
  onClose, 
  onAcceptCredit, 
  onRejectCredit, 
  onMarkCreditPaid, 
  onCancelMessage 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] bg-fondo shadow-lg overflow-y-auto transition-transform transform ease-in-out duration-300">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-texto">Detalles del Usuario</h2>
            <button onClick={onClose} className="text-texto hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <UserInfoComponent user={user} />
          <PersonalInfoComponent personalInfo={user.personalInfo} />
          <ProfessionalInfoComponent professionalInfo={user.professionalInfo} />
          <CreditHistoryTable 
            creditHistory={user.creditHistory} 
            onAcceptCredit={onAcceptCredit}
            onRejectCredit={onRejectCredit}
            onMarkCreditPaid={onMarkCreditPaid}
          />
          <MessageHistoryTable 
            messageHistory={user.messageHistory}
            onCancelMessage={onCancelMessage}
          />
          <MessageScheduler />
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;