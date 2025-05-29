import { createContext, useContext, useState, useEffect } from "react";


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [lang, setLang] = useState(() => {
        const savedLang = localStorage.getItem('language');
        return savedLang || "en";
    });

    useEffect(() => {
        localStorage.setItem('language', lang);
    }, [lang]);
    
    const values = {
        lang,
        setLang
    };

    return (
        <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };