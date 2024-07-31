import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [Result, setResult] = useState(20);
    const [MaxNote, setMaxNote] = useState(20);
    const [Config, setConfig] = useState({
        Decimals: false,
        MaxNote: 20
    })

    return (
        <AppContext.Provider value={{
            Result, setResult,
            MaxNote, setMaxNote,
            Config, setConfig
        }}>
            {children}
        </AppContext.Provider>
    );
}