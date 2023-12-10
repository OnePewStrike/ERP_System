import React from "react";
import SideNavLink from "@/Components/Custom/SideNavLink";

import { GiEyeTarget } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { PiCardsDuotone } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";
import { MdAutoGraph } from "react-icons/md";

const nav_components = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: <GiEyeTarget />,
    },
    {
        title: "User",
        href: "/users",
        icon: <FaUserCircle />,
    },
    {
        title: "Cards",
        href: "/cards",
        icon: <PiCardsDuotone />,
    },
    {
        title: "Payments",
        href: "/payments",
        icon: <MdOutlinePayments />,
    },
    {
        title: "Transactions",
        href: "/transactions",
        icon: <FiRefreshCw />,
    },
    {
        title: "Statistics",
        href: "/statistics",
        icon: <MdAutoGraph />,
    },
];

interface SidebarProps {}

const AdminSidebar: React.FC<SidebarProps> = () => {
    return (
        <div className="mt-16 min-h-fit flex-none w-56 bg-white py-4 border-r border-gray-300">
            <div className="flex flex-col">
                {nav_components.map((component, index) => (
                    <SideNavLink key={index} href={component.href}>
                        {component.icon}
                        {component.title}
                    </SideNavLink>
                ))}
            </div>
        </div>
    );
};

export default AdminSidebar;
