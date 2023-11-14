
export interface UserRepository {
    getAllUsers<T>(): Promise<T>;

    createUser<T, S>(user: T): Promise<S>;

    updateUser<T, S>(user: T, fields: S): Promise<void>;

    deleteUser<T>(id: T): Promise<void>;

    findUserById<T, S>(id: T): Promise<S>;

    findUserByEmail<T, S>(id: T): Promise<S>;
}