import { createContext, ReactNode, useContext, useState } from "react";
import { Tenant } from "../types/Tenant"

type appContextType = {
    tenant: Tenant | null;
    setTenant: (tenant: Tenant) => void;
}

const defaultValues: appContextType = {
    tenant: null,
    setTenant: (tenant: Tenant) => {}
}

const appContext = createContext<appContextType>(defaultValues);

export const useAppContext = () => useContext(appContext);

type Props = {
    children: ReactNode
}
export const AppContextProvider = ({ children }: Props) => {
    const [tenant, setTenant] = useState<Tenant | null>(null)

    return (
        <appContext.Provider value={{ tenant, setTenant}}>
            {children}
        </appContext.Provider>
    )
}