import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import React, { useState } from "react";

import BarChart from "@/Components/Managers/Statistics/BarChart";
import UserData from "@/Components/Managers/Statistics/data/data";

export default function Dashboard({ auth }: PageProps) {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
            },
        ],
    });

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
                <div className="w-32">
                    <BarChart chartData={userData} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
