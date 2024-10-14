import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const checkIfLoggedIn = () => {
        setLoading(true);
        setError(null);
        axios.get("https://root-moments.onrender.com/admin", {withCredentials: true})
            .then((res) => {
                if (res.data.loggedInStatus) {
                    setAdminLoggedIn(true);
                    setAdmin(res.data.admin);
                  } else {
                    setAdminLoggedIn(false);
                    setAdmin(null);
                  }
                // setAdmin(res.data.admin);
                // setAdminLoggedIn(res.data.loggedInStatus);
            })
            .catch((err) => {
                console.log("Error checking authentication", err);
                setError("Failed to authenticate");
                setAdmin(null);
                setAdminLoggedIn(false);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const logout = () => {
        axios.post("https://root-moments.onrender.com/admin/logout", {}, {withCredentials: true})
            .then(() => {
                setAdmin(null);
                setAdminLoggedIn(false);
            })
            .catch((err) => {
                console.log("Error logging out", err);
            });
    };

    useEffect(() => {
        console.log("checking this");
        checkIfLoggedIn();
        console.log("log status: " + adminLoggedIn);
    }, []);

    return (
        <AppContext.Provider value={{
            admin, setAdmin, adminLoggedIn, setAdminLoggedIn,
            checkIfLoggedIn, loading, error, logout
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

export function useAppContext() {
    return useContext(AppContext);
}