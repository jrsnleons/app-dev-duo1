import {useEffect, useState} from 'react';
import { setItemLocal, getItemLocal } from '../database/local';

export const useTheme = () => {
    const themes = getItemLocal('all-themes');
    const [theme, setTheme] = useState(themes.data.dark);
    const [themeLoaded, setThemeLoaded] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const setMode = mode => {
        setItemLocal('theme', mode);
        setTheme(mode);
    }

    useEffect(() => {
        const localTheme = getItemLocal('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data.dark);
        setThemeLoaded(true);
    }, [setTheme, setThemeLoaded, themes.data.dark]);

    return {theme, themeLoaded}
}