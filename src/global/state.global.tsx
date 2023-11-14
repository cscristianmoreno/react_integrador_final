import { Context, createContext, ReactElement, useContext, useState } from "react";
import React from "react";
import { functionModelStruct } from "../models/function.model";
import { globalModelStruct } from "../models/global.model";
import { accountModelStruct } from "../models/account.model";
import { userModelStruct } from "../models/user.model";

const GlobalContext: Context<globalModelStruct> = createContext<globalModelStruct>({
    modal: false,
    setModal: () => false,
    accountData: null,
    setAccountData: () => null,
    userData: null,
    setUserData: () => null,
});

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({children}: { children: React.ReactNode}): ReactElement => {

    const [modal, setModal] = useState<boolean>(false);
    const [accountData, setAccountData] = useState<accountModelStruct | null>(null);
    const [userData, setUserData] = useState<userModelStruct | null>(null);

    return (
        <GlobalContext.Provider value={{ modal, setModal, accountData, setAccountData, userData, setUserData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContextProvider: functionModelStruct<void, globalModelStruct> = (): globalModelStruct => useContext(GlobalContext);

export default GlobalContext; 