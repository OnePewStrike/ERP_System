const transactionData: Transactions[] = [
    {
        id: 1,
        name: "United States Bank",
        type: "Credit",
        value: "$100",
        return: "#18000",
        status: "Completed",
        date: "14/01/2019",
    },
    {
        id: 2,
        name: "Global Finance",
        type: "Debit",
        value: "$75",
        return: "#15000",
        status: "Failed",
        date: "22/05/2020",
    },
    {
        id: 3,
        name: "International Credit Union",
        type: "Credit",
        value: "$200",
        return: "#22000",
        status: "In Progress",
        date: "10/09/2021",
    },
    {
        id: 4,
        name: "National Savings",
        type: "Debit",
        value: "$120",
        return: "#19000",
        status: "Completed",
        date: "05/03/2022",
    },
    {
        id: 5,
        name: "Global Investments",
        type: "Credit",
        value: "$300",
        return: "#25000",
        status: "Failed",
        date: "18/11/2022",
    },
    {
        id: 6,
        name: "Regional Bank",
        type: "Debit",
        value: "$50",
        return: "#8000",
        status: "In Progress",
        date: "29/07/2023",
    },
    {
        id: 7,
        name: "City Credit Corp",
        type: "Credit",
        value: "$180",
        return: "#28000",
        status: "Completed",
        date: "02/04/2019",
    },
    {
        id: 8,
        name: "International Finance Group",
        type: "Debit",
        value: "$90",
        return: "#12000",
        status: "Failed",
        date: "14/08/2020",
    },
    {
        id: 9,
        name: "Global Trust Bank",
        type: "Credit",
        value: "$250",
        return: "#20000",
        status: "In Progress",
        date: "07/12/2021",
    },
    {
        id: 10,
        name: "Worldwide Credit Union",
        type: "Debit",
        value: "$160",
        return: "#21000",
        status: "Completed",
        date: "30/06/2022",
    },
];

export type Transactions = {
    id: number;
    name: string;
    type: string;
    value: string;
    return: string;
    status: string;
    date: string;
};
