import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, User, CheckCircle, XCircle, MessageCircle } from 'lucide-react';
import UserSidebar from './UsersSidebar';
import { useCreditHandlers } from '../../hooks/useAppHandlers'; // Import the hook
import { UserAllData } from 'types/types'; // Use the new interface

export default function Users() {
  const { fetchUsersAdmin } = useCreditHandlers();
  const [users, setUsers] = useState<UserAllData[]>([]); // Updated to use UserAllData
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPending, setShowPending] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserAllData | null>(null); // Updated to use UserAllData

  // Fetch users on state changes related to pagination or filters
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetchUsersAdmin(currentPage, usersPerPage, searchTerm, showPending, showActive);
        if (response) {
          setUsers(response.users); // Users are expected to follow the UserAllData interface
          setTotalUsers(response.total);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [currentPage, usersPerPage, searchTerm, showPending, showActive]);

  // Handle search term changes
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to the first page when a new search term is entered
  };

  // Toggle the showPending filter
  const handleShowPending = () => {
    setShowPending(!showPending);
    setCurrentPage(1);
  };

  // Toggle the showActive filter
  const handleShowActive = () => {
    setShowActive(!showActive);
    setCurrentPage(1);
  };

  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Function to handle users per page change
  const handleUsersPerPageChange = (num: number) => {
    setUsersPerPage(num);
  };

  // Handle selecting a user
  const handleSelectUser = (user: UserAllData) => {
    setSelectedUser(user);
  };

  // Placeholder functions for handling actions related to credit (these can be expanded)
  const handleAcceptCredit = () => {};
  const handleRejectCredit = () => {};
  const handleMarkCreditPaid = () => {};
  const handleCancelMessage = () => {};

  // Close the user sidebar
  const handleCloseSidebar = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Buscar usuario..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleShowPending} className="bg-gray-200 p-2 rounded">
          {showPending ? 'Mostrar todos' : 'Mostrar pendientes'}
        </button>
        <button onClick={handleShowActive} className="bg-gray-200 p-2 rounded">
          {showActive ? 'Mostrar todos' : 'Mostrar activos'}
        </button>
      </div>

      <div>
        {/* Pagination and user list */}
        <div className="my-4">
          {users.map((user, index) => (
            <div key={user.userData._id} className="p-4 border rounded my-2">
              <h2>{user.userData.personalInfo?.primerNombre} {user.userData.personalInfo?.primerApellido}</h2>
              <p>{user.userData.email}</p>
              <button onClick={() => handleSelectUser(user)}>Ver detalles</button>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div>
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
          <div className="flex">
            <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1 || loading}>
              <ChevronLeft size={20} />
            </button>
            <span>{currentPage}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={loading || currentPage * usersPerPage >= totalUsers}>
              <ChevronRight size={20} />
            </button>
          </div>
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