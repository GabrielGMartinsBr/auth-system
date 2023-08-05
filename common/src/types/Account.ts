export interface UserAccount {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
}

export type UserAccountSummary = Omit<UserAccount, 'password'>;