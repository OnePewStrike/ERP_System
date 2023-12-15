export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    type: string;
    phone: string;
    nationality: string;
}

export type Transactions = {
    id: number;
    email: string;
    card: string;
    amount: number;
    date: string;
    status: string;
};

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
        transactions: Transactions;
    };
};
