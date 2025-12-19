<<<<<<< HEAD
// Archivo: ../../contexts/UserContext.jsx

import React, { createContext, useState, useEffect } from 'react';
=======
import { createContext, useState } from 'react';
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
<<<<<<< HEAD
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [email, setEmail] = useState(localStorage.getItem('email') || null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState(null);

    const logout = () => {
        setToken(null);
        setEmail(null);
        setProfile(null); 
        setAuthError(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    };

    const fetchProfile = async (current_token = token) => {
        if (!current_token) {
            setProfile(null);
            return;
        }

        try {
            const response = await fetch('/api/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${current_token}`,
                }
            });

            if (response.ok) {
                const data = await response.json();
                setProfile(data); 
                setEmail(data.email); 
                return { success: true, profile: data };
            } else {
                if (response.status === 401 || response.status === 403) {
                    logout(); 
                }
                console.error('Error al obtener perfil:', response.statusText);
                return { success: false };
            }
        } catch (error) {
            console.error('Error de red al obtener perfil:', error);
            return { success: false };
        }
    };
    
    const login = async (userEmail, password) => {
        setLoading(true);
        setAuthError(null);
        
        const payload = { email: userEmail, password };

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                
                setToken(data.token);
                setEmail(data.email); 
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', data.email);
                
                await fetchProfile(data.token); 
                
                setLoading(false);
                return { success: true };
            } else {
                let errorMessage = `Error ${response.status}: El servidor rechazó la petición.`;
                
                try {
                    const errorData = await response.json(); 
                    errorMessage = errorData.error || errorData.message || errorMessage;
                } catch (e) {
                    const errorBody = await response.text();
                    errorMessage = errorBody || errorMessage;
                }
                
                setAuthError(errorMessage);
                setLoading(false);
                throw new Error(errorMessage);
            }
        } catch (error) {
            const finalError = error.message; 
            setAuthError(finalError);
            setLoading(false);
            throw new Error(finalError);
        }
    };
    
    const register = async (userEmail, password) => { 
        setLoading(true);
        setAuthError(null); 

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userEmail, password: password }),
            });

            const data = await response.json();

            if (response.ok) {
                const token = data.token;
                const email = data.email || userEmail; 

                setToken(token);
                setEmail(email);
                localStorage.setItem('token', token);
                localStorage.setItem('email', email);

                await fetchProfile(token); 
                
                return { success: true };

            } else {
                const errorMessage = data.message || data.error || 'Error desconocido al registrar.';
                setAuthError(errorMessage);
                return { success: false, message: errorMessage };
            }

        } catch (error) {
            const errorMessage = 'Error de conexión al servidor de registro.';
            setAuthError(errorMessage);
            return { success: false, message: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            fetchProfile(token);
        }
    }, [token]); 

    const contextValue = {
        token,
        email,
        profile,
        isAuthenticated: !!token,
        loading,
        authError,
        login,
        register,
        logout,
        fetchProfile, 
        setAuthError, 
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
=======
    
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
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
