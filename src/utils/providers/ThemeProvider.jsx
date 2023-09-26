import { useState } from "react";
import { ThemeContext } from "../contexts";
import { lightTheme, darkTheme } from "../config/theme";

export default function ThemeProvider( { children } ) {
    const [theme, setTheme] = useState(darkTheme);
    const switchTheme = () => {
        setTheme((curr) => (curr === darkTheme ? lightTheme : darkTheme));
    }
  return (
    <ThemeContext.Provider value={{theme, switchTheme}}>
        { children }
    </ThemeContext.Provider>
  )
}