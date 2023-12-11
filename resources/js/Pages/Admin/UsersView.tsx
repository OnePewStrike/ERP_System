import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Separator } from "@/Components/ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import CardGroup from "@/Components/Admins/UsersView/CardGroup";
import UserDetails from "@/Components/Admins/UsersView/UserDetails";

export default function UsersView({ auth }: PageProps) {
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
                        Admin Management Users Details
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
                <div className="border border-gray-300 rounded-md px-3 pb-6 bg-white">
                    <div className="flex flex-col justify-center items-center space-y-2 p-8">
                        <UserDetails auth={auth} />
                    </div>
                    <div className="mx-48">
                        <CardGroup />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
