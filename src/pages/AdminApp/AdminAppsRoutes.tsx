import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminApp/AdminLayout';
import Users from './Users';
import NotificationBar from '../../components/NotificationBar';
import { UserAllData, CreditDB, MessageDB, BankAccountData } from 'types';

interface FetchUsersResponse {
  users: UserAllData[];
  total: number;
}

const generateMockUsers = (count: number): UserAllData[] => {
  const creditStatuses: ('pending' | 'active' | 'payed' | 'denied')[] = ['pending', 'active', 'payed', 'denied'];
  const messageStatuses: ('scheduled' | 'sending' | 'sent' | 'error')[] = ['scheduled', 'sending', 'sent', 'error'];
  const lastNames = ['García', 'Rodríguez', 'López', 'Martínez', 'González', 'Hernández', 'Pérez', 'Sánchez', 'Ramírez', 'Torres'];
  const cities = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Bucaramanga', 'Pereira', 'Santa Marta', 'Manizales', 'Cúcuta'];
  const accountTypes: ('ahorro' | 'corriente' | 'billetera digital (Nequi)')[] = ['ahorro', 'corriente', 'billetera digital (Nequi)'];
  const banks = ['Bancolombia', 'Banco de Bogotá', 'Davivienda', 'BBVA', 'Banco de Occidente'];

  return Array.from({ length: count }, (_, i) => {
    const userId = `USER${i.toString().padStart(3, '0')}`;
    const creditCount = Math.floor(Math.random() * 5) + 1; // 1 to 5 credits
    const messageCount = Math.floor(Math.random() * 10) + 1; // 1 to 10 messages

    const accountInformation: BankAccountData | undefined = Math.random() > 0.2 ? {
      accountType: accountTypes[Math.floor(Math.random() * accountTypes.length)],
      accountNumber: Math.floor(Math.random() * 1000000000).toString().padStart(10, '0'),
      accountInstitution: banks[Math.floor(Math.random() * banks.length)],
    } : undefined;

    return {
      documentType: "CC",
      documentNumber: `1000000${i.toString().padStart(3, '0')}`,
      email: `user${i}@example.com`,
      phoneNumber: `+57300000${i.toString().padStart(4, '0')}`,
      financialCheckUntil: new Date(Date.now() + Math.random() * 180 * 24 * 60 * 60 * 1000).toISOString(),
      personalInfo: {
        primerNombre: `Nombre${i}`,
        segundoNombre: Math.random() > 0.5 ? `SegundoNombre${i}` : "",
        primerApellido: lastNames[Math.floor(Math.random() * lastNames.length)],
        segundoApellido: lastNames[Math.floor(Math.random() * lastNames.length)],
        estadoCivil: ["Soltero", "Casado", "Divorciado", "Viudo"][Math.floor(Math.random() * 4)],
        fechaNacimiento: new Date(1970 + Math.floor(Math.random() * 30), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
        genero: ["Masculino", "Femenino", "Otro"][Math.floor(Math.random() * 3)],
        nivelEducativo: ["Primaria", "Secundaria", "Universidad", "Posgrado"][Math.floor(Math.random() * 4)],
        departamento: "Cundinamarca",
        ciudad: cities[Math.floor(Math.random() * cities.length)]
      },
      professionalInfo: {
        ocupacion: ["Empleado", "Independiente", "Estudiante", "Jubilado"][Math.floor(Math.random() * 4)],
        actividadEconomica: ["Tecnología", "Salud", "Educación", "Comercio", "Industria"][Math.floor(Math.random() * 5)],
        estrato: String(Math.floor(Math.random() * 6) + 1),
        tieneCuentaBancaria: accountInformation ? "Sí" : "No",
        situacionCrediticia: ["Buena", "Regular", "Mala"][Math.floor(Math.random() * 3)],
        antiguedadTelefonoMovil: `${Math.floor(Math.random() * 10) + 1} años`
      },
      accountInformation,
      creditHistory: Array.from({ length: creditCount }, (_, index): CreditDB => ({
        userId: userId,
        status: creditStatuses[Math.floor(Math.random() * creditStatuses.length)],
        data: {
          montoSolicitado: Math.floor(Math.random() * 10000000) + 1000000,
          interesCorriente: 0.02,
          administracion: 50000,
          iva: 9500,
          totalPagar: 0, // This should be calculated based on other values
          fechaCuota: new Date(Date.now() + (Math.floor(Math.random() * 90) + 30) * 24 * 60 * 60 * 1000).toISOString(),
          otpCode: Math.floor(100000 + Math.random() * 900000).toString(),
          otpTimestamp: Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000) // Random timestamp within the last 30 days
        }
      })),
      messageHistory: Array.from({ length: messageCount }, (_, index): MessageDB => ({
        userId: userId,
        status: messageStatuses[Math.floor(Math.random() * messageStatuses.length)],
        message: `Mensaje ${index + 1}: ${['Bienvenido a nuestro servicio de crédito!', 'Su solicitud está en proceso.', 'Felicidades, su crédito ha sido aprobado!', 'Por favor, complete la información faltante.', 'Gracias por usar nuestros servicios.'][Math.floor(Math.random() * 5)]}`,
        error: Math.random() > 0.9 ? 'Error al enviar el mensaje' : undefined // 10% chance of error
      }))
    };
  });
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
        filteredUsers = filteredUsers.filter(user => 
          user.documentNumber.includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower) ||
          user.phoneNumber.includes(searchLower) ||
          `${user.personalInfo.primerNombre} ${user.personalInfo.segundoNombre} ${user.personalInfo.primerApellido} ${user.personalInfo.segundoApellido}`.toLowerCase().includes(searchLower)
        );
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