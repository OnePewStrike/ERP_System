import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { Separator } from "@/Components/ui/separator";
import CardTable from "@/Components/Admins/Cards/CardTable";
import React, { useState } from "react";
import { render } from "react-dom";
import { ChartConfiguration } from "chart.js";
import ChartComponent from "@/Components/Admins/Statistics/ChartComponent";

const chartTypes = ["bar", "doughnut", "bubble"];
const chartConfig: ChartConfiguration = {
    type: chartTypes[0],
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "# of Sales",
                data: Array.from(
                    { length: 12 },
                    () => Math.floor(Math.random() * (60 - 10 + 1)) + 10
                ),
                backgroundColor: "rgba(11, 156, 49, 0.8)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
            },
        ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
};

export default function Statistics({ auth }) {
    const [selectedIndex, setIndex] = useState(0);

    const radioButtons = chartTypes.map((chartType, index) => (
        <label style={{ marginRight: "10px", textTransform: "capitalize" }}>
            <input
                type="radio"
                checked={index === selectedIndex}
                onChange={() => {
                    setIndex(index);
                }}
            />
            {`${chartType} Chart`}
        </label>
    ));

    const chartType = chartTypes[selectedIndex];

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
                        Admin Management Cards
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
                <div className="h-full border border-gray-300 rounded-md px-3 bg-white">
                    <ChartComponent
                        ChartConfig={{
                            ...chartConfig,
                            type: chartType,
                        }}
                    />

                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {radioButtons}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
