import React from "react";
import MessageArea from "./MessageArea";
import SidebarProfile from "./SidebarProfile";
import SidebarNav from "./SidebarNav";

export default function Chat({ name }: { name?: string }) {
    return (
        <div className="w-full flex h-[calc(100vh-10em)]">
            <div className="relative flex-none w-56 h-full border-r border-gray-300">
                <SidebarProfile name={name} />
                <SidebarNav name={name} />
            </div>
            <MessageArea />
        </div>
    );
}
