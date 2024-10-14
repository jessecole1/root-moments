import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const backEnd = "https://root-moments.onrender.com";
    // const backEnd = "http://localhost:8000";

    const checkIfLoggedIn = async () => {
        console.log("running checkIfLoggedIn");
        axios.get(`${backEnd}/admin`, {withCredentials: true})
        .then((res) => {
            console.log("yes, admin");
            setAdminLoggedIn(res.data.loggedInStatus);
            console.log(JSON.stringify(res.data));
            setAdmin(res.data.admin);
        })
        .catch((err) => {
            setAdminLoggedIn(false);
            setAdmin(null);
        })
    }

    const logout = () => {
        axios.post(`${backEnd}/admin/logout`, {}, {withCredentials: true})
            .then(() => {
                setAdmin(null);
                setAdminLoggedIn(false);
            })
            .catch((err) => {
                console.log("Error logging out", err);
            });
    };

    // const checkIfLoggedIn = async () => {
    //     await setLoading(true);
    //     await setError(null);
    //     await axios.get(`${backEnd}/admin`, {}, {withCredentials: true})
    //         .then((res) => {
    //             if (res.data.loggedInStatus) {
    //                 setAdminLoggedIn(true);
    //                 setAdmin(res.data.admin);
    //               } else {
    //                 setAdminLoggedIn(false);
    //                 setAdmin(null);
    //               }
    //         })
    //         .catch((err) => {
    //             console.log("Error checking authentication", err);
    //             setError("Failed to authenticate");
    //             setAdmin(null);
    //             setAdminLoggedIn(false);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // };



    useEffect(() => {
        console.log("checking this");
        checkIfLoggedIn();
        console.log("log status: " + adminLoggedIn);
    }, []);

    return (
        <AppContext.Provider value={{
            admin, setAdmin, adminLoggedIn, setAdminLoggedIn,
            checkIfLoggedIn, loading, error, logout, backEnd, setLoading
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

export function useAppContext() {
    return useContext(AppContext);
}