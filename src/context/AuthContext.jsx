import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    function login(email, password) {
        if (email === 'example@gmail.com' && password === '1234') {
            const fakeUser = { email, password };
            setUser(fakeUser);
            localStorage.setItem('user', JSON.stringify(fakeUser));
            return {success: true}
        } else {
            return {success: false, message: "Email or password in incorrect!"}
        }
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('user');
    }

    const value = {
        user,
        isAuthenticated: !!user,
        loading,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}