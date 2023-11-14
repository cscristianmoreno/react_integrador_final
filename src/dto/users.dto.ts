import { UserRepository } from "../repository/user.repository";
import request from "../services/request.service";

export class UsersDTO implements UserRepository {
    async getAllUsers<T>(): Promise<T> {
        const response: T = await request.get("/api/clientes");
        return response;
    }

    async createUser<T, S>(fields: T): Promise<S> {
        const result: S = await request.post("/api/clientes", fields);
        return result;
    }   

    async updateUser<T, S>(id: T, fields: S): Promise<void> {
        await request.put(`/api/clientes/${id}`, fields);
    }

    async deleteUser<T>(id: T): Promise<void> {
        console.log(id);
        await request.delete(`/api/clientes/${id}`);
    }

    async findUserById<T, S>(id: T): Promise<S> {
        const response: S = await request.get(`/api/clientes/${id}`);
        return response;
    }

    async findUserByEmail<T, S>(email: T): Promise<S> {
        const response: S = await request.post("/api/clientes/login", email);

        return response;
    }
}

export const UsersDTOClass: UsersDTO = new UsersDTO();