import { createContext, useContext, useState } from "react";

const googleContext = createContext();

const AuthProvider = ({children}) => {

    const [GoogleAuth,setAuth] = useState({
        token : null
    })

    return(
        <googleContext.Provider value={[GoogleAuth,setAuth]}>
            {children}
        </googleContext.Provider>
    )

}

const useAuth = () => {
    return useContext(googleContext);
}

export {useAuth,AuthProvider}