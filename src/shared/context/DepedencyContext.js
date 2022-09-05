import { createContext } from "react";

export const DepedencyContext = createContext({});

export const DepedencyProvider = ({children, service}) => {
    return (
        <DepedencyContext.Provider value={service}>
            {children}
        </DepedencyContext.Provider>
    )
}

