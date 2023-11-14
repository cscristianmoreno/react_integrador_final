/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from "axios";
import { userModelStruct } from "../models/user.model";
import { UsersDTOClass } from "../dto/users.dto";
import { accountModelStruct } from "../models/account.model";
import { AccountsUtilClass } from "../utils/accounts.util";
import { AccountsDTOClass } from "../dto/accounts.dto";

interface UserAIModelStruct {
    name: {
        title: string,
        first: string,
        last: string
    },
    email: string,
    phone: string,
    cell: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
}

interface fetchModelStruct {
    results: UserAIModelStruct[]
}

export class UsersAI {

    constructor() {
        this.generateUsers();
    }

    async generateUsers(): Promise<void> {

            const result: AxiosResponse<fetchModelStruct> = await axios.get<fetchModelStruct>("https://randomuser.me/api/?results=10", { 
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const users: UserAIModelStruct[] = result.data.results;

            
            let userDni: string = "";
            let num: number = 0;
            
            
            users.forEach(async (str: UserAIModelStruct) => {
                num = 0;
                userDni = "";

                while (num < 8) {
                    userDni += Math.floor(Math.random() * 9);
                    num++;
                }

                const user: userModelStruct = {
                    nombre: str.name.first,
                    apellido: str.name.last,
                    dni: userDni,
                    email: str.email,
                    telefono: str.cell,
                    estadoCuenta: "ACTIVA",
                    avatar: str.picture.medium
                };

                const id: AxiosResponse<number> = await UsersDTOClass.createUser<unknown, AxiosResponse<number>>(user);

                const account: accountModelStruct = {
                    numeroCuenta: AccountsUtilClass.accountNumber(),
                    saldo: AccountsUtilClass.accountMoney(),
                    tipoCuenta: "AHORRO",
                    estadoCuenta: "ACTIVA",
                    cliente: id.data as number
                };

                await AccountsDTOClass.createAccount(account);
            });
    }
}