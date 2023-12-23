import { createContext, useContext } from "react";

const DatabaseContext = createContext();

export const DatabaseContextProvider = ({children}) => {
    return (
        <DatabaseContext.Provider value={{}}>
            {children}
        </DatabaseContext.Provider>
    )
}

export const Database = () => {
    return useContext(DatabaseContext);
}