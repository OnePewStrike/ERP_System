import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import PrimaryButton from "@/Components/Custom/PrimaryButton";

export default function SidebarNav({ name }: { name?: string }) {
    const initials = name ? name.charAt(0).toUpperCase() : "";

    return (
        <div className="px-1 py-3 flex flex-col space-between">
            <div className="grid template-columns-1 items-center px-3 space-y-2">
                <div className="my-3 flex gap-2">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gray-300">
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                    <div className="">
                        <header className="block font-semibold text-slate-500">
                            {name}
                        </header>
                        <span className="block text-xs">Online</span>
                    </div>
                </div>
                <div className="my-3 flex gap-2">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gray-300">
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                    <div className="">
                        <header className="block font-semibold text-slate-500">
                            {name}
                        </header>
                        <span className="block text-xs">Online</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-5 left-12 grid justify-center items-center">
                <PrimaryButton className="w-32 justify-center bg-gradient-to-b from-green-500 to-blue-700 rounded-3xl py-3">
                    New Trade?
                </PrimaryButton>
            </div>
        </div>
    );
}
