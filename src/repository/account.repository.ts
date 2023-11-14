
export interface AccountRepository {
    createAccount<T>(account: T): Promise<void>;

    getAccountById<T, S>(id: T): Promise<S>;
}