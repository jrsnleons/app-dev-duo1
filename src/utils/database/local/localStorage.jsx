export const setItemLocal = (key, value) => {
    window.localStorage.setItem(key, value);
}

export const getItemLocal = (key) => {
    const value = window.localStorage.getItem(key);

    if(value) {
        return JSON.parse(value);
    }
}