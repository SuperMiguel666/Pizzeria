import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const loggedOutFlag = sessionStorage.getItem('isLoggedOut') === 'true';
    const initialToken = !loggedOutFlag;
    
    const [token, setToken] = useState(initialToken); 

    const logout = () => {
        setToken(false); 
        sessionStorage.setItem('isLoggedOut', 'true');
    }

    const login = () => {
        setToken(true); 
        sessionStorage.removeItem('isLoggedOut');
    }

    return (
        <UserContext.Provider value={{ token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}