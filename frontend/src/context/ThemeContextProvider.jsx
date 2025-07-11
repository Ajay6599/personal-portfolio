import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [themeMode, setThemeMode] = useState("light");

    const themeModeHandler = () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light')
    };

    const [themeColor, setThemeColor] = useState("#158A87");

    let bgThemeColor = ['rgba(21, 138, 135, 0.1)', 'rgba(85, 61, 166, 0.1)', 'rgba(184, 65, 71, 0.1)', 'rgba(159, 146, 43, 0.1)', 'rgba(182, 85, 35, 0.1)'];

    const [bgTheme, setBgTheme] = useState("rgba(21, 138, 135, 0.1)");

    const onThemeColor = (color, idx) => {
        setBgTheme(bgThemeColor.filter((_, bgIndex) => bgIndex === idx ));
        setThemeColor(color);
    };

    return (
        <ThemeContext.Provider value={{bgTheme, onThemeColor, themeColor, themeMode, themeModeHandler}}>
            {children}
        </ThemeContext.Provider>
    );
};