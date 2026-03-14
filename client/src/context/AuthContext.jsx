import React, { createContext, useState, useContext } from 'react';

// Create Context
const AuthContext = createContext();

// Create Provider Component
export const AuthProvider = ({ children }) => {
    // Mock login state for now
    const [user, setUser] = useState(null); // null means logged out

    const login = (userData) => {
        // Sample user data simulation
        setUser({
            name: userData?.name || 'Jane Doe',
            email: userData?.email || 'jane.doe@example.com',
            phone: userData?.phone || '+1 234 567 8900'
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook to use the context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
