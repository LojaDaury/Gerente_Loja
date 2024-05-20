"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebaseConfig';
import { usePathname, useRouter } from 'next/navigation';

interface DataUserProviderProps {
    children: ReactNode;
 }

// Definindo o tipo para os dados do contexto
interface DataUserContextData {
  userName: string;
}

// Criando o contexto
export const DataUserContext = createContext<DataUserContextData>(
    {} as DataUserContextData
);

// Criando um componente de provedor para encapsular outros componentes
export function DataUserProvider ({ children }: DataUserProviderProps) {
    const router = useRouter()
  
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                if (user.displayName) { setUserName(user.displayName) }
            } else {
                if ( usePathname() !== '/login') {
                    router.push('/login');
                }
            }
        });

        return () => unsubscribe();
    }, [router]); 

    return (
        <DataUserContext.Provider value={{userName}}>
            {children}
        </DataUserContext.Provider>
    );
};