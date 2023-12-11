import Image from "@/Components/Custom/Image";
import React from "react";

const data: Card[] = [
    {
        id: 1,
        name: "Total Amount Users",
        img_path: "/images/total_amount_earned.png",
        value: 22.8,
    },
    {
        id: 2,
        name: "Total Number of Transactions",
        img_path: "/images/total_num_of_trans.png",
        value: 22.8,
    },
];

export type Card = {
    id: number;
    name: string;
    img_path: string;
    value: number;
};

export default function CardGroup() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.map((card) => (
                <div
                    className="bg-white py-2 px-32 flex justify-between items-center border border-slate-300 shadow-md rounded-md hover:transform hover:scale-105 ease-in duration-300"
                    key={card.id}
                >
                    <Image src={card.img_path} alt="" width={155} />
                    <div className="flex flex-col items-between justify-center gap-2">
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
