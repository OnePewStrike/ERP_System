import Image from "@/Components/Custom/Image";
import { Button } from "@/Components/ui/button";
import React from "react";

const data: Card[] = [
    {
        id: 1,
        name: "Amazon Card",
        image_path: "/images/cards/amazon.png",
        flag_path: "/images/flags/usa.png",
        color: "bg-gradient-to-b from-blue-300 to-teal-400",
    },
    {
        id: 2,
        name: "iTunes Card",
        image_path: "/images/cards/itunes.png",
        flag_path: "/images/flags/canada.png",
        color: "bg-gradient-to-b from-indigo-500 to-violet-700",
    },
    {
        id: 3,
        name: "Google Play Card",
        image_path: "/images/cards/google_play.png",
        flag_path: "/images/flags/australia.png",
        color: "bg-slate-700",
    },
    {
        id: 4,
        name: "Steam Card",
        image_path: "/images/cards/steam.png",
        flag_path: "/images/flags/usa.png",
        color: "bg-gradient-to-b from-indigo-500 to-violet-400",
    },
    {
        id: 5,
        name: "Other Cards",
        image_path: "/images/cards/others.png",
        flag_path: "/images/flags/canada.png",
        color: "bg-slate-700",
    },
    {
        id: 6,
        name: "Steam Card",
        image_path: "/images/cards/steam.png",
        flag_path: "/images/flags/australia.png",
        color: "bg-gradient-to-b from-indigo-500 to-violet-400",
    },
    {
        id: 7,
        name: "Other Cards",
        image_path: "/images/cards/others.png",
        flag_path: "/images/flags/usa.png",
        color: "bg-slate-700",
    },
    {
        id: 8,
        name: "iTunes Card",
        image_path: "/images/cards/itunes.png",
        flag_path: "/images/flags/usa.png",
        color: "bg-gradient-to-b from-indigo-500 to-violet-700",
    },
    {
        id: 9,
        name: "Google Play Card",
        image_path: "/images/cards/google_play.png",
        flag_path: "/images/flags/canada.png",
        color: "bg-slate-700",
    },
    {
        id: 10,
        name: "Amazon Card",
        image_path: "/images/cards/amazon.png",
        flag_path: "/images/flags/canada.png",
        color: "bg-gradient-to-b from-blue-300 to-teal-400",
    },
    {
        id: 11,
        name: "iTunes Card",
        image_path: "/images/cards/itunes.png",
        flag_path: "/images/flags/canada.png",
        color: "bg-gradient-to-b from-indigo-500 to-violet-700",
    },
];

export type Card = {
    id: number;
    name: string;
    image_path: string;
    flag_path: string;
    color: string;
};

export default function CardTable() {
    return (
        <div className="h-fit py-4 p-2 space-y-2">
            <div className="flex justify-between">
                <header className="text-xl text-slate-500 font-semibold">
                    Cards
                </header>
                <Button
                    variant="ghost"
                    className="justify-center bg-gradient-to-b from-green-500 to-blue-700"
                >
                    Add Card
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
                {data.map((card) => (
                    <div
                        key={card.id}
                        className={`shadow-md rounded-md relative py-8 px-4 flex flex-col items-center justify-center gap-4 ${card.color}`}
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
