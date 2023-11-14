import { AccountRepository } from "../repository/account.repository";
import request from "../services/request.service";

export class AccountsDTO implements AccountRepository {
    async createAccount<T>(account: T): Promise<void> {
        
        await request.post("/api/cuentas", account);
    }

    async getAccountById<T, S>(id: T): Promise<S> {
        const response: S = await request.get(`/api/cuentas/${id}`);

        return response;
    }
}

export const AccountsDTOClass: AccountsDTO = new AccountsDTO();