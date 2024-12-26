import React, { createContext, useEffect, useState } from "react";
import { LANGUAGE } from "../tools/constants";
import { flagImages } from "../languages/index";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("tr");
    const [selectedFlag, setSelectedFlag] = useState(flagImages["tr"]);

    useEffect(() => {
        const storedLanguage = localStorage.getItem(LANGUAGE);
        if (storedLanguage) {
            setSelectedLanguage(storedLanguage);
            setSelectedFlag(flagImages[storedLanguage]);
        } else {
            localStorage.setItem(LANGUAGE, "tr");
        }
    }, []);

    const changeLanguage = (language) => {
        localStorage.setItem(LANGUAGE, language);
        setSelectedLanguage(language);
        setSelectedFlag(flagImages[language]);
    };

    return (
        <LanguageContext.Provider
            value={{ selectedLanguage, selectedFlag, changeLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
