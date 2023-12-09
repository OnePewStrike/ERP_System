import React from "react";
import SideNavLink from "@/Components/Custom/SideNavLink";

import { GiEyeTarget } from "react-icons/gi";
import { IoIosChatboxes } from "react-icons/io";
import { MdAutoGraph } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";

const nav_components = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: <GiEyeTarget />,
    },
    {
        title: "Trade",
        href: "/trade",
        icon: <IoIosChatboxes />,
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

const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <div className="flex-none w-56 bg-white h-[calc(100vh-4.3em)] py-4 border-r border-gray-300">
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

export default Sidebar;
