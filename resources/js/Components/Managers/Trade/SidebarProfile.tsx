import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

export default function SidebarProfile({ name }: { name?: string }) {
    const initials = name ? name.charAt(0).toUpperCase() : "";

    return (
        <div className="px-1 py-3 flex border-b border-slate-300">
            <div className="flex items-center gap-2 px-3">
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
    );
}
