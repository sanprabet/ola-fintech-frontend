import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminApp/AdminLayout';
import Users from './Users';
import NotificationBar from '../../components/NotificationBar';
import { UserAllData, CreditDB, MessageDB, BankAccountData } from 'types/types';

interface FetchUsersResponse {
  users: UserAllData[];
  total: number;
}

const generateMockUsers = (count: number): UserAllData[] => {

  return Array.from({ length: count }, (_, i) => ({
    _id: `user${i}`,
    uid: `uid${i}`,
    documentType: 'CC',
    documentNumber: `123456${i}`,
    email: `user${i}@example.com`,
    phoneNumber: `123456789${i}`,
    financialCheck: '2024-01-01',
    personalInfo: {
      primerNombre: 'John',
      segundoNombre: 'Doe',
      primerApellido: 'Smith',
      segundoApellido: 'Johnson',
      estadoCivil: 'Single',
      fechaNacimiento: '1990-01-01',
      genero: 'M',
      nivelEducativo: 'University',
      departamento: 'Bogotá',
      ciudad: 'Bogotá'
    },
    professionalInfo: {
      ocupacion: 'Engineer',
      actividadEconomica: 'Technology',
      estrato: '3',
      tieneCuentaBancaria: 'Yes',
      situacionCrediticia: 'Good',
      antiguedadTelefonoMovil: '2 years'
    },
    accountInformation: {
      accountType: 'ahorro',
      accountNumber: `1000${i}`,
      accountInstitution: 'Bank'
    }
  }));
};

const mockUsers = generateMockUsers(100);

export default function AdminAppRoutes() {
  const [notification, setNotification] = useState<{ type: 'success' | 'error' | 'loading'; message: string } | null>(null);

  useEffect(() => {
    let timer: number | undefined;
    if (notification) {
      timer = window.setTimeout(() => {
        hideNotification();
      }, 6000);
    }
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [notification]);

  const showNotification = (type: 'success' | 'error' | 'loading', message: string) => {
    setNotification({ type, message });
  };

  const hideNotification = () => {
    setNotification(null);
  };

  const handleAsyncOperation = async <T,>(operation: () => Promise<T>, successMessage: string): Promise<T> => {
    showNotification('loading', 'Procesando...');
    try {
      const result = await operation();
      showNotification('success', successMessage);
      return result;
    } catch (error) {
      showNotification('error', 'Ha ocurrido un error. Por favor, inténtalo de nuevo.');
      throw error;
    }
  };

  const fetchPaginatedData = async (
    page: number,
    limit: number,
    search: string,
    pending: boolean,
    active: boolean
  ): Promise<FetchUsersResponse> => {
    return handleAsyncOperation(async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      let filteredUsers = mockUsers;

      // Apply filters
      if (search) {
        const searchLower = search.toLowerCase();
      }

      if (pending) {
        filteredUsers = filteredUsers.filter(user => user.creditHistory?.some(credit => credit.status === 'pending'));
      }

      if (active) {
        filteredUsers = filteredUsers.filter(user => user.creditHistory?.some(credit => credit.status === 'active'));
      }

      // Apply pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

      return {
        users: paginatedUsers,
        total: filteredUsers.length
      };
    }, 'Datos de usuarios cargados exitosamente');
  };

  const fetchUserAllData = async (userId: string): Promise<UserAllData> => {
    return handleAsyncOperation(async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));

      const user = mockUsers.find(u => u.documentNumber === userId);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }, 'Datos del usuario cargados exitosamente');
  };

  return (
    <>
      <Routes>
        <Route path="/*" element={<AdminLayout />} >
          <Route index element={
            <Users
              fetchPaginatedData={fetchPaginatedData}
              fetchUserAllData={fetchUserAllData}
            />
          } />
        </Route>
      </Routes>
      {notification && (
        <NotificationBar
          type={notification.type}
          message={notification.message}
          onDismiss={hideNotification}
        />
      )}
    </>
  );
};