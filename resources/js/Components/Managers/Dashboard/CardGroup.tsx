import Image from "@/Components/Custom/Image";
import React from "react";

export type Card = {
    id: number;
    name: string;
    img_path: string;
    value: number;
};

export default function CardGroup({ totalUsers, totalTransactions }) {
    const data: Card[] = [
        {
            id: 1,
            name: "Total Amount Users",
            img_path: "/images/total_circle.png",
            value: totalUsers,
        },
        {
            id: 2,
            name: "Total Number of Transactions",
            img_path: "/images/total_circle.png",
            value: totalTransactions,
        },
    ];

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.map((card) => (
                <div
                    className="bg-white py-2 px-40 flex justify-between items-center border border-slate-300 shadow-md rounded-md hover:transform hover:scale-105 ease-in duration-300"
                    key={card.id}
                >
                    <div className="flex-1 relative">
                        <Image
                            src={card.img_path}
                            alt=""
                            width={155}
                            className="w-full h-full object-cover rounded-full"
                        />
                        <div className="absolute top-16 left-16 transform -translate-x-[70%] -translate-y-[30%] text-2xl text-amber-900">
                            {card.value}
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-between justify-center gap-2">
                        <span className="text-sm font-semibold text-slate-500">
                            {card.name}
                        </span>
                        <span className="text-sm font-semi-bold text-green-500">
                            {card.value}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
