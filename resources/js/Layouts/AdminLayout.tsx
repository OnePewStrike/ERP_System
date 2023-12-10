import { useState, PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import AuthenticatedNavbar from "@/Layouts/inc/AuthenticatedNavbar";
import AdminSidebar from "./inc/AdminSidebar";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="relative bg-gray-100">
            <AuthenticatedNavbar user={user} />

            <div className="flex min-h-screen">
                <AdminSidebar />
                <div className="flex-1 p">
                    {/* {header && (
                        <header className="bg-white shadow">
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                {header}
                            </div>
                        </header>
                    )} */}

                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}
