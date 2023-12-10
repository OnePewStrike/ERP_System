import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import React, { useState } from "react";
import { Separator } from "@/Components/ui/separator";
import Chat from "@/Components/Managers/Trade/Chat";

// import BarChart from "@/Components/Managers/Statistics/BarChart";
// import UserData from "@/Components/Managers/Statistics/data/data";

export default function Trade({ auth }: PageProps) {
    // const [userData, setUserData] = useState({
    //     labels: UserData.map((data) => data.year),
    //     datasets: [
    //         {
    //             label: "Users Gained",
    //             data: UserData.map((data) => data.userGain),
    //         },
    //     ],
    // });

    return (
        <AuthenticatedLayout
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
                        User Management Trade
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
                <div className="border border-gray-300 rounded-md bg-white">
                    <Chat name={auth.user.name} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
