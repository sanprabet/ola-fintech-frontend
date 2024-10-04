import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from 'firebase/auth';
import { UserDB } from '../types/types';
import { auth } from '../config/firebase';
import { UserApi } from '../services/user';

const OTP_EXPIRATION_TIME = 60 * 60 * 1000; // 60 minutes in milliseconds

interface AuthState {
  authUser: User | null;
  dbUser: UserDB | null;
  isLoading: boolean;
  otpVerifiedTimestamp: number | null;
}

interface AuthContextType extends AuthState {
  setOtpVerifiedTimestamp: (timestamp: number | null) => void;
  clearAuthState: () => void;
  refreshDbUser: () => Promise<void>;
  isOtpVerified: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const loadAuthState = (): AuthState => {
  const storedState = localStorage.getItem('authState');
  console.log('Loading auth state from localStorage:', storedState);
  if (storedState) {
    const parsedState = JSON.parse(storedState);
    return {
      ...parsedState,
      authUser: null, // We'll set this in the useEffect
      isLoading: true,
    };
  }
  return {
    authUser: null,
    dbUser: null,
    isLoading: true,
    otpVerifiedTimestamp: null,
  };
};

const saveAuthState = (state: AuthState) => {
  const stateToSave = {
    ...state,
    authUser: state.authUser ? { uid: state.authUser.uid } : null,
  };
  console.log('Saving auth state to localStorage:', stateToSave);
  localStorage.setItem('authState', JSON.stringify(stateToSave));
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(loadAuthState);

  useEffect(() => {
    console.log('AuthProvider mounted');
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      console.log('Auth state changed, user:', firebaseUser?.uid);
      if (firebaseUser) {
        try {
          const userResponse = await UserApi.getUserByUid(firebaseUser.uid);
          console.log('User data fetched:', userResponse.data);
          setAuthState(prev => {
            const newState = {
              ...prev,
              authUser: firebaseUser,
              dbUser: userResponse.data,
              isLoading: false,
              // Preserve the existing OTP verification status
              otpVerifiedTimestamp: prev.otpVerifiedTimestamp,
            };
            console.log('Updating auth state:', newState);
            saveAuthState(newState);
            return newState;
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
          setAuthState(prev => {
            const newState = {
              ...prev,
              authUser: firebaseUser,
              dbUser: null,
              isLoading: false,
              // Preserve the existing OTP verification status
              otpVerifiedTimestamp: prev.otpVerifiedTimestamp,
            };
            console.log('Updating auth state (error case):', newState);
            saveAuthState(newState);
            return newState;
          });
        }
      } else {
        console.log('No user, clearing auth state');
        const newState = {
          authUser: null,
          dbUser: null,
          isLoading: false,
          otpVerifiedTimestamp: null,
        };
        setAuthState(newState);
        saveAuthState(newState);
      }
    });

    return () => unsubscribe();
  }, []);

  const refreshDbUser = async () => {
    if (authState.authUser) {
      try {
        const userResponse = await UserApi.getUserByUid(authState.authUser.uid);
        console.log('Refreshed user data:', userResponse.data);
        setAuthState((prevState) => {
          const newState = {
            ...prevState,
            dbUser: userResponse.data,
          };
          console.log('Updating auth state after refreshing user:', newState);
          saveAuthState(newState);
          return newState;
        });
      } catch (error) {
        console.error('Error refreshing user data:', error);
      }
    }
  };

  const setOtpVerifiedTimestamp = (timestamp: number | null) => {
    console.log('Setting OTP verified timestamp:', timestamp);
    setAuthState((prev) => {
      const newState = { ...prev, otpVerifiedTimestamp: timestamp };
      console.log('Updating auth state with new OTP timestamp:', newState);
      saveAuthState(newState);
      return newState;
    });
  };

  const clearAuthState = () => {
    console.log('Clearing auth state');
    const newState = {
      authUser: null,
      dbUser: null,
      isLoading: false,
      otpVerifiedTimestamp: null,
    };
    setAuthState(newState);
    saveAuthState(newState);
  };

  const isOtpVerified = authState.otpVerifiedTimestamp !== null && Date.now() < authState.otpVerifiedTimestamp;

  const contextValue: AuthContextType = {
    ...authState,
    setOtpVerifiedTimestamp,
    clearAuthState,
    refreshDbUser,
    isOtpVerified,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;