import Image from "@/Components/Custom/Image";
import { Button } from "@/Components/ui/button";
import React from "react";
import AddDialog from "./dialogs/AddDialog";

export type Card = {
    id: number;
    name: string;
    image_path: string;
    flag_path: string;
    color: string;
};

export default function CardTable({ data }) {
    return (
        <div className="h-fit py-4 p-2 space-y-2">
            <div className="flex justify-between">
                <header className="text-xl text-slate-500 font-semibold">
                    Cards
                </header>
                <AddDialog />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-8 p-4">
                {data.map((card) => (
                    <div
                        key={card.id}
                        className={`shadow-md rounded-md relative py-8 px-4 flex flex-col items-center justify-center gap-4 ${card.color} hover:transform scale-110 ease-in duration-300`}
                    >
                        <div className="absolute right-0 top-0">
                            <Image src={card.flag_path} alt="Flag" width={25} />
                        </div>
                        <Image
                            src={card.image_path}
                            alt={card.name}
                            width={25}
                        />
                        <span className="text-xs font-semibold text-white">
                            {card.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
