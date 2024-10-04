import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, User, CheckCircle, XCircle, MessageCircle } from 'lucide-react';
import { UserAllData } from 'types/types';
import UserSidebar from './UsersSidebar';

interface FetchUsersResponse {
  users: UserAllData[];
  total: number;
}

interface UsersProps {
  fetchPaginatedData: (
    page: number,
    limit: number,
    search: string,
    pending: boolean,
    active: boolean,
  ) => Promise<FetchUsersResponse>;
  fetchUserAllData: (userId: string) => Promise<UserAllData>;
}

export default function Users({ fetchPaginatedData, fetchUserAllData }: UsersProps) {
  const [users, setUsers] = useState<UserAllData[]>([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPending, setShowPending] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserAllData | null>(null);


  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchPaginatedData(currentPage, usersPerPage, searchTerm, showPending, showActive);
      setUsers(data.users);
      setTotalUsers(data.total);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage, usersPerPage, searchTerm, showPending, showActive]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleShowPending = () => {
    setShowPending(!showPending);
    setCurrentPage(1);
  };

  const handleShowActive = () => {
    setShowActive(!showActive);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleUsersPerPageChange = (count: number) => {
    setUsersPerPage(count);
    setCurrentPage(1);
  };

  const handleOpenUserScreen = async (userId: string) => {
    try {
      const userData = await fetchUserAllData(userId);
      setSelectedUser(userData);  // This line sets the selectedUser state, which should open the sidebar
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleCloseSidebar = () => {
    setSelectedUser(null);
  };

  const handleAcceptCredit = (creditId: string) => {
    // Implement credit acceptance logic here
    console.log('Accepting credit:', creditId);
  };

  const handleRejectCredit = (creditId: string) => {
    // Implement credit rejection logic here
    console.log('Rejecting credit:', creditId);
  };

  const handleMarkCreditPaid = (creditId: string) => {
    // Implement marking credit as paid logic here
    console.log('Marking credit as paid:', creditId);
  };

  const handleCancelMessage = (messageId: string) => {
    // Implement message cancellation logic here
    console.log('Cancelling message:', messageId);
  };

  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const getCounts = (user: UserAllData) => {
    const activeCredits = user.creditHistory?.filter(credit => credit.status === 'active').length || 0;
    const rejectedCredits = user.creditHistory?.filter(credit => credit.status === 'denied').length || 0;
    const scheduledMessages = user.messageHistory?.length || 0;
    return { activeCredits, rejectedCredits, scheduledMessages };
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow flex flex-col overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border-b">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Usuarios</h1>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full p-2 pl-8 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${showPending ? 'bg-principal text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={handleShowPending}
              >
                Pendientes
              </button>
              <button
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${showActive ? 'bg-principal text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={handleShowActive}
              >
                Activos
              </button>
            </div>
          </div>
        </div>

        <div className="flex-grow overflow-x-auto overflow-y-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {['Documento', 'Crédito Pendiente', 'Crédito Activo', 'Verificación Financiera', 'Créditos Activos', 'Créditos Rechazados', 'Mensajes Programados', 'Acciones'].map((header) => (
                      <th key={header} className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={8} className="text-center p-4">Cargando...</td>
                    </tr>
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="text-center p-4">No se encontraron usuarios</td>
                    </tr>
                  ) : (
                    users.map((user) => {
                      const { activeCredits, rejectedCredits, scheduledMessages } = getCounts(user);
                      return (
                        <tr key={user.documentNumber} className="hover:bg-gray-50">
                          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{`${user.documentType} ${user.documentNumber}`}</td>
                          <td className="p-3 text-sm whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              user.creditHistory?.some(credit => credit.status === 'pending') ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {user.creditHistory?.some(credit => credit.status === 'pending') ? 'Sí' : 'No'}
                            </span>
                          </td>
                          <td className="p-3 text-sm whitespace-nowrap">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              user.creditHistory?.some(credit => credit.status === 'active') ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {user.creditHistory?.some(credit => credit.status === 'active') ? 'Sí' : 'No'}
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{formatDate(user.financialCheck ?? "")}</td>
                          <td className="p-3 text-sm whitespace-nowrap">
                            <div className="flex items-center">
                              <CheckCircle size={16} className="text-green-500 mr-1" />
                              <span>{activeCredits}</span>
                            </div>
                          </td>
                          <td className="p-3 text-sm whitespace-nowrap">
                            <div className="flex items-center">
                              <XCircle size={16} className="text-red-500 mr-1" />
                              <span>{rejectedCredits}</span>
                            </div>
                          </td>
                          <td className="p-3 text-sm whitespace-nowrap">
                            <div className="flex items-center">
                              <MessageCircle size={16} className="text-blue-500 mr-1" />
                              <span>{scheduledMessages}</span>
                            </div>
                          </td>
                          <td className="p-3 text-sm whitespace-nowrap">
                            <button
                              onClick={() => handleOpenUserScreen(user.documentNumber)}
                              className="p-2 bg-principal text-white rounded hover:bg-principalToneDown transition-colors duration-300"
                            >
                              <User size={16} />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border-t">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
          <div className="text-sm text-gray-600">
            Mostrando {totalUsers > 0 ? (currentPage - 1) * usersPerPage + 1 : 0}-{Math.min(currentPage * usersPerPage, totalUsers)} de {totalUsers}
          </div>
          <select
            value={usersPerPage}
            onChange={(e) => handleUsersPerPageChange(Number(e.target.value))}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[10, 20, 30, 50].map(value => (
              <option key={value} value={value}>{value} por página</option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="p-2 rounded border disabled:opacity-50 transition-all duration-300 text-white bg-principal hover:bg-principalToneDown"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1 || loading}
          >
            <ChevronLeft size={20} />
          </button>
          <span className="px-3 py-1 text-texto rounded">{currentPage}</span>
          <button
            className="p-2 rounded border disabled:opacity-50 transition-all duration-300 text-white bg-principal hover:bg-principalToneDown"
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages || loading}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      {selectedUser && (
        <UserSidebar 
          user={selectedUser} 
          onClose={handleCloseSidebar}
          onAcceptCredit={handleAcceptCredit}
          onRejectCredit={handleRejectCredit}
          onMarkCreditPaid={handleMarkCreditPaid}
          onCancelMessage={handleCancelMessage}
        />
      )}
    </div>
  );
}