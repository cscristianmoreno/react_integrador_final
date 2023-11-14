import { Dispatch, SetStateAction } from "react";
import { accountModelStruct } from "./account.model";
import { userModelStruct } from "./user.model";

export interface globalModelStruct {
    modal: boolean,
    setModal: Dispatch<SetStateAction<boolean>>,
    accountData: accountModelStruct | null,
    setAccountData: Dispatch<SetStateAction<accountModelStruct | null>>,
    userData: userModelStruct | null,
    setUserData: Dispatch<SetStateAction<userModelStruct | null>>,
}