import React, { useState } from 'react'
import { createContext } from 'react'

interface initContext {
    authData: string
    setAuthData: Function
}

export const auth = createContext<initContext>({
    authData: "",
    setAuthData: () => {}
});





const AuthMiddleware = (props: any) => {

    const [authData, setAuthData] = useState("");

    return (
        <auth.Provider value={{
            authData,
            setAuthData
        }}>

            {props.children}
        </auth.Provider>
    )
}

export default AuthMiddleware
