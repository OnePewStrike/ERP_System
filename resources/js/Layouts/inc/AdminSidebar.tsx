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
        href: "/overview",
        icon: <GiEyeTarget style={{ color: "green" }} />,
    },
    {
        title: "User",
        href: "/admin-users",
        icon: <FaUserCircle style={{ color: "green" }} />,
    },
    {
        title: "Cards",
        href: "/admin-cards",
        icon: <PiCardsDuotone style={{ color: "green" }} />,
    },
    {
        title: "Payments",
        href: "/admin-payments",
        icon: <MdOutlinePayments style={{ color: "green" }} />,
    },
    {
        title: "Transactions",
        href: "/admin-transactions",
        icon: <FiRefreshCw style={{ color: "green" }} />,
    },
    {
        title: "Statistics",
        href: "/admin-statistics",
        icon: <MdAutoGraph style={{ color: "green" }} />,
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
