import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from 'firebase/auth';
import { UserDB, CreditDB } from '../types/types';  // Import CreditDB type
import { auth } from '../config/firebase';
import { UserApi } from '../services/user';
import { CreditApi } from '../services/credit';  // Import CreditApi

interface AuthState {
  authUser: User | null;
  dbUser: UserDB | null;
  creditData: CreditDB | null;  // Add creditData to store the actual credit details
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
    creditData: null, // Default to null when loading
    isLoading: true,
    otpVerifiedTimestamp: null,
  };
};

const saveAuthState = (state: AuthState) => {
  const stateToSave = {
    ...state,
    authUser: state.authUser ? { uid: state.authUser.uid } : null,
  };
  localStorage.setItem('authState', JSON.stringify(stateToSave));
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(loadAuthState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userResponse = await UserApi.getUserByUid(firebaseUser.uid);
          let creditData: CreditDB | null = null;

          // Check if the user has an ongoing credit and store the credit data
          try {
            const creditResponse = await CreditApi.getActiveCredit(firebaseUser.uid);
            if (creditResponse) {
              creditData = creditResponse.data;
            }
          } catch (creditError) {
            console.error('Error checking ongoing credit:', creditError);
          }

          setAuthState((prev) => {
            const newState = {
              ...prev,
              authUser: firebaseUser,
              dbUser: userResponse.data,
              creditData, // Update the state with the credit data
              isLoading: false,
              otpVerifiedTimestamp: prev.otpVerifiedTimestamp,
            };
            saveAuthState(newState);
            return newState;
          });
        } catch (error) {
          setAuthState((prev) => {
            const newState = {
              ...prev,
              authUser: firebaseUser,
              dbUser: null,
              creditData: null,
              isLoading: false,
              otpVerifiedTimestamp: prev.otpVerifiedTimestamp,
            };
            saveAuthState(newState);
            return newState;
          });
        }
      } else {
        const newState = {
          authUser: null,
          dbUser: null,
          creditData: null,
          isLoading: false,
          otpVerifiedTimestamp: null,
        };
        setAuthState(newState);
        saveAuthState(newState);
      }
    });

    return () => unsubscribe();
  }, []);

  // Function to set OTP verified timestamp
  const setOtpVerifiedTimestamp = (timestamp: number | null) => {
    setAuthState((prev) => {
      const newState = { ...prev, otpVerifiedTimestamp: timestamp };
      saveAuthState(newState);
      return newState;
    });
  };

  // Function to clear the auth state
  const clearAuthState = () => {
    const newState = {
      authUser: null,
      dbUser: null,
      creditData: null,
      isLoading: false,
      otpVerifiedTimestamp: null,
    };
    setAuthState(newState);
    saveAuthState(newState);
  };

  // Function to refresh the DB user information and credit data
  const refreshDbUser = async () => {
    if (authState.authUser) {
      try {
        const userResponse = await UserApi.getUserByUid(authState.authUser.uid);

        let creditData: CreditDB | null = null;
        // Re-check and update credit data
        try {
          const creditResponse = await CreditApi.getActiveCredit(authState.authUser.uid);
          creditData = creditResponse.data;
        } catch (creditError) {
          console.error('Error checking ongoing credit during refresh:', creditError);
        }

        setAuthState((prevState) => {
          const newState = {
            ...prevState,
            dbUser: userResponse.data,
            creditData, // Update the state with the credit data
          };
          saveAuthState(newState);
          return newState;
        });
      } catch (error) {
        console.error('Error refreshing user data:', error);
      }
    }
  };

  const contextValue: AuthContextType = {
    ...authState,
    setOtpVerifiedTimestamp,
    clearAuthState,
    refreshDbUser,
    isOtpVerified: authState.otpVerifiedTimestamp !== null && Date.now() < authState.otpVerifiedTimestamp,
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