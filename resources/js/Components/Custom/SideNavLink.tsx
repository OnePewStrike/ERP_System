import React, { ReactNode } from "react";
import { Link } from "@inertiajs/react";

interface SidebarNavLinkProps {
    active?: boolean;
    className?: string;
    href?: string;
    children: ReactNode;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({
    active = false,
    className = "",
    href = "",
    children,
    ...props
}: SidebarNavLinkProps) => {
    return (
        <Link
            href={href}
            className={
                `text-lg w-11/12 p-4 rounded-r-3xl flex text-center items-center hover:bg-gradient-to-b from-green-500 to-blue-700 hover:text-white mr-10 text-sm gap-3 ` +
                (active ? "bg-gradient-to-b " : " ") +
                className
            }
            {...props}
        >
            {children}
        </Link>
    );
};

export default SidebarNavLink;
