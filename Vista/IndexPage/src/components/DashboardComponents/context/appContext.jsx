import React, { createContext, useContext, useState } from "react";


const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context === undefined) {
        throw new Error('App context must be within AappContextProvider!')
    }

    return context;
}

const AppContextProvider = ({ children }) => {
    // Define the state or any context values here
    const [liked, setLiked] = useState([])

    const addFavorite = () => {
        
    }

    const removeFavorite = () => {

    }

    return (
        <AppContext.Provider value={{liked,addFavorite,removeFavorite}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider

