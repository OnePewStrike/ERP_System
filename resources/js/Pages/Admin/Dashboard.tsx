import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { Separator } from "@/Components/ui/separator";
import IntroBanner from "@/Components/Admins/Dashboard/IntroBanner";
import CardTable from "@/Components/Admins/Dashboard/CardTable";
import { PaymentsDataTable } from "@/Components/Admins/Dashboard/PaymentsDataTable";
import { TransactionsDataTable } from "@/Components/Admins/Dashboard/TransactionsDataTable";
import CardGroup from "@/Components/Admins/Dashboard/CardGroup";

export default function Dashboard({
    auth,
    cards,
    payments,
    transactions,
    totalUsers,
    totalTransactions,
}) {
    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="mt-16 p-4 space-y-2">
                <div className="border border-gray-300 rounded-md bg-white p-4 flex justify-between">
                    <span className="text-sm text-slate-500 font-semibold">
                        Admin Management | System Dashboard
                    </span>
                    <div className="flex space-x-2 text-gray-500 font-semibold">
                        <span className="text-sm">Accounts</span>
                        <Separator
                            className="w-[1.5px] bg-slate-300"
                            orientation="vertical"
                        />
                        <span className="text-sm">{auth.user.name}</span>
                    </div>
                </div>
                <div className="relative rounded-md  overflow-hidden space-y-2">
                    <div className="">
                        <CardGroup
                            totalUsers={totalUsers}
                            totalTransactions={totalTransactions}
                        />
                    </div>

                    <div className="relative">
                        <IntroBanner />
                    </div>

                    <div className="">
                        <CardTable data={cards} />
                    </div>

                    <div className="">
                        <PaymentsDataTable data={payments} />
                    </div>

                    <div className="">
                        <TransactionsDataTable data={transactions} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
