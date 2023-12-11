import React from "react";
import { Button } from "@/Components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

export default function UserDetails({ auth }: { auth?: any }) {
    const initials = auth.user.name
        ? auth.user.name.charAt(0).toUpperCase()
        : "";
    return (
        <>
            <Avatar className="h-[10em] w-[10em]">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gray-300 text-6xl">
                    {initials}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center items-center space-y-2">
                <span className="text-xl text-slate-500 font-semibold">
                    {auth.user.name}
                </span>
                <p className="font-medium text-slate-500">{auth.user.email}</p>
            </div>
            <div className="grid grid-cols-2 justify-center items-center space-x-2">
                <Button variant="destructive" className="rounded-3xl">
                    Down
                </Button>
                <Button
                    variant="default"
                    className="bg-gradient-to-b from-green-500 to-blue-700 rounded-3xl"
                >
                    Block User
                </Button>
            </div>
        </>
    );
}
