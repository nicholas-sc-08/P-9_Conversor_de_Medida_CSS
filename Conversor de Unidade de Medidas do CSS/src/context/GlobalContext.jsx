import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [lista_de_cadastrantes, set_lista_de_cadastrantes] = useState([]);
    

    return (
        <GlobalContext.Provider value={{

           lista_de_cadastrantes,
           set_lista_de_cadastrantes
        }}>
            {children}
        </GlobalContext.Provider>
    )
}