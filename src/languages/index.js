import { uz } from "./uz.js";
import { tr } from "./tr.js";
import { LANGUAGE } from "../tools/constants";

export const flagImages = {
    uz: "/img/flag-uz.svg",
    tr: "/img/flag-tr.png",
};

export const getLanguage = () => {
    const storedLanguage = localStorage.getItem(LANGUAGE);
    return storedLanguage ? storedLanguage : "tr";
};

export const getText = (word) => {
    const language = getLanguage();
    return language === "tr"
        ? tr[word] : uz[word];
};
